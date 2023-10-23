const Banner = ({ heading }: { heading: string }) => {
  return (
    <section className="cl__banner">
      <h1 className="cl__banner-title">{heading}</h1>
    </section>
  );
};

export default Banner;
