import ArticleDetails from "@cl/components/ArticleDetails";
import { getSnippet } from "@cl/sanity/sanity-utils";

const Snippet = async ({ params }: { params: { slug: string } }) => {
  const snippet = await getSnippet(params.slug);

  return <ArticleDetails article={snippet} />;
};

export default Snippet;
