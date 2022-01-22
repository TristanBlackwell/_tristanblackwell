import { posts } from "@prisma/client";
import { Link, LoaderFunction, useLoaderData } from "remix";
import { db } from "~/utils/db.server";
import ReactMarkdown from "react-markdown";

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
  return (
    <div className="ml-44 mr-2 lg:ml-32 md:ml-24 sm:ml-8">
      <h1 className="font:archivo text-2xl text-soft-white font-bold tracking-wider">
        {post.title}
      </h1>
      <div className="mt-24 grid grid-cols-4">
        <div className="col-span-3 pr-12">
          <ReactMarkdown className="prose dark:prose-invert prose-headings:text-soft-white prose-h2:text-gold prose-h2:font-archivo">
            {post.content}
          </ReactMarkdown>
        </div>
        <div className="md:hidden lg:block">
          <h4 className="uppercase font-archivo font-bold text-soft-white tracking-wider">
            Table of Contents
          </h4>
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
