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
      className="relative  flex flex-col-reverse rounded-md h-60 projectCard"
      data-aos="fade-up"
    >
      <img
        className="w-full h-full bg-contain opacity-[.10] hover:opacity-40 transition-opacity"
        src={project.attributes.imgSrc}
        alt={project.attributes.altText}
      />
      <div>
        <div
          className={
            " top-5 right-3 projectCross z-50 cursor-pointer outline-gold " +
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
          "px-3 py-2 pt-4 absolute bottom-0 left-0 overflow-hidden w-fit inline-block h-20 projectDetail " +
          (!hideDetail && "projectDetailOpen")
        }
      >
        <p className="text-md font-bold text-soft-white">
          {project.attributes.name}
          <span className="text-xs font-extralight text-gray-400 pl-3 lg:hidden">
            {project.attributes.time}
          </span>
        </p>
        <div className="flex mt-1">
          <span className="text-xs font-extralight text-gray-400 mr-2 pt-1 lg:block 2xl:hidden">
            {project.attributes.time}
          </span>
          {project.attributes.projectLink !== "" && (
            <a
              href={project.attributes.projectLink ?? "#"}
              target="_blank"
              className="mr-3 outline-gold transition-colors focus:text-soft-white"
              rel="noreferrer"
            >
              <ExternalLinkIcon className="h-6 w-6 text-gray-400 hover:text-soft-white transition-colors focus:text-inherit " />
            </a>
          )}
          {project.attributes.codeLink !== "" && (
            <a
              href={project.attributes.codeLink || "#"}
              target="_blank"
              className="mr-3 outline-gold transition-colors focus:text-soft-white"
              rel="noreferrer"
            >
              <CodeIcon className="h-6 w-6 text-gray-400 hover:text-soft-white transition-colors " />
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
