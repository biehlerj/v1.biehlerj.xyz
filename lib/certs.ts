import path from "path";
import fs from "fs";
import matter from "gray-matter";
import {CertsData} from "../types";
import {remark} from "remark";
import html from "remark-html";

const certsDirectory = path.join(process.cwd(), "certs");

export function getSortedCertsData() {
    // Get file names under /certs
    const fileNames = fs.readdirSync(certsDirectory);
    const allCertsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        
        // Read markdown file as string
        const fullPath = path.join(certsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        
        // Use gray-matter to parse the project metadata section
        const matterResult = matter(fileContents);
        
        // Combine the data with the id
        return {
            id,
            ...(matterResult.data as CertsData)
        };
    });
    // Sort projects by date
    return allCertsData.sort((a, b) => {
        if (a.id.toUpperCase() < b.id.toUpperCase()) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllCertsIds() {
    const fileNames = fs.readdirSync(certsDirectory);
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            }
        };
    });
}

export async function getCertsData(id: string) {
    const fullPath = path.join(certsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    
    // Use gray-matter to parse the project metadata section
    const matterResult = matter(fileContents);
    
    // Use remark to convert markdown into HTML string
    const processContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processContent.toString();
    
    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...(matterResult.data as CertsData)
    };
}