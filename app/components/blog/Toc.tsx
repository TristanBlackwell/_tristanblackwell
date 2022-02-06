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
          )} hover:text-soft-white font-source text-gray-400 transition-colors`}
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
    <div className="sticky top-3 h-min md:hidden lg:block" id="toc">
      <h4 className="font-archivo text-soft-white font-bold uppercase tracking-wider">
        Table of Contents
      </h4>
      {toc.length > 0 ? (
        <Headings headings={toc} activeEl={activeId} />
      ) : (
        <p>Nothing to show</p>
      )}
      <p className="font-archivo uppercase">
        Last updated:{" "}
        <span className="text-soft-white font-source text-md normal-case">
          {ISOToFriendlyDate(updatedAt)}
        </span>
      </p>
    </div>
  );
}
