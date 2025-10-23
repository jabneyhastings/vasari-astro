import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content', // For Markdown files (about.md, services.md)
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
    sideImage: z.string().optional(),
  }),
});

const home = defineCollection({
  type: 'data', // For home.json
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    heroCarousel: z.array(z.object({
      image: z.string().optional(),
      alt: z.string().optional(),
    })).optional(),
    aboutSection: z.object({
      title: z.string(),
      content: z.string(),
    }).optional(),
    textBlock: z.object({
      content: z.string(),
    }).optional(),
  }),
});

const services = defineCollection({
  type: 'data', // JSON data
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
    body: z.string().optional(), // markdown text
    services: z.array(z.object({
      title: z.string(),
      content: z.string(), // markdown text
      image: z.string().optional(),
    })),
  }),
});

const careers = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
    sideImage: z.string().optional(),
    body: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
    body: z.string().optional(),
    projects: z.array(
      z.object({
        title: z.string(),
        heroImage: z.string().optional(),
        content: z.string().optional(),
        images: z
          .array(
            z.object({
              src: z.string(),
              alt: z.string().optional(),
            })
          )
          .optional(),
      })
    ),
  }),
});

export const collections = {
  pages,
  home,
  services,
  projects,
  careers,
};