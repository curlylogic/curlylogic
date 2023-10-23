import { Article } from "@cl/types";
import { groq } from "next-sanity";
import { readClient as client } from "./sanity-client";

export const getArticles = async (): Promise<Article[]> => {
  return await client.fetch(
    groq`*[_type=='article'] | order(_createdAt desc){
            _id,
            _createdAt,
            _updatedAt,
            title,
            description,
            icon {alt, "iconURL":asset->url},
            "slug": slug.current,
            content,
        }`
  );
};

export const getSnippets = async (): Promise<Article[]> => {
  return await client.fetch(
    groq`*[_type=='snippet'] | order(_createdAt desc){
            _id,
            _createdAt,
            _updatedAt,
            title,
            description,
            icon {alt, "iconURL":asset->url},
            "slug": slug.current,
            content,
        }`
  );
};

export const getArticle = async (slug: string): Promise<Article> => {
  return await client.fetch(
    groq`*[_type=='article' && slug.current==$slug][0]{
            _id,
            _createdAt,
            _updatedAt,
            title,
            description,
            "slug": slug.current,
            icon {alt, "iconURL":asset->url},
            content,
            tags,
        }`,
    { slug }
  );
};

export const getSnippet = async (slug: string): Promise<Article> => {
  return await client.fetch(
    groq`*[_type=='snippet' && slug.current==$slug][0]{
            _id,
            _createdAt,
            _updatedAt,
            title,
            description,
            "slug": slug.current,
            icon {alt, "iconURL":asset->url},
            content,
            tags,
        }`,
    { slug }
  );
};
