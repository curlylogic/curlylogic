const FormattedDate = ({
  publishedDate,
  _createdAt,
}: {
  publishedDate: string;
  _createdAt: string;
}) => {
  const date = new Date(publishedDate);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);

  return (
    <time
      className="cl__article__published-date"
      dateTime={_createdAt.toString()}
    >
      {formattedDate}
    </time>
  );
};

export default FormattedDate;
