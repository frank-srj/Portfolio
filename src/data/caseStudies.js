import figmaSustainableMode from '../assets/case-studies/figma-sustainable-mode/Figma-Thumbnail_home.webp'
import orbit from '../assets/case-studies/orbit/Orbit_Thumbnail.webp'
import urbanProjective from '../assets/case-studies/urban-projective/Urban-Thumbnail-Home.webp'
import inclusiveMobility from '../assets/case-studies/inclusive-mobility.png'
import productIcon from '../assets/case-studies/icons/product.svg'
import designSystemIcon from '../assets/case-studies/icons/design-system.svg'
import brandIcon from '../assets/case-studies/icons/brand.svg'

// NOTE: the per-card categories below are placeholders — the hover tags are
// hidden in Figma's default state, so only the shared example set (Product /
// Design System / Brand) was available. Adjust these per project as needed.
const defaultCategories = [
  { label: 'Product', icon: productIcon },
  { label: 'Design System', icon: designSystemIcon },
  { label: 'Brand', icon: brandIcon },
]

const figmaCategories = [
  { label: 'Product', icon: productIcon },
  { label: 'Design System', icon: designSystemIcon },
]

const urbanCategories = [
  { label: 'Product', icon: productIcon },
  { label: 'Brand', icon: brandIcon },
]

export const caseStudies = [
  {
    id: 'figma',
    tag: 'Concept 2025',
    title: 'Figma Sustainable Mode',
    description:
      'Making the environmental impact of digital design visible through a new Figma Mode.',
    image: figmaSustainableMode,
    categories: figmaCategories,
    disabled: false,
  },
  {
    id: 'orbit',
    tag: 'Concept 2024',
    title: 'Orbit',
    description:
      'Exploring the potential of a tag-based search instead of traditional folder systems for saving and finding content',
    image: orbit,
    categories: defaultCategories,
    disabled: false,
  },
  {
    id: 'urban',
    tag: 'Concept 2023',
    title: 'UrbanProjective',
    description: ['Rethinking Human–AI Interaction ', 'Beyond Chat Interfaces'],
    image: urbanProjective,
    categories: urbanCategories,
    disabled: false,
  },
  {
    id: null,
    tag: 'Coming Soon',
    title: 'Inclusive Mobility',
    description:
      'Designing Inclusive Ride-Hailing for People with Agoraphobia',
    image: inclusiveMobility,
    categories: [],
    disabled: true,
  },
]
