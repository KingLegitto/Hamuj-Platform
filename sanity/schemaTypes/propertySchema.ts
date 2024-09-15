import { title } from "process";
import { defineField, defineType } from "sanity";

export const properties = defineType({
  name: "properties",
  title: "Hamuj Properties",
  type: "document",
  fields: [
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "tenure",
      title: "Tenure type",
      type: "string",
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
      name: "records",
      type: "array",
      of: [{
          type: "object",
          fields: [
            {
              name: 'value',
              title: 'Amount paid',
              type: 'number'
            },
            {
              name: 'date',
              title: 'Date',
              type: 'string',
              description: 'For consistency use this format: dd/mm/yy'
            },
          ],
          preview: {
            select: {
              title: 'value',
              subtitle: 'date',
            },
            prepare(selection){
              const { title, subtitle} = selection;
              return {
                title: title || 'No paid amount stated',
                subtitle: subtitle || 'No date stated'
              }
            }
          }
        }],
    }),
  ],
  preview: {
    select: {
      title: "address",
      media: "images.0.asset",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title,
        media: media
      };
    },
  },
});
