import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'data', // This is crucial for JSON files
  schema: z.object({
    title: z.string(),
    carousel: z.array(z.object({
      image: z.string(),
      title: z.string().optional(),
      description: z.string().optional(),
      link: z.string().optional(),
    })).optional(),
  }),
});

export const collections = {
  'pages': pagesCollection,
};