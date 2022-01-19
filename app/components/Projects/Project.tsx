import { useState } from "react";
import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import { ProjectMarkdownAttributes } from "~/indexContent";

interface ProjectProps {
  project: {
    attributes: ProjectMarkdownAttributes;
  };
}

export default function Project({ project }: ProjectProps) {
  const [hideDetail, setHideDetail] = useState(true);

  return (
    <div
      className="relative  flex flex-col-reverse rounded-md h-60 projectCard"
      data-aos="fade-up"
    >
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
          "px-3 py-2 pt-4 absolute bottom-0 left-0 right-0 overflow-hidden w-100 h-20 projectDetail " +
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
          <a
            href={project.attributes.projectLink ?? "#"}
            className="mr-3 outline-gold transition-colors focus:text-soft-white"
          >
            <ExternalLinkIcon className="h-6 w-6 text-gray-400 hover:text-soft-white transition-colors focus:text-inherit " />
          </a>
          <a
            href={project.attributes.codeLink || "#"}
            className="mr-3 outline-gold transition-colors focus:text-soft-white"
          >
            <CodeIcon className="h-6 w-6 text-gray-400 hover:text-soft-white transition-colors " />
          </a>
        </div>
        <div className="mt-3 text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      </div>
    </div>
  );
}
