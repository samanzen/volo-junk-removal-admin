import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas' // We will uncomment this later

export default defineConfig({
  name: 'default',
  title: 'VOLO JUNK REMOVAL - Content Studio',

  projectId: 'zlvpcgia',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    // types: schemaTypes, // We will uncomment this later
  },
})
