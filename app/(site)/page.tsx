import { getBlogs } from "@sanity/sanity-utils";
import { Blog } from "@cl/types";
import ArticleCard from "@cl/components/ArticleCard";

export const dynamic = "force-dynamic";

const Home = async () => {
  const blogs = await getBlogs();

  return (
    <div className="cl__article-card__wrapper">
      <div className="cl__container">
        <section className="cl__article-card__list">
          {blogs.map((blog: Blog) => (
            <ArticleCard key={blog._id} blog={blog} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
