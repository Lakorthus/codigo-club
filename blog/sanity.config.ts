import { codeInput } from '@sanity/code-input';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import Logo from '../components/studio/logo/Logo';
import StudioNavbar from '../components/studio/studioNavBar/StudioNavBar';
import { schemaTypes } from './schemas';
import { getDefaultDocumentNode } from './structure';
import { myTheme } from './theme';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'BLOG',
  title: 'Portfolio Blog',

  projectId,
  dataset,
  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
