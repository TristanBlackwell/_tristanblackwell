import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";

export type WorkMarkdownAttributes = {
  name: string;
  description: string;
  roles: { [role: string]: string };
};

export type ProjectMarkdownAttributes = {
  name: string;
  time: string;
  projectLink?: string;
  codeLink?: string;
};

const workPath = path.join(__dirname, "..", "content/work");
const projectsPath = path.join(__dirname, "..", "content/projects");

function isValidWorkAttributes(
  attributes: any
): attributes is WorkMarkdownAttributes {
  return attributes?.name;
}

function isValidProjectAttributes(
  attributes: any
): attributes is ProjectMarkdownAttributes {
  return attributes?.name;
}

export async function getWorkItems() {
  const dir = await fs.readdir(workPath);
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(workPath, filename));
      const { attributes, body } = parseFrontMatter(file.toString());
      invariant(
        isValidWorkAttributes(attributes),
        `${filename} has bad attributes`
      );
      const html = marked(body);
      return { attributes, html };
    })
  );
}

export async function getProjectItems() {
  const dir = await fs.readdir(projectsPath);
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(projectsPath, filename));
      const { attributes } = parseFrontMatter(file.toString());
      invariant(
        isValidProjectAttributes(attributes),
        `${filename} has bad attributes`
      );
      return { attributes };
    })
  );
}
