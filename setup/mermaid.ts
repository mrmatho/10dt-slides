import { defineMermaidSetup } from '@slidev/types'

// Mermaid 12 defaults to the ELK layout and a new look; keep the pre-v12 style
export default defineMermaidSetup(() => ({
  layout: 'elk',
  theme: 'default',
  look: 'classic',
}))
