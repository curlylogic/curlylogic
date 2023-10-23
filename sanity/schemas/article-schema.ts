import { Rule } from "sanity";

const article = {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Make it unique and impactful.",
      validation: (Rule: Rule) => [Rule.required()],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "Make it give a brief idea about content.",
      validation: (Rule: Rule) => [Rule.required()],
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["html/css", "javascript", "frontend", "python", "others"],
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
        {
          type: "code",
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};

export default article;
