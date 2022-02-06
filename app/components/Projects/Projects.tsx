import { ProjectMarkdownAttributes } from "~/indexContent";
import Project from "./Project";

interface ProjectsProps {
  projects: {
    attributes: ProjectMarkdownAttributes;
    html: string;
  }[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects">
      <div>
        <h2 className="font-archivo text-soft-white mt-20 text-3xl font-bold tracking-wide">
          Some of my projects
        </h2>
      </div>
      <div className="border-gold mt-3 border-t-2" />
      <div className="mx-2 mt-12 grid grid-cols-2 gap-24 md:grid-cols-1 lg:gap-12">
        {projects.map((project) => {
          return <Project key={project.attributes.name} project={project} />;
        })}
      </div>
    </section>
  );
}
