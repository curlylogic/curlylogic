"use client";

import { PortableText } from "@portabletext/react";
import { Article } from "@cl/types";
import components from "./RichTextComponent";
import { Back } from "./Icons";
import Link from "next/link";

const ArticleDetails = ({
  article,
  backLink,
}: {
  article: Article;
  backLink: string;
}) => {
  return (
    <article className="cl__article-details">
      <PortableText value={article.content} components={components} />

      <section className="cl__back">
        <Link href={`/${backLink}`}>
          <Back /> Return To All {backLink}
        </Link>
      </section>
    </article>
  );
};

export default ArticleDetails;
