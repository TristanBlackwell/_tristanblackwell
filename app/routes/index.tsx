import { LoaderFunction, useLoaderData } from "remix";
import About from "~/components/About";
import Contact from "~/components/Contact";
import Hero from "~/components/Hero";
import Projects from "~/components/Projects/Projects";
import Work from "~/components/Work/Work";
import {
  getProjectItems,
  getWorkItems,
  ProjectMarkdownAttributes,
  WorkMarkdownAttributes,
} from "~/indexContent";

interface IndexContent {
  work: {
    attributes: WorkMarkdownAttributes;
    html: string;
  }[];
  projects: {
    attributes: ProjectMarkdownAttributes;
  }[];
}

export const loader: LoaderFunction = async () => {
  return {
    work: await getWorkItems(),
    projects: await getProjectItems(),
  };
};

export default function Index() {
  const content = useLoaderData<IndexContent>();

  return (
    <div>
      <main className="px-20 sm:px-3 ">
        <Hero />
        <About />
        <Work workItems={content.work} />
        <Projects projects={content.projects} />
        <Contact />
      </main>
    </div>
  );
}
