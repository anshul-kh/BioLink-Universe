import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import {project_id} from './id'
import {token} from './id'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId:project_id,
  dataset: 'production',
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2023-08-03', // use current date (YYYY-MM-DD) to target the latest API version
  token:token // Only if you want to update content with the client
})



const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}