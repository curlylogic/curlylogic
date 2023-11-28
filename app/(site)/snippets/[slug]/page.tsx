import ArticleDetails from "@cl/components/ArticleDetails";
import { getSnippet } from "@cl/sanity/sanity-utils";

export const dynamic = "force-dynamic";

const Snippet = async ({ params }: { params: { slug: string } }) => {
  const snippet = await getSnippet(params.slug);

  return <ArticleDetails article={snippet} backLink={"snippets"} />;
};

export default Snippet;
