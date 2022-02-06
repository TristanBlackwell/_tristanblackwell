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
        <h2 className="font-archivo text-soft-white text-3xl font-bold tracking-wide">
          What I&apos;ve been up to
        </h2>
        <div className="border-gold mt-3 border-t-2"></div>
        <div className="mt-8 flex lg:flex-col" data-aos="fade-up">
          <div className="max-w-min">
            <ul
              id="workList"
              aria-label="Work tabs"
              className="lg:flex lg:overflow-y-hidden lg:overflow-x-scroll"
            >
              {workItems.map((w, index: number) => {
                return (
                  <li
                    key={w.attributes.name + w.attributes.roles[0]}
                    className={
                      "workItem hover:text-gold focus:bg-slight-blue h-14 cursor-pointer px-8 py-3 text-center text-lg font-bold tracking-wide outline-none transition-colors lg:mb-2 " +
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
                className="border-gold absolute top-0 right-0 border-r-2 py-7 text-lg font-bold lg:hidden "
                style={{
                  transform: `translateY(calc(${activeTab} * 57px))`,
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
