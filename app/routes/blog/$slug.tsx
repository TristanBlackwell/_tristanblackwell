import { posts } from "@prisma/client";
import { Link, LoaderFunction, useLoaderData } from "remix";
import ReactMarkdown from "react-markdown";
import SyntaxHighlight from "~/components/Markdown/CodeBlock";
import { useEffect, useState } from "react";
import supabase from "~/services/supabase.service";
import { Post, TocItem } from "~/types";
import { useActiveId } from "~/hooks/useActiveId";
import Toc from "~/components/blog/Toc";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.slug) {
    throw new Response("I'm not sure waht to look for.", { status: 400 });
  }

  const { data: post, error } = await supabase
    .from<Post>("posts")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!post) {
    throw new Response("Post was not found", { status: 404 });
  } else if (error) {
    throw new Response(
      "I can't help right now. Maybe try refreshing the page?",
      { status: 500 }
    );
  }

  return post;
};

export default function PostSlug() {
  const post = useLoaderData<posts>();

  const [toc, setToc] = useState<TocItem[]>([]);
  const activeId = useActiveId(toc);

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
    if (post.toc) {
      setToc(JSON.parse(post.toc));
    }
    // We only want to run this on initial render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ml-44 mr-2 sm:ml-8 md:ml-24 lg:ml-32">
      <div className="bg-slight-blue absolute top-0 left-0 z-[-5] h-[45%] w-full opacity-50" />
      <h1 className="font:archivo text-soft-white text-2xl font-bold tracking-wider">
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
      <h2 className="font:archivo text-soft-white text-2xl font-bold tracking-wider">
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
      <h2 className="font:archivo text-soft-white text-2xl font-bold tracking-wider">
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
