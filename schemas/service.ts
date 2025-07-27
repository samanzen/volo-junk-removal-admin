import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Service Name',
      description: 'The name of the service (e.g., Furniture Removal)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      description: 'The unique identifier for the URL (e.g., furniture-removal). Click "Generate".',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    // ADDED mainImage FIELD
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      description: 'A high-quality, representative photo for this service.',
      type: 'image',
      options: {
        hotspot: true, // Allows you to crop the image better
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      description: 'A short, one-sentence description for SEO and previews.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'problem',
      title: 'The Problem',
      description: 'Describe the problem the customer is facing (e.g., "That old couch is heavy and awkward...").',
      type: 'text',
    }),
    defineField({
      name: 'agitate',
      title: 'Agitate the Problem',
      description: 'Explain why it\'s a bigger issue (e.g., "It\'s taking up valuable space...").',
      type: 'text',
    }),
    defineField({
      name: 'solution',
      title: 'The VOLO Solution',
      description: 'Explain how your service solves this problem.',
      type: 'text',
    }),
    defineField({
      name: 'itemsWeTake',
      title: 'Items We Take',
      description: 'A list of specific items for this service category.',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'faqs',
      title: 'Frequently Asked Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'question', type: 'string', title: 'Question'},
            {name: 'answer', type: 'text', title: 'Answer'},
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage', // Use the new image for the preview
    },
  },
})
