import { Blog } from "@cl/types";
import { groq } from "next-sanity";
import client from "./sanity-client";

export const getBlogs = async (): Promise<Blog[]> => {
  return await client.fetch(
    groq`*[_type=='blog']{
            _id,
            _createdAt,
            _updatedAt,
            title,
            subtitle,
            icon {alt, "iconURL":asset->url},
            publishedDate,
            "slug": slug.current,
        }`,
    { cache: "no-store" }
  );
};

export const getBlog = async (slug: string): Promise<Blog> => {
  return await client.fetch(
    groq`*[_type=='blog' && slug.current==$slug][0]{
            _id,
            _createdAt,
            _updatedAt,
            publishedDate,
            title,
            subtitle,
            "slug": slug.current,
            icon {alt, "iconURL":asset->url},
            content,
            tags,
        }`,
    { slug }
  );
};
