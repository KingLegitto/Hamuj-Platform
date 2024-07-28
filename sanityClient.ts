// sanityClient.ts
import sanityClient, { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: '7ebo0bvv',
  dataset: 'production',
  apiVersion: '2023-07-28',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source)
}

export { client }
