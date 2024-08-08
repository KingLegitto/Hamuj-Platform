import { defineField, defineType } from "sanity";

export const forms = defineType({
  name: "forms",
  title: "Questionnaire Entries",
  type: "document",
  fields: [
    defineField({
      name: "author",
      type: "string",
      
    }),
    defineField({
      name: "data",
      title: 'Questionnaire Data',
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "author",
    },
  },
});
