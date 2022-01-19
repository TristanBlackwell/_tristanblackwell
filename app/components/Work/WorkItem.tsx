import { WorkMarkdownAttributes } from "~/indexContent";

interface WorkItemProps {
  work: {
    attributes: WorkMarkdownAttributes;
    html: string;
  };
}

export default function WorkItem({ work }: WorkItemProps) {
  return (
    <>
      <div
        className="flex flex-col min-w-fit fade-in lg:border-t-2 lg:border-gold"
        id="workItemRoles"
      >
        {Object.entries(work.attributes.roles).map(([key, value]) => {
          return (
            <div
              key={key + value}
              className="flex flex-col items-end pl-12 pr-8 pt-4 text-md min-w-fit lg:items-start lg:pl-0"
            >
              <h5 className="text-soft-white uppercase font-bold tracking-wider">
                {value} | {work.attributes.name}
              </h5>
              <p className="text-sm">{value}</p>
            </div>
          );
        })}
      </div>
      <div
        id="workItemDesc"
        className="border-l-2 border-gold px-4 pt-4 min-h fade-in lg:border-l-0 lg:pl-0"
        style={{ minHeight: "350px" }}
      >
        <p>{work.attributes.description}</p>
        <div
          dangerouslySetInnerHTML={{ __html: work.html }}
          className="pl-6 mt-2 highlights"
        />
        {/* <ul className="styledList pl-6 mt-2">
          {work.highlights.map((hl) => {
            return (
              <li key={hl}>
                <span className="text-xs">{hl}</span>
              </li>
            );
          })}
        </ul> */}
      </div>
    </>
  );
}
