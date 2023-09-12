import { z, defineCollection } from "astro:content";

const meetupCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    date: z.date(),
    imageAlt: z.string(),
  }),
});

const projectCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    imageAlt: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  meetups: meetupCollection,
  projects: projectCollection,
};
