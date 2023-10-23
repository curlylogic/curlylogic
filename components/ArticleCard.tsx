import { Article } from "@cl/types";
import Image from "next/image";
import Link from "next/link";
import FormattedDate from "./FormattedDate";

const ArticleCard = ({ article, root }: { article: Article; root: string }) => {
  const { _createdAt, icon, slug, title, description } = article;

  return (
    <article className="cl__article-card">
      <div className="cl__icon">
        <Image src={icon.iconURL} alt={icon.alt} width={60} height={60} />
      </div>
      <h2 className="cl__article-heading">
        <Link href={`/${root}/${slug}`}>{title}</Link>
      </h2>
      <p className="cl__article-description">{description}</p>
      <FormattedDate _createdAt={_createdAt.toString()} />
    </article>
  );
};

export default ArticleCard;
