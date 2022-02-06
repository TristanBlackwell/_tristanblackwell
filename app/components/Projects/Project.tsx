import { useState } from "react";
import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import { ProjectMarkdownAttributes } from "~/indexContent";

interface ProjectProps {
  project: {
    attributes: ProjectMarkdownAttributes;
    html: string;
  };
}

export default function Project({ project }: ProjectProps) {
  const [hideDetail, setHideDetail] = useState(true);

  return (
    <div
      className="projectCard  relative flex h-60 flex-col-reverse rounded-md"
      data-aos="fade-up"
    >
      <img
        className="h-full w-full bg-contain opacity-[.10] transition-opacity hover:opacity-40"
        src={project.attributes.imgSrc}
        alt={project.attributes.altText}
      />
      <div>
        <div
          className={
            " projectCross outline-gold top-5 right-3 z-50 cursor-pointer " +
            (!hideDetail ? "projectCrossClosed" : "projectCrossOpen")
          }
          onClick={() => {
            setHideDetail(!hideDetail);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setHideDetail(!hideDetail);
            }
          }}
          tabIndex={0}
          aria-label="Expand description"
          aria-checked={!hideDetail}
        />
      </div>
      <div
        className={
          "projectDetail absolute bottom-0 left-0 inline-block h-20 w-fit overflow-hidden px-3 py-2 pt-4 " +
          (!hideDetail && "projectDetailOpen")
        }
      >
        <p className="text-md text-soft-white font-bold">
          {project.attributes.name}
          <span className="pl-3 text-xs font-extralight text-gray-400 lg:hidden">
            {project.attributes.time}
          </span>
        </p>
        <div className="mt-1 flex">
          <span className="mr-2 pt-1 text-xs font-extralight text-gray-400 lg:block 2xl:hidden">
            {project.attributes.time}
          </span>
          {project.attributes.projectLink !== "" && (
            <a
              href={project.attributes.projectLink ?? "#"}
              target="_blank"
              className="outline-gold focus:text-soft-white mr-3 transition-colors"
              rel="noreferrer"
            >
              <ExternalLinkIcon className="hover:text-soft-white h-6 w-6 text-gray-400 transition-colors focus:text-inherit " />
            </a>
          )}
          {project.attributes.codeLink !== "" && (
            <a
              href={project.attributes.codeLink || "#"}
              target="_blank"
              className="outline-gold focus:text-soft-white mr-3 transition-colors"
              rel="noreferrer"
            >
              <CodeIcon className="hover:text-soft-white h-6 w-6 text-gray-400 transition-colors " />
            </a>
          )}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: project.html }}
          className="mt-3 text-xs"
        />
      </div>
    </div>
  );
}
