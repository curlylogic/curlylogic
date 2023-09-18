import imageUrlBuilder from "@sanity/image-url";
import client from "@cl/sanity/sanity-client";

/* eslint-disable @next/next/no-img-element */

const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

const ImageBuilder = ({ value }: any) => {
  return (
    <figure className="cl__example-image">
      <img
        src={urlFor(value).url()}
        alt={value.alt || value._key}
        loading="lazy"
      />
    </figure>
  );
};

export default ImageBuilder;
