import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas' // This line is now active

export default defineConfig({
  name: 'default',
  title: 'VOLO JUNK REMOVAL - Content Studio',

  projectId: 'zlvpcgia', // Make sure this is your real Project ID
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes, // This line is now active
  },
})
