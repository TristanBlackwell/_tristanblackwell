import { Link } from "remix";
import { TocItem } from "~/types";
import { ISOToFriendlyDate } from "~/utils/helpers";

interface HeadingsProps {
  headings: TocItem[];
  activeEl: string;
}

const Headings = ({ headings, activeEl }: HeadingsProps) => (
  <ul className="my-4">
    {headings.map((heading) => {
      return (
        <li
          key={heading.id}
          className={`pl-${heading.depth} my-${Math.floor(
            heading.depth / 2
          )} text-gray-400 hover:text-soft-white transition-colors font-source`}
        >
          <Link
            to={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById(heading.id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={activeEl === heading.id ? "text-gold font-bold" : ""}
          >
            {heading.title}
          </Link>
        </li>
      );
    })}
  </ul>
);

interface TocProps {
  toc: TocItem[];
  activeId: string;
  updatedAt: Date;
}

export default function Toc({ toc, activeId, updatedAt }: TocProps) {
  return (
    <div className="md:hidden lg:block sticky top-3 h-min" id="toc">
      <h4 className="uppercase font-archivo font-bold text-soft-white tracking-wider">
        Table of Contents
      </h4>
      {toc.length > 0 ? (
        <Headings headings={toc} activeEl={activeId} />
      ) : (
        <p>Nothing to show</p>
      )}
      <p className="uppercase font-archivo">
        Last updated:{" "}
        <span className="text-soft-white font-source normal-case text-md">
          {ISOToFriendlyDate(updatedAt)}
        </span>
      </p>
    </div>
  );
}
