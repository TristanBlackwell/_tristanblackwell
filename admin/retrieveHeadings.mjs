import fs from "fs/promises";
import path from "path";
import parseFrontMatter from "front-matter";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const postPath = path.join(__dirname, "/posts");

const dir = await fs.readdir(postPath);

const dynamicMdMatcher = /^(#{2,3})\s+(.*)$/;

dir.map(async (filename) => {
  const file = await fs.readFile(path.join(postPath, filename));
  const { body } = parseFrontMatter(file.toString());

  const allLines = body
    .split(/\r?\n/)
    .map((line) => {
      return line;
    })
    .filter((line) => line.length > 0);

  // Apply regex to filter out lines we can discard
  const matchedHeadings = allLines
    .map((line) => {
      const potentialMatch = dynamicMdMatcher.exec(line);

      // Store the metadata around the line (depth, heading type, textual content)
      if (potentialMatch !== null) {
        return {
          id: potentialMatch[2].replace(" ", "-"),
          depth: potentialMatch[1].length,
          type: potentialMatch[1],
          title: potentialMatch[2],
        };
      }
      return "";
    })
    .filter((line) => line !== "");

  console.log(JSON.stringify(matchedHeadings));
});
