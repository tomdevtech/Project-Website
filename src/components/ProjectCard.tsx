import { useRef } from 'react'
import type { Project, TagVariant } from '../data/portfolio'

// ── Tag styles ────────────────────────────────────────────────────────
const TAG_STYLES: Record<TagVariant, string> = {
  react:    'bg-teal/10    text-teal',
  ts:       'bg-accent/10  text-accent-2',
  python:   'bg-amber/10   text-amber',
  web:      'bg-coral/10   text-coral',
  vite:     'bg-sky-400/10 text-sky-300',
  tailwind: 'bg-teal/10    text-teal',
}

const ICON_BG: Record<Project['iconVariant'], string> = {
  react:  'bg-teal/10   border border-teal/20',
  python: 'bg-amber/10  border border-amber/20',
  ts:     'bg-accent/10 border border-accent/20',
  web:    'bg-coral/10  border border-coral/20',
}

// ── ProjectCard ───────────────────────────────────────────────────────
interface Props {
  project: Project
  delay?: number
}

export function ProjectCard({ project, delay = 0 }: Props) {
  const cardRef = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1)
    const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1)
    e.currentTarget.style.setProperty('--mx', `${x}%`)
    e.currentTarget.style.setProperty('--my', `${y}%`)
  }

  if (project.featured) {
    return (
      <FeaturedCard project={project} delay={delay} />
    )
  }

  return (
    <a
      ref={cardRef}
      href={project.href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      className="reveal group relative block rounded-2xl p-7 overflow-hidden no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
      style={{
        background: '#1c1c26',
        border: '1px solid var(--border)',
        transitionDelay: `${delay}s`,
        // CSS custom property for the mouse-tracking glow
      }}
    >
      {/* Mouse-tracking glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(123,108,255,0.08), transparent 60%)',
        }}
      />

      {/* Arrow */}
      <span className="absolute top-5 right-5 text-white/20 group-hover:text-accent-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-lg">
        ↗
      </span>

      {/* Icon */}
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5 ${ICON_BG[project.iconVariant]}`}>
        {project.icon}
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-[1.05rem] text-white tracking-[-0.02em] mb-2">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-[0.875rem] text-white/40 font-light leading-[1.6] mb-5">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag.label}
            className={`text-[0.72rem] font-semibold tracking-[0.04em] uppercase px-2.5 py-1 rounded ${TAG_STYLES[tag.variant]}`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </a>
  )
}

// ── Featured (spans 2 cols) ───────────────────────────────────────────
function FeaturedCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="reveal group relative md:col-span-2 grid md:grid-cols-2 gap-8 items-center rounded-2xl p-7 overflow-hidden no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
      style={{
        background: '#1c1c26',
        border: '1px solid var(--border)',
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Arrow */}
      <span className="absolute top-5 right-5 text-white/20 group-hover:text-accent-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-lg">
        ↗
      </span>

      {/* Left — info */}
      <div>
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5 ${ICON_BG[project.iconVariant]}`}>
          {project.icon}
        </div>
        <h3 className="font-display font-bold text-[1.05rem] text-white tracking-[-0.02em] mb-2">
          {project.title}
        </h3>
        <p className="text-[0.875rem] text-white/40 font-light leading-[1.6] mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className={`text-[0.72rem] font-semibold tracking-[0.04em] uppercase px-2.5 py-1 rounded ${TAG_STYLES[tag.variant]}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      {/* Right — visual */}
      <div
        className="relative flex items-center justify-center h-44 rounded-xl overflow-hidden"
        style={{ background: '#16161e', border: '1px solid var(--border)' }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(123,108,255,0.12), transparent 70%)' }}
        />
        <span className="relative z-10 text-5xl" style={{ filter: 'drop-shadow(0 0 20px rgba(123,108,255,0.5))' }}>
          🌐
        </span>
      </div>
    </a>
  )
}
