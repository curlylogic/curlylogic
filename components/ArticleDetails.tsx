import { PortableText } from "@portabletext/react";
import { Blog } from "@cl/types";
import components from "./RichTextComponent";
import { Back } from "./Icons";
import Link from "next/link";

const ArticleDetails = ({ blog }: { blog: Blog }) => {
  return (
    <article className="cl__article-details">
      <PortableText value={blog.content} components={components} />

      <section className="cl__back">
        <Link href={"/"}>
          <Back /> Return To All Articles
        </Link>
      </section>
    </article>
  );
};

export default ArticleDetails;
