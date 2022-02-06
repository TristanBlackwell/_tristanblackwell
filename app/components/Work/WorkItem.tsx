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
        className="fade-in lg:border-gold flex min-w-fit flex-col lg:border-t-2"
        id="workItemRoles"
      >
        {Object.entries(work.attributes.roles).map(([key, value]) => {
          return (
            <div
              key={key + value}
              className="text-md flex min-w-fit flex-col items-end pl-12 pr-8 pt-4 lg:items-start lg:pl-0"
            >
              <h5 className="text-soft-white font-bold uppercase tracking-wider">
                {value} | {work.attributes.name}
              </h5>
              <p className="text-sm">{value}</p>
            </div>
          );
        })}
      </div>
      <div
        id="workItemDesc"
        className="border-gold min-h fade-in border-l-2 px-4 pt-4 lg:border-l-0 lg:pl-0"
        style={{ minHeight: "350px" }}
      >
        <p>{work.attributes.description}</p>
        <div
          dangerouslySetInnerHTML={{ __html: work.html }}
          className="highlights mt-2 pl-6"
        />
      </div>
    </>
  );
}
