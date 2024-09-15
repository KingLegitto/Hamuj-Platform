import { defineField, defineType } from "sanity";

export const projects = defineType({
  name: "projects",
  title: "Hamuj Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((title) => {
          const noMultipleSpacesRegex =
            /^[^\s](?:[a-zA-Z0-9&]+(?:\s[a-zA-Z0-9&]+)*)?$/;
          const capitalFirstLetterRegex =
            /^([A-Z0-9][a-zA-Z0-9&]*\s)*[A-Z0-9][a-zA-Z0-9&]*$/;

          // Check for multiple consecutive spaces
          if (!noMultipleSpacesRegex.test(title!)) {
            return "No multiple consecutive spaces between words, neither can you end title with a space";
          }
          // Check if title has only valid characters and capital first letters
          if (!capitalFirstLetterRegex.test(title!)) {
            return "Capitalize each word in the title please";
          }
          return true;
        }),
    }),
    defineField({
      name: "client",
      type: "string",
    }),
    defineField({
      name: "area",
      title: "Location - Area",
      type: "string",
    }),
    defineField({
      name: "state",
      title: "Location - State",
      type: "string",
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Interiors', value: 'interiors' },
          { title: 'Construction', value: 'construction' },
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: "completionDate",
      type: "string",
      description: 'For consistency use this format: mm-yy'
    }),
    defineField({
      name: "highlight",
      type: "boolean",
    }),
    defineField({
      name: "images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "title",
      projectType: "projectType",
      media: "images.0.asset",
    },
    prepare(selection) {
      const { title, projectType, media } = selection;
      return {
        title: title || "Untitled",
        subtitle: projectType || "---",
        media: media,
      };
    },
  },
});
