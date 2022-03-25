import path from "path";
import fs from "fs";
import matter from "gray-matter";
import {EducationData} from "../types";
import {remark} from "remark";
import html from "remark-html";

const educationDirectory = path.join(process.cwd(), "education");

export function getSortedEducationData() {
    // Get file names under /education
    const fileNames = fs.readdirSync(educationDirectory);
    const allEducationData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        
        // Read markdown file as string
        const fullPath = path.join(educationDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        
        // Use gray-matter to parse the project metadata section
        const matterResult = matter(fileContents);
        
        // Combine the data with the id
        return {
            id,
            ...(matterResult.data as EducationData)
        };
    });
    // Sort projects by date
    return allEducationData.sort((a, b) => {
        if (a.beginDate < b.beginDate) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllEducationIds() {
    const fileNames = fs.readdirSync(educationDirectory);
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            }
        };
    });
}

export async function getEducationData(id: string) {
    const fullPath = path.join(educationDirectory, `${id}.md`);
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
        ...(matterResult.data as EducationData)
    };
}