import { Blog } from "@cl/types";
import Image from "next/image";
import Link from "next/link";
import FormattedDate from "./FormattedDated";

const ArticleCard = ({ blog }: { blog: Blog }) => {
  const { icon, slug, title, subtitle, _createdAt, publishedDate } = blog;

  return (
    <article className="cl__article-card">
      <figure>
        <Image src={icon.iconURL} alt={icon.alt} width={80} height={80} />
      </figure>
      <div className="cl__article-content">
        <Link href={`/blog/${slug}`}>
          <h3 className="cl__article-card__title">{title}</h3>
          <p className="cl__article-card__subtitle">{subtitle}</p>
        </Link>
        <FormattedDate
          _createdAt={_createdAt.toString()}
          publishedDate={publishedDate.toString()}
        />
      </div>
    </article>
  );
};

export default ArticleCard;
