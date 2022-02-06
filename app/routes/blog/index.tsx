import { ChevronRightIcon } from "@heroicons/react/outline";
import { Link, LoaderFunction, useLoaderData } from "remix";
import supabase from "~/services/supabase.service";
import { ISOToFriendlyDate } from "~/utils/helpers";
import { PostMeta } from "~/types";

type LoaderData = {
  blogPosts: PostMeta[];
  count: number;
};

export const loader: LoaderFunction = async () => {
  const { data: posts, error: postError } = await supabase
    .from<PostMeta>("posts")
    .select("id, title, created_at, slug, excerpt")
    .order("created_at", { ascending: true })
    .limit(5);

  const { count, error: countError } = await supabase
    .from("posts")
    .select("id", { count: "exact", head: true });

  if (postError || countError) {
  }

  console.log(posts);
  console.log(count);

  return {
    blogPosts: posts,
    count,
  };
};

export default function Index() {
  const postsData = useLoaderData<LoaderData>();

  return (
    <div className="px-44 lg:px-24 md:px-16 sm:px-8">
      <div className="flex justify-between items-baseline xs:flex-col">
        <h1 className="font:archivo text-2xl text-soft-white font-bold tracking-wider">
          Latest Posts
        </h1>
        <p className="text-lg text-soft-white tracking-wide xs:mt-3">
          <span className="text-gold font-bold">{postsData.count}</span>{" "}
          Articles
        </p>
      </div>
      <section className="grid grid-cols-2 gap-24 mt-12 sm:grid-cols-1 md:gap-8">
        {postsData.count === 0 ? (
          <div>
            <p className="font-archivo text-soft-white text-xl">
              Nothing to show here!
            </p>
          </div>
        ) : (
          postsData.blogPosts.map((post) => {
            return (
              <div
                key={post.created_at + post.title}
                className="bg-slight-blue rounded-md pt-4 px-4 pb-1 shadow-2xl"
              >
                <p className="font-light">
                  {ISOToFriendlyDate(post.created_at)}
                </p>
                <Link to={post.slug} prefetch="intent">
                  <h2 className="text-xl text-soft-white tracking-wide font-archivo font-bold mb-2 cursor-pointer">
                    {post.title}
                  </h2>
                </Link>
                <p className="mb-4">{post.excerpt}</p>
                <Link to={post.slug}>
                  <div className="flex text-soft-white hover:text-gold transition-colors cursor-pointer">
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
