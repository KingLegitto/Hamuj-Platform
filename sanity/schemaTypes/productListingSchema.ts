import { defineField, defineType } from "sanity";

export const productListing = defineType({
  name: "productListing",
  title: "Product Listings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
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
      name: "colors",
      type: "array",
      of: [{
          type: "string",
        }],
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "title",
      price: "price",
      media: "images.0.asset",
    },
    prepare(selection) {
      const { title, price, media } = selection;
      return {
        title: title,
        subtitle: price? `₦ ${price}`: 'No price stated',
        media: media
      };
    },
  },
});
