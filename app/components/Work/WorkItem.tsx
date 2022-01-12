import { WorkDetail } from "~/types";

interface WorkItemProps {
  work: WorkDetail;
}

export default function WorkItem({ work }: WorkItemProps) {
  return (
    <>
      <div className="flex flex-col min-w-fit">
        {work.roles.map((role) => {
          return (
            <div
              key={role.duration}
              className="flex flex-col items-end pl-12 pr-8 pt-4 text-md min-w-fit"
            >
              <h5 className="text-soft-white uppercase font-bold tracking-wider">
                {role.title} | {work.name}
              </h5>
              <p className="text-sm">{role.duration}</p>
            </div>
          );
        })}
      </div>
      <div
        className="border-l-2 border-gold px-4 pt-4 min-h"
        style={{ minHeight: "350px" }}
      >
        <p>{work.description}</p>
        <ul className="styledList pl-6 mt-2">
          {work.highlights.map((hl) => {
            return (
              <li key={hl}>
                <span className="text-xs">{hl}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
