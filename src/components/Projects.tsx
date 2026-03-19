import React, { useState, useRef, useCallback, useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

/* ── Types ─────────────────────────────────────────────────── */
interface Tag { label: string; bg: string; color: string }
interface ProjectDef { id: string; icon: string; tags: Tag[]; href: string }

/* ── Tag palette ────────────────────────────────────────────── */
const T = {
  react:    { label:'React',      bg:'rgba(45,212,191,0.1)',   color:'#2dd4bf' },
  ts:       { label:'TypeScript', bg:'rgba(47,181,232,0.12)',   color:'#65ccf0' },
  py:       { label:'Python',     bg:'rgba(251,191,36,0.1)',   color:'#fbbf24' },
  vite:     { label:'Vite',       bg:'rgba(148,163,184,0.1)',  color:'#94a3b8' },
  tailwind: { label:'Tailwind',   bg:'rgba(45,212,191,0.08)',  color:'#2dd4bf' },
  ai:       { label:'AI',         bg:'rgba(167,139,250,0.12)', color:'#a78bfa' },
  docker:   { label:'Docker',     bg:'rgba(96,165,250,0.1)',   color:'#60a5fa' },
  al:       { label:'AL/BC',      bg:'rgba(199,146,234,0.1)',  color:'#c792ea' },
}

/* ── 5 featured projects ────────────────────────────────────── */
const PROJECTS: ProjectDef[] = [
  {
    id:   'website',
    icon: '🌐',
    tags: [T.react, T.ts, T.tailwind, T.vite],
    href: 'https://github.com/tomdevtech/Project-Website',
  },
  {
    id:   'scrapeAgent',
    icon: '🤖',
    tags: [T.py, T.ai],
    href: 'https://github.com/tomdevtech/Agentic-Scraper',
  },
  {
    id:   'githubUserDashboard',
    icon: '📊',
    tags: [T.react, T.ts, T.vite],
    href: 'https://github.com/tomdevtech/GitHub-User-Dashboard',
  },
  {
    id:   'aiAgentForBC',
    icon: '🏢',
    tags: [T.al, T.ai],
    href: 'https://github.com/tomdevtech/AI-Agent-For-BC',
  },
  {
    id:   'customAIAgent',
    icon: '🧠',
    tags: [T.py, T.ai, T.docker],
    href: 'https://github.com/tomdevtech/Custom-AI-Agent',
  },
]

/* ── Helpers ─────────────────────────────────────────────────── */
function ArrowBtn({ dir, onClick, disabled }: { dir:'left'|'right'; onClick:()=>void; disabled:boolean }) {
  return (
    <button onClick={onClick} disabled={disabled}
      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all duration-200 disabled:opacity-25 disabled:cursor-default hover:not-disabled:border-accent/50 hover:not-disabled:bg-accent/10 active:scale-95"
      style={{ background:'rgba(255,255,255,0.03)', borderColor:'var(--border2)' }}
      aria-label={dir === 'left' ? 'Previous' : 'Next'}>
      <svg width="16" height="16" fill="none">
        <path d={dir === 'left' ? 'M10 3L5 8l5 5' : 'M6 3l5 5-5 5'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

/* ── Card ────────────────────────────────────────────────────── */
function ProjectCard({ def, title, description, active }: { def:ProjectDef; title:string; description:string; active:boolean }) {
  const mouseRef = useRef<HTMLAnchorElement>(null)

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', ((e.clientX-r.left)/r.width*100).toFixed(1)+'%')
    e.currentTarget.style.setProperty('--my', ((e.clientY-r.top)/r.height*100).toFixed(1)+'%')
  }

  return (
    <a ref={mouseRef} href={def.href} target="_blank" rel="noreferrer" onMouseMove={onMove}
      className="group relative flex flex-col h-full rounded-2xl p-6 sm:p-8 overflow-hidden no-underline transition-all duration-500"
      style={{
        background: active ? '#002540' : '#001524',
        border: `1px solid ${active ? 'rgba(47,181,232,0.3)' : 'var(--border)'}`,
        boxShadow: active ? '0 0 0 1px rgba(47,181,232,0.1), 0 20px 60px rgba(0,0,0,0.5)' : 'none',
        opacity: active ? 1 : 0.55,
        transform: active ? 'scale(1)' : 'scale(0.97)',
      }}>

      {/* Mouse-tracking glow — only on active */}
      {active && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
          style={{ background:'radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(47,181,232,0.07), transparent 55%)' }} />
      )}

      {/* Top row */}
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background:'rgba(47,181,232,0.1)', border:'1px solid rgba(47,181,232,0.2)' }}>
          {def.icon}
        </div>
        <span className="text-white/20 group-hover:text-accent-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-lg mt-1">↗</span>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-white tracking-[-0.02em] mb-3 leading-tight"
        style={{ fontSize:'clamp(1rem,2vw,1.15rem)' }}>
        {title}
      </h3>

      {/* Desc */}
      <p className="text-white/40 text-[0.84rem] leading-[1.7] mb-6 flex-1" style={{ fontWeight:300 }}>
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {def.tags.map(tag => (
          <span key={tag.label} className="text-[0.68rem] font-semibold tracking-[0.05em] uppercase px-2.5 py-1 rounded-md"
            style={{ background:tag.bg, color:tag.color }}>
            {tag.label}
          </span>
        ))}
      </div>

      {/* Active accent line */}
      {active && (
        <div className="absolute bottom-0 left-8 right-8 h-px"
          style={{ background:'linear-gradient(90deg,transparent,rgba(47,181,232,0.5),transparent)' }} />
      )}
    </a>
  )
}

