import path from "path";
import fs from "fs";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";

const experienceDirectory = path.join(process.cwd(), "experience");

export function getSortedExperienceData() {
    // Get file names under /experience
    const fileNames = fs.readdirSync(experienceDirectory);
    const allExperienceData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");

        // Read markdown file as string
        const fullPath = path.join(experienceDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the project metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...(matterResult.data as { beginDate: string; endDate: string; title: string })
        };
    });
    // Sort projects by date
    return allExperienceData.sort((a, b) => {
        if (a.beginDate < b.beginDate) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllExperienceIds() {
    const fileNames = fs.readdirSync(experienceDirectory);
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            }
        };
    });
}

export async function getExperienceData(id: string) {
    const fullPath = path.join(experienceDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the project metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processContent.toString();

    // Combine the data with the id and contentHml
    return {
        id,
        contentHtml,
        ...(matterResult.data as { beginDate: string; endDate: string; title: string })
    };
}