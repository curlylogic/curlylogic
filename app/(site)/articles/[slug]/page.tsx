import ArticleDetails from "@cl/components/ArticleDetails";
import { getArticle } from "@cl/sanity/sanity-utils";

export const dynamic = "force-dynamic";

const Article = async ({ params }: { params: { slug: string } }) => {
  const article = await getArticle(params.slug);

  return <ArticleDetails article={article} backLink={"articles"} />;
};

export default Article;
