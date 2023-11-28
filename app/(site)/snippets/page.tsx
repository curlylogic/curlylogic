import { getSnippets } from "@cl/sanity/sanity-utils";
import Banner from "@cl/components/Banner";
import ArticleCard from "@cl/components/ArticleCard";

export const dynamic = "force-dynamic";

const Snippets = async () => {
  const snippets = await getSnippets();

  return (
    <>
      <Banner heading={"Snippets"} />
      <section className="cl__articles-wrapper">
        {snippets.map((snippet) => (
          <ArticleCard article={snippet} key={snippet._id} root={"snippets"} />
        ))}
      </section>
    </>
  );
};

export default Snippets;
