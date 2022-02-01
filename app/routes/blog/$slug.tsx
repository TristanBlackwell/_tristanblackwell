import { posts } from "@prisma/client";
import { Link, LoaderFunction, useLoaderData } from "remix";
import { db } from "~/utils/db.server";
import ReactMarkdown from "react-markdown";
import { ISOToFriendlyDate } from "~/utils/helpers";
import SyntaxHighlight from "~/components/Markdown/CodeBlock";
import { useEffect, useState } from "react";
import { TocItem } from "~/types";

export const loader: LoaderFunction = async ({ params }) => {
  const post = await db.posts.findUnique({
    where: { slug: params.slug },
  });

  if (!post) {
    throw new Response("Post was not found", { status: 404 });
  }

  return post;
};

export default function PostSlug() {
  const post = useLoaderData<posts>();

  const [toc, setToc] = useState<TocItem[]>([]);

  const getNestedHeadings = (headingElements: Element[]) => {
    const nestedHeadings: TocItem[] = [];

    headingElements.forEach((heading) => {
      // Extract title and also set it as the ID for use in navigation
      const { innerHTML } = heading;
      heading.id = innerHTML.replace(" ", "");
    });

    console.log(nestedHeadings);

    return nestedHeadings;
  };

  useEffect(() => {
    const postHeadings = Array.from(
      document.querySelectorAll("h2, h3, h4, h5, h6")
    );
    setToc(getNestedHeadings(postHeadings));
  }, []);

  const Headings = ({ headings }: any) => (
    <ul>
      {headings.map((heading: any) => (
        <li key={heading.id}>
          <a href={`#${heading.id}`}>{heading.title}</a>
          {heading.items.length > 0 && (
            <ul>
              {" "}
              {heading.items.map((child: any) => (
                <li key={child.id}>
                  {" "}
                  <a href={`#${child.id}`}>{child.title}</a>{" "}
                </li>
              ))}{" "}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="ml-44 mr-2 lg:ml-32 md:ml-24 sm:ml-8">
      <h1 className="font:archivo text-2xl text-soft-white font-bold tracking-wider">
        {post.title}
      </h1>
      <div className="mt-24 grid grid-cols-4">
        <div className="col-span-3 pr-12">
          <ReactMarkdown
            className="markdown min-w-full"
            components={SyntaxHighlight}
          >
            {post.content}
          </ReactMarkdown>
        </div>
        <div className="md:hidden lg:block sticky top-1 h-min" id="toc">
          <h4 className="uppercase font-archivo font-bold text-soft-white tracking-wider">
            Table of Contents
          </h4>
          <Headings headings={toc} />
          <p className="uppercase font-archivo">
            Last updated:{" "}
            <span className="text-soft-white font-source normal-case text-md">
              {ISOToFriendlyDate(post.updated_at)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function CatchBoundary() {
  return (
    <div className="text-center">
      <h2 className="font:archivo text-2xl text-soft-white font-bold tracking-wider">
        Oops,
        <br /> That post doesn&apos;t seem to exist!
      </h2>
      <div className="mt-8">
        <Link to="/blog" className="btn py-2">
          Back to safety
        </Link>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div className="text-center">
      <h2 className="font:archivo text-2xl text-soft-white font-bold tracking-wider">
        Uh Oh,
        <br /> Looks like something went wrong!
      </h2>
      <div className="mt-8">
        <Link to="/blog" className="btn py-2">
          Back to safety
        </Link>
      </div>
    </div>
  );
}
