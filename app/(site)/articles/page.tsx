import { getArticles } from "@cl/sanity/sanity-utils";
import Banner from "@cl/components/Banner";
import ArticleCard from "@cl/components/ArticleCard";

export const dynamic = "force-dynamic";

const Articles = async () => {
  const articles = await getArticles();

  return (
    <>
      <Banner heading={"Articles"} />
      <section className="cl__articles-wrapper">
        {articles.map((article) => (
          <ArticleCard article={article} key={article._id} root={"articles"} />
        ))}
      </section>
    </>
  );
};

export default Articles;
