// ── Types ────────────────────────────────────────────────────────────
export type TagVariant = 'react' | 'ts' | 'python' | 'web' | 'vite' | 'tailwind'

export interface Project {
  id: string
  title: string
  description: string
  icon: string
  iconVariant: 'react' | 'python' | 'ts' | 'web'
  tags: { label: string; variant: TagVariant }[]
  href: string
  featured?: boolean
}

export interface Stat {
  value: string
  label: string
}

// ── Data ─────────────────────────────────────────────────────────────
export const TECH_STACK: string[] = [
  'React', 'TypeScript', 'Python', 'Vite', 'TailwindCSS',
  'Node.js', 'GitHub Actions', 'React Router', 'ESLint', 'GitHub Pages',
]

export const STATS: Stat[] = [
  { value: '93+', label: 'Commits' },
  { value: '5+',  label: 'Projects' },
  { value: '3+',  label: 'Languages' },
]

export const SKILLS: string[] = [
  'React', 'TypeScript', 'Python', 'TailwindCSS',
  'Vite', 'Node.js', 'GitHub Actions', 'REST APIs',
]

export const PROJECTS: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description:
      'This very site — a React SPA with TypeScript, TailwindCSS, and Vite. Deployed via GitHub Pages with a custom domain. Continuous deployment via GitHub Actions.',
    icon: '⚛️',
    iconVariant: 'react',
    tags: [
      { label: 'React',        variant: 'react'   },
      { label: 'TypeScript',   variant: 'ts'      },
      { label: 'Vite',         variant: 'vite'    },
      { label: 'GitHub Pages', variant: 'web'     },
    ],
    href: 'https://tom-devtech.com',
    featured: true,
  },
  {
    id: 'python',
    title: 'Python Automation',
    description:
      'Scripts and tools automating repetitive workflows — file management, API calls, and data processing pipelines.',
    icon: '🐍',
    iconVariant: 'python',
    tags: [
      { label: 'Python',     variant: 'python' },
      { label: 'Automation', variant: 'web'    },
    ],
    href: 'https://github.com/tomdevtech',
  },
  {
    id: 'components',
    title: 'React Components',
    description:
      'Reusable, accessible UI component library built with React, TypeScript, and TailwindCSS utility patterns.',
    icon: '⚡',
    iconVariant: 'ts',
    tags: [
      { label: 'React',      variant: 'react'   },
      { label: 'TypeScript', variant: 'ts'      },
      { label: 'Tailwind',   variant: 'tailwind'},
    ],
    href: 'https://github.com/tomdevtech',
  },
  {
    id: 'devtools',
    title: 'Dev Tools & Config',
    description:
      'Personal dev environment dotfiles, VS Code workspace configs, and ESLint/Prettier setups for rapid project bootstrapping.',
    icon: '🔧',
    iconVariant: 'web',
    tags: [
      { label: 'Config', variant: 'web' },
      { label: 'ESLint', variant: 'ts'  },
    ],
    href: 'https://github.com/tomdevtech',
  },
]
