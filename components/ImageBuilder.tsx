import imageUrlBuilder from "@sanity/image-url";
import { readClient as client } from "@cl/sanity/sanity-client";

/* eslint-disable @next/next/no-img-element */

const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

const ImageBuilder = ({ value }: any) => {
  return (
    <img
      className="cl__example-image"
      src={urlFor(value).url()}
      alt={value.alt || value._key}
      loading="lazy"
    />
  );
};

export default ImageBuilder;
