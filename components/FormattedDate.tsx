const FormattedDate = ({ _createdAt }: { _createdAt: string }) => {
  const date = new Date(_createdAt);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);

  return (
    <time className="cl__article-time" dateTime={_createdAt.toString()}>
      {formattedDate}
    </time>
  );
};

export default FormattedDate;
