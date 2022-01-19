import { useRef, useState } from "react";
import { WorkMarkdownAttributes } from "~/indexContent";
import WorkItem from "./WorkItem";
interface WorkProps {
  workItems: {
    attributes: WorkMarkdownAttributes;
    html: string;
  }[];
}

export default function Work({ workItems }: WorkProps) {
  const workTabsRef = useRef<Array<HTMLLIElement | null>>([]);
  const [activeTab, setActiveTab] = useState(0);

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLLIElement>,
    index: number
  ) => {
    const tabsLength = workTabsRef.current.length;
    if (e.key === "Enter") {
      setActiveTab(index);
    } else if (e.key === "ArrowUp") {
      if (index - 1 >= 0) {
        e.preventDefault();
        workTabsRef.current[index - 1]?.focus();
      } else if (index - 1 === -1) {
        e.preventDefault();
        workTabsRef.current[tabsLength - 1]?.focus();
      }
    } else if (e.key === "ArrowDown") {
      if (index + 1 <= tabsLength - 1) {
        e.preventDefault();
        workTabsRef.current[index + 1]?.focus();
      } else if (index + 1 === tabsLength) {
        e.preventDefault();
        workTabsRef.current[0]?.focus();
      }
    }
  };

  // Reset offset Width to trigger animation again.
  const triggerAnimation = () => {
    const workRoles = document.getElementById("workItemRoles");
    const workDesc = document.getElementById("workItemDesc");

    workRoles?.classList.remove("fade-in");
    workDesc?.classList.remove("fade-in");

    void workRoles?.offsetWidth;
    void workDesc?.offsetWidth;

    workRoles?.classList.add("fade-in");
    workDesc?.classList.add("fade-in");
  };

  return (
    <section className="mt-20" id="experience">
      <div>
        <h2 className="text-3xl font-archivo font-bold text-soft-white tracking-wide">
          What I&apos;ve been up to
        </h2>
        <div className="border-t-2 border-gold mt-3"></div>
        <div className="mt-8 flex lg:flex-col" data-aos="fade-up">
          <div className="max-w-min">
            <ul
              id="workList"
              aria-label="Work tabs"
              className="lg:flex lg:overflow-x-scroll lg:overflow-y-hidden"
            >
              {workItems.map((w, index: number) => {
                return (
                  <li
                    key={w.attributes.name + w.attributes.roles[0]}
                    className={
                      "workItem px-8 py-3 text-center text-lg font-bold tracking-wide cursor-pointer hover:text-gold transition-colors focus:bg-slight-blue outline-none lg:mb-2 " +
                      (index === activeTab && "text-gold")
                    }
                    onClick={() => {
                      setActiveTab(index);
                      triggerAnimation();
                    }}
                    onKeyDown={(e) => {
                      handleKeyPress(e, index);
                    }}
                    tabIndex={0}
                    aria-selected={activeTab === index}
                    ref={(el) => (workTabsRef.current[index] = el)}
                  >
                    {w.attributes.name}
                  </li>
                );
              })}
              <div
                id="workSlider"
                className="border-r-2 border-gold py-7 text-lg font-bold absolute top-0 right-0 lg:hidden "
                style={{
                  transform: `translateY(calc(${activeTab} * 52px))`,
                }}
              />
            </ul>
          </div>
          {typeof workItems[activeTab] !== "undefined" && (
            <WorkItem work={workItems[activeTab]} />
          )}
        </div>
      </div>
    </section>
  );
}
