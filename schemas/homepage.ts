import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Homepage Settings',
      readOnly: true,
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Section Headline',
      description: 'The main, large text at the top of the homepage.',
      type: 'string',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Section Sub-headline',
      description: 'The smaller text directly below the main headline.',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
