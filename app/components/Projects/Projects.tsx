import Project from "./Project";

export default function Projects() {
  const projects = [1, 2, 3];

  return (
    <section id="projects">
      <div>
        <h2 className="text-3xl font-archivo font-bold tracking-wide mt-20 text-soft-white">
          Some of my projects
        </h2>
      </div>
      <div className="border-t-2 border-gold mt-3" />
      <div className="grid grid-cols-2 gap-24 mt-12 mx-2">
        {projects.map((project) => {
          return <Project key={project} />;
        })}
      </div>
    </section>
  );
}
