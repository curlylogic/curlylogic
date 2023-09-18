import { Rule } from "sanity";

const blog = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Make it unique and impactful.",
      validation: (Rule: Rule) => [
        Rule.required(),
        Rule.max(120).error(`A title shouldn't be more than 120 characters.`),
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 125 },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "Make it give a brief idea about content.",
      validation: (Rule: Rule) => [
        Rule.required(),
        Rule.max(250).error(
          `A subtitle shouldn't be more than 250 characters.`
        ),
      ],
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
      name: "publishedDate",
      title: "Published Date",
      type: "date",
      options: {
        dateFormat: "MMM DD, YYYY",
        calendarTodayLabel: "Today",
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
  orderings: [
    {
      title: "Published Date",
      name: "publishedDateDesc",
      by: [{ field: "publishedDate", direction: "desc" }],
    },
  ],
};

export default blog;
