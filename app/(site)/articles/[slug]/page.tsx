import ArticleDetails from "@cl/components/ArticleDetails";
import { getArticle } from "@cl/sanity/sanity-utils";

const Article = async ({ params }: { params: { slug: string } }) => {
  const article = await getArticle(params.slug);

  return <ArticleDetails article={article} />;
};

export default Article;
