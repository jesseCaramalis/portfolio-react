import {createClient, groq} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "production",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-01-29",
  useCdn: process.env.NODE_ENV === "production",
}

export const sanityClient = createClient(config)

const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source: any) => {
  return builder.image(source)
}
