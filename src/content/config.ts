import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    heroCarousel: z.array(z.object({
      image: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
      link: z.string().optional(),
      gradient: z.string().optional(), // For custom CSS gradients
    })).optional(),
    aboutSection: z.object({
      title: z.string(),
      content: z.string(),  // <-- single string instead of array
    }).optional(),
    secondaryCarousel: z.object({
      slides: z.array(z.object({
        image: z.string(),
        text: z.string().optional(),
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