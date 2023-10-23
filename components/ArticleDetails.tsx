"use client";

import { PortableText } from "@portabletext/react";
import { Article } from "@cl/types";
import components from "./RichTextComponent";
import { Back } from "./Icons";
import Link from "next/link";

const ArticleDetails = ({ article }: { article: Article }) => {
  return (
    <article className="cl__article-details">
      <PortableText value={article.content} components={components} />

      <section className="cl__back">
        <Link href={"/articles"}>
          <Back /> Return To All Articles
        </Link>
      </section>
    </article>
  );
};

export default ArticleDetails;
