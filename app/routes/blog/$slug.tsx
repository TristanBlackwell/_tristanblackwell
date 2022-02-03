import { posts } from "@prisma/client";
import { Link, LoaderFunction, useLoaderData } from "remix";
import { db } from "~/utils/db.server";
import ReactMarkdown from "react-markdown";
import SyntaxHighlight from "~/components/Markdown/CodeBlock";
import { useEffect, useState } from "react";
import { TocItem } from "~/types";
import { useActiveId } from "~/hooks/useActiveId";
import Toc from "~/components/blog/Toc";

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
  const activeId = useActiveId(toc);

  const dynamicMdMatcher = /^(#{2,3})\s+(.*)$/;
  const retrieveParsedData = (postContent: string) => {
    // Iterate over all the lines in the file line by line.
    const allLines = postContent
      .split(/\r?\n/)
      .map((line) => {
        return line;
      })
      .filter((line) => line.length > 0);

    // Apply regex to filter out lines we can discard
    const matchedHeadings = allLines
      .map((line) => {
        const potentialMatch = dynamicMdMatcher.exec(line);

        // Store the metadata around the line (depth, heading type, textual content)
        if (potentialMatch !== null) {
          return {
            id: potentialMatch[2].replace(" ", "-"),
            depth: potentialMatch[1].length,
            type: potentialMatch[1],
            title: potentialMatch[2],
          };
        }
        return "";
      })
      .filter((line) => line !== "");
    return matchedHeadings as TocItem[];
  };

  // Slugs the parsed headings and sets their ID's for navigation from ToC
  const setHeadings = () => {
    const postHeadings = Array.from(
      document.querySelectorAll("h2, h3, h4, h5, h6")
    );

    postHeadings.forEach((heading) => {
      const { innerHTML } = heading;
      heading.id = innerHTML.replace(" ", "-");
    });
  };

  useEffect(() => {
    setHeadings();
    setToc(retrieveParsedData(post.content));
    // We only want to run this on initial render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Toc toc={toc} activeId={activeId} updatedAt={post.updated_at} />
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
