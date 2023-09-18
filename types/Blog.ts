import { PortableTextBlock } from "sanity";

export type Blog = {
  _id: string;
  _createdAt: Date;
  _updatedAt: Date;
  publishedDate: Date;
  _type: string;
  icon: {
    alt: string;
    iconURL: string;
  };
  title: string;
  subtitle: string;
  slug: string;
  content: PortableTextBlock[];
  tags: string[];
};
