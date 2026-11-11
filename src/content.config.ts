import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada archivo .md en src/content/projects/ es un proyecto.
// El nombre del archivo es la URL: decor-chapas.md -> /proyectos/decor-chapas
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    category: z.string(),
    stack: z.array(z.string()).default([]),
    status: z.enum(['publicado', 'en desarrollo', 'privado']).default('publicado'),
    featured: z.boolean().default(false),
    client: z.boolean().default(true), // false = proyecto propio (no sale en "negocios que confiaron")
    order: z.number().default(100),
    color: z.string().default('#ff9a3c'),
    cover: z.string().optional(),
    live: z.string().url().optional(),
    repo: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
