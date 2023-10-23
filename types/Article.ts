import { PortableTextBlock } from "sanity";

export type Article = {
  _id: string;
  _createdAt: Date;
  _updatedAt: Date;
  _type: string;
  icon: {
    alt: string;
    iconURL: string;
  };
  title: string;
  description: string;
  slug: string;
  content: PortableTextBlock[];
  tags: string[];
};
