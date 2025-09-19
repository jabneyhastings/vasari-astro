import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
    content: z.string().optional(),
    heroCarousel: z.array(z.object({
      image: z.string().optional(),
      alt: z.string().optional(),
    })).optional(),
    aboutSection: z.object({
      title: z.string(),
      content: z.string(),
    }).optional(),
    secondaryCarousel: z.object({
      slides: z.array(z.object({
        image: z.string(),
        text: z.string().optional(),
        alt: z.string().optional(),
      })),
    }).optional(),
    textBlock: z.object({
      content: z.string(),
    }).optional(),
  }),
});

export const collections = {
  'pages': pagesCollection,
};