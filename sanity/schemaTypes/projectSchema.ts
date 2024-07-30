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
      description: "NOTE: Please capitalize the first letter of every word in the title, also no special characters allowed except spaces between words. Thank you",
      validation: Rule => Rule.required()
        .custom(title => {
          const noSpecialCharsRegex = /^[a-zA-Z0-9&\s]*$/;
          const noMultipleSpacesRegex = /^[^\s](?:[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)*)?$/;
          const capitalFirstLetterRegex = /^([A-Z0-9][a-zA-Z0-9]*\s)*[A-Z0-9][a-zA-Z0-9]*$/;

          // Check for special characters other than spaces
          if (!noSpecialCharsRegex.test(title!)) {
            return 'No special characters allowed, just alphanumeric and spaces';
          }
          // Check for multiple consecutive spaces
          if (!noMultipleSpacesRegex.test(title!)) {
            return 'No multiple consecutive spaces between words, neither can you end title with a space';
          }
          // Check if title has only valid characters and capital first letters
          if (!capitalFirstLetterRegex.test(title!)) {
            return 'Capitalize each word in the title please';
          }
          
          return true;
        }),
    }),
    defineField({
      name: "client",
      type: "string",
    }),
    defineField({
        name: "location",
        type: "string",
      }),
    defineField({
      name: "completedAt",
      type: "datetime",
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
      client: "client",
      media: "images.0.asset",
    },
    prepare(selection){
        const {title,client,media} = selection
        return{
            title: title? title:'Untitled',
            subtitle: client? client:'---',
            media: media
        }
    }
  },
});
