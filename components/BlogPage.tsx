"use client";

import { Blog } from "@cl/types";
import ArticleDetails from "@cl/components/ArticleDetails";
import FormattedDate from "@cl/components/FormattedDated";

const BlogPage = ({ blog }: { blog: Blog }) => {
  return (
    <section className="cl__article-details__wrapper">
      <div className="cl__container">
        <div className="cl__article-heading">
          <h2>{blog.title}</h2>
          <p>
            <FormattedDate
              publishedDate={blog.publishedDate.toString()}
              _createdAt={blog._createdAt.toString()}
            />
          </p>
        </div>
        <ArticleDetails blog={blog} />
      </div>
    </section>
  );
};

export default BlogPage;
