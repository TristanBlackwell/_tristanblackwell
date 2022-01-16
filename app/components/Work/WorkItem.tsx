import { WorkDetail } from "~/types";

interface WorkItemProps {
  work: WorkDetail;
}

export default function WorkItem({ work }: WorkItemProps) {
  return (
    <>
      <div
        className="flex flex-col min-w-fit fade-in lg:border-t-2 lg:border-gold"
        id="workItemRoles"
      >
        {work.roles.map((role) => {
          return (
            <div
              key={role.duration}
              className="flex flex-col items-end pl-12 pr-8 pt-4 text-md min-w-fit lg:items-start lg:pl-0"
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
        id="workItemDesc"
        className="border-l-2 border-gold px-4 pt-4 min-h fade-in lg:border-l-0 lg:pl-0"
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
