// sanityClient.ts
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: "snu8c5ra",
  dataset: 'production',
  apiVersion: '2024-08-14',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source)
}

export { client }
