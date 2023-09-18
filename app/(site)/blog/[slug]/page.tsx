import BlogPage from "@cl/components/BlogPage";
import { getBlog } from "@cl/sanity/sanity-utils";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const blog = await getBlog(slug);

  // optionally access and extend (rather than replace) parent metadata
  const parentKeywords = (await parent).keywords || [];

  // updated title
  const title = `${blog.title} | curlylogic`;

  return {
    title: title,
    description: blog.subtitle,
    keywords: [...blog.tags, ...parentKeywords],
  };
}

const Blog = async ({ params }: Props) => {
  const slug = params.slug;
  const blog = await getBlog(slug);
  return <BlogPage blog={blog} />;
};

export default Blog;