/* ── Projects Section ────────────────────────────────────────── */
export function Projects() {
  const { language } = useLanguage()
  const t = translations[language]
  const headerRef = useReveal<HTMLDivElement>()
  const carouselRef = useReveal<HTMLDivElement>()

  const [active, setActive] = useState(0)
  const [dragging, setDragging] = useState(false)
  const dragStart = useRef(0)
  const total = PROJECTS.length

  const prev = useCallback(() => setActive(a => Math.max(0, a - 1)), [])
  const next = useCallback(() => setActive(a => Math.min(total - 1, a + 1)), [total])

  /* Keyboard navigation */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [prev, next])

  /* Touch/drag swipe */
  const onTouchStart = (e: React.TouchEvent) => { dragStart.current = e.touches[0].clientX }
  const onTouchEnd   = (e: React.TouchEvent) => {
    const delta = dragStart.current - e.changedTouches[0].clientX
    if (delta > 50) next()
    if (delta < -50) prev()
  }
  const onMouseDown  = (e: React.MouseEvent) => { setDragging(true); dragStart.current = e.clientX }
  const onMouseUp    = (e: React.MouseEvent) => {
    if (!dragging) return
    setDragging(false)
    const delta = dragStart.current - e.clientX
    if (delta > 50) next()
    if (delta < -50) prev()
  }

  return (
    <section id="projects" className="py-20 md:py-32 px-5 sm:px-8 md:px-14 lg:px-24 bg-bg-2 overflow-hidden">

      {/* Header */}
      <div ref={headerRef} className="reveal flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 max-w-5xl mx-auto gap-5">
        <div>
          <p className="text-[0.7rem] tracking-[0.18em] uppercase font-semibold mb-4" style={{ color:'var(--accent)' }}>
            {language === 'de' ? 'Projekte' : 'Projects'}
          </p>
          <h2 className="font-display font-bold tracking-[-0.025em] leading-[1.1] text-white"
            style={{ fontSize:'clamp(1.8rem,3.5vw,2.6rem)' }}>
            {language === 'de' ? 'Was ich gebaut habe.' : "What I've built."}
          </h2>
        </div>
        <a href="https://github.com/tomdevtech" target="_blank" rel="noreferrer" className="btn-ghost self-start sm:self-auto"
          style={{ fontSize:'0.82rem', padding:'0.55rem 1.1rem' }}>
          {language === 'de' ? 'Alle 29 Repos ↗' : 'All 29 repos ↗'}
        </a>
      </div>

      {/* Carousel */}
      <div ref={carouselRef} className="reveal max-w-5xl mx-auto">

        {/* Cards track */}
        <div
          className="relative cursor-grab active:cursor-grabbing select-none"
          onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseLeave={() => setDragging(false)}>

          {/* Mobile: single card */}
          <div className="md:hidden">
            {(() => {
              const def = PROJECTS[active]
              const proj = t.projects[def.id as keyof typeof t.projects]
              return proj ? (
                <ProjectCard def={def} title={proj.title} description={proj.description} active={true} />
              ) : null
            })()}
          </div>

          {/* Desktop: 3-card view with peek */}
          <div className="hidden md:grid md:grid-cols-3 gap-5">
            {[-1, 0, 1].map(offset => {
              const idx = active + offset
              if (idx < 0 || idx >= total) {
                return <div key={offset} className="rounded-2xl" style={{ background:'transparent' }} />
              }
              const def = PROJECTS[idx]
              const proj = t.projects[def.id as keyof typeof t.projects]
              return proj ? (
                <ProjectCard key={def.id} def={def} title={proj.title} description={proj.description} active={offset === 0} />
              ) : null
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {PROJECTS.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === active ? '24px' : '6px',
                  height: '6px',
                  background: i === active ? 'var(--accent)' : 'rgba(255,255,255,0.15)',
                }}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrow buttons + counter */}
          <div className="flex items-center gap-3">
            <span className="text-white/25 text-xs font-mono tabular-nums">
              {String(active + 1).padStart(2,'0')} / {String(total).padStart(2,'0')}
            </span>
            <ArrowBtn dir="left"  onClick={prev} disabled={active === 0} />
            <ArrowBtn dir="right" onClick={next} disabled={active === total - 1} />
          </div>
        </div>

        {/* Swipe hint on mobile */}
        <p className="md:hidden text-center text-white/20 text-xs mt-5 tracking-wide">
          {language === 'de' ? '← wischen →' : '← swipe →'}
        </p>
      </div>
    </section>
  )
}
