import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5kcimr0";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "qsbs";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2021-10-21";


export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});
