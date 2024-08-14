import { defineField, defineType } from "sanity";

export const productListing = defineType({
  name: "productListing",
  title: "Product Listings",
  type: "document",
  fields: [
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
      name: "Tag",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
  preview: {
    select: {
      media: "images.0.asset",
    },
    prepare(selection) {
      const { media } = selection;
      return {
        media: media,
      };
    },
  },
});
