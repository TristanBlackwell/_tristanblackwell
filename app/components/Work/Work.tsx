import { useRef, useState } from "react";
import { WorkDetail } from "~/types";
import WorkItem from "./WorkItem";

const work: WorkDetail[] = [
  {
    name: "Zing",
    roles: [
      {
        title: "Junior Developer",
        duration: "June 2021 - Present",
      },
    ],
    description:
      "Zing build solutions helping businesses connect with their customers through a multitude of communication channels. As a Twilio Gold consulting partner, Zing leverage the Twilio stack to deliver experiences unique to client’s needs.",
    highlights: [
      "Worked alongside a team of developers to build a contact centre solution for the Norwegian Refugee Council allowing agents to connect to beneficiaries in need of help with no cost to them.",
      "Developed a solution for Foodhub to easily connect with their ever-growing collection of restaurant partners. A solution required to integrate with an established internal CRM & existing AWS architecture.",
      "Built & improved on internal systems tackling the challenges that arise as a small business",
    ],
  },
  {
    name: "Brookes",
    roles: [
      {
        title: "Undergraduate Student",
        duration: "September 2019 - May 2023",
      },
    ],
    description: "Computer science",
    highlights: ["highlight 1"],
  },
];

export default function Work() {
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
        <div className="mt-8 flex">
          <div className="max-w-min">
            <ul id="workList" aria-label="Work tabs">
              {work.map((w, index) => {
                return (
                  <li
                    key={w.name + w.roles[0].duration}
                    className={
                      "workItem px-8 py-3 text-center text-lg font-bold tracking-wide cursor-pointer hover:text-gold transition-colors " +
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
                    {w.name}
                  </li>
                );
              })}
              <div
                id="workSlider"
                className="border-r-2 border-gold py-7 text-lg font-bold absolute top-0 right-0 "
                style={{
                  transform: `translateY(calc(${activeTab} * 52px))`,
                }}
              />
            </ul>
          </div>
          {typeof work[activeTab] !== "undefined" && (
            <WorkItem work={work[activeTab]} />
          )}
        </div>
      </div>
    </section>
  );
}
