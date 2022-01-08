import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getPost, Post } from "~/post";
import invariant from "tiny-invariant";

export const loader: LoaderFunction = async ({ 
  params 
}) => {
  invariant(params.slug, "Expected params.slug");
  return getPost(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData<Post>();
  return (
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
  )
}