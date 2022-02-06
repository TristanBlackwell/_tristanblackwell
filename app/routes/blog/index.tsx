import { ChevronRightIcon } from "@heroicons/react/outline";
import { Link, LoaderFunction, useCatch, useLoaderData } from "remix";
import supabase from "~/services/supabase.service";
import { ISOToFriendlyDate } from "~/utils/helpers";
import { PostMeta } from "~/types";

type LoaderData = {
  blogPosts: PostMeta[] | null;
  count: number | null;
};

export const loader: LoaderFunction = async () => {
  const { data: posts, error: postError } = await supabase
    .from<PostMeta>("posts")
    .select("id, title, created_at, slug, excerpt")
    .order("created_at", { ascending: true })
    .limit(5);

  const { count } = await supabase
    .from("posts")
    .select("id", { count: "exact", head: true });

  if (postError) {
    throw new Response("Unable to load posts. Please try again later.", {
      status: 500,
    });
  }

  return {
    blogPosts: posts,
    count,
  };
};

export default function Index() {
  const postsData = useLoaderData<LoaderData>();

  return (
    <div className="px-44 sm:px-8 md:px-16 lg:px-24">
      <div className="xs:flex-col flex items-baseline justify-between">
        <h1 className="font:archivo text-soft-white text-2xl font-bold tracking-wider">
          Latest Posts
        </h1>
        <p className="text-soft-white xs:mt-3 text-lg tracking-wide">
          <span className="text-gold font-bold">
            {postsData.count ? postsData.count : 0}
          </span>{" "}
          Articles
        </p>
      </div>
      <section className="mt-12 grid grid-cols-2 gap-24 sm:grid-cols-1 md:gap-8">
        {postsData.count === 0 ? (
          <div>
            <p className="font-archivo text-soft-white text-xl">
              Nothing to show here!
            </p>
          </div>
        ) : (
          postsData.blogPosts &&
          postsData.blogPosts.map((post) => {
            return (
              <div
                key={post.created_at + post.title}
                className="bg-slight-blue rounded-md px-4 pt-4 pb-1 shadow-2xl"
              >
                <p className="font-light">
                  {ISOToFriendlyDate(post.created_at)}
                </p>
                <Link to={post.slug} prefetch="intent">
                  <h2 className="text-soft-white font-archivo mb-2 cursor-pointer text-xl font-bold tracking-wide">
                    {post.title}
                  </h2>
                </Link>
                <p className="mb-4">{post.excerpt}</p>
                <Link to={post.slug}>
                  <div className="text-soft-white hover:text-gold flex cursor-pointer transition-colors">
                    <span className="italic">see more</span>
                    <ChevronRightIcon className="h-6 w-6 hover:translate-x-1 hover:transition-transform hover:ease-in-out" />
                  </div>
                </Link>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div className="text-center">
      <h2 className="font:archivo text-soft-white text-2xl font-bold tracking-wider">
        {caught.data}
      </h2>
      <div className="mt-8">
        <Link to="/" className="btn py-2">
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
        <Link to="/" className="btn py-2">
          Back to safety
        </Link>
      </div>
    </div>
  );
}
