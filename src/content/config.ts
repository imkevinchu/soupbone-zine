import { defineCollection, z } from 'astro:content';

const members = defineCollection({
	schema: z.object({
		name: z.string(),
		description: z.string(),
		image: z.string().optional(),
	}),
});

const friends = defineCollection({
	schema: z.object({
		name: z.string(),
		description: z.string(),
		image: z.string().optional(),
	}),
});

const zine = defineCollection({
	schema: z.object({
		title: z.string(),
		author: z.string(),
		ordering: z.number(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { members, friends, zine };
