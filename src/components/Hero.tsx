import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

const STATS = [
  { value:'663+', de:'Commits',  en:'Commits'  },
  { value:'29+', de:'Projekte', en:'Projects' },
  { value:'8+',  de:'Jahre Erfahrung', en:'Years of Experience'},
]

const TECH = [
  // Languages
  'React', 'Python', 'TypeScript', 'JavaScript', 'Java', 'Ruby', 'HTML', 'CSS', 'Markdown', 'AL',
  // Tools & Platforms
  'Docker', 'Git', 'GitHub', 'GitHub Actions', 'GitHub Pages', 'VS Code', 'Android', 'AI'
]

export function Hero() {
  const { language } = useLanguage()
  const wb = translations[language].welcomebox.welcome

  return (
    <>
    <section className="relative min-h-screen flex flex-col justify-center px-5 sm:px-8 md:px-14 lg:px-24 pt-16 pb-20 overflow-hidden">

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60"
        style={{ backgroundSize:'56px 56px', maskImage:'radial-gradient(ellipse 75% 65% at 50% 35%, black 20%, transparent 75%)', WebkitMaskImage:'radial-gradient(ellipse 75% 65% at 50% 35%, black 20%, transparent 75%)' }} />

      {/* Glow orbs */}
      <div className="absolute pointer-events-none"
        style={{ width:'min(640px,80vw)', height:'min(640px,80vw)', borderRadius:'50%', background:'radial-gradient(circle, rgba(47,181,232,0.1) 0%, transparent 70%)', top:'50%', left:'50%', transform:'translate(-40%,-55%)' }} />
      <div className="absolute pointer-events-none"
        style={{ width:'min(300px,50vw)', height:'min(300px,50vw)', borderRadius:'50%', background:'radial-gradient(circle, rgba(20,113,188,0.08) 0%, transparent 70%)', top:'30%', left:'70%', transform:'translate(-50%,-50%)' }} />

      {/* Content */}
      <div className="relative max-w-4xl w-full mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border text-[0.75rem] font-medium px-3.5 py-1.5 rounded-full mb-8 tracking-wide animate-fade-up"
          style={{ background:'rgba(47,181,232,0.08)', borderColor:'rgba(47,181,232,0.25)', color:'var(--accent2)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal" style={{ boxShadow:'0 0 6px #2dd4bf' }} />
          {language === 'de' ? 'Offen für neue Projekte' : 'Available for projects'}
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold leading-[1.02] tracking-[-0.03em] mb-6 animate-[fadeUp_0.7s_0.1s_ease_both]"
          style={{ fontSize:'clamp(2.6rem,6vw,5.2rem)' }}>
          {language === 'de'
            ? <><span className="text-white/90">Dinge bauen,</span><br /><span className="gradient-text">die zählen.</span></>
            : <><span className="text-white/90">Building things</span><br /><span className="gradient-text">that matter.</span></>
          }
        </h1>

        {/* Sub */}
        <p className="text-white/45 leading-[1.8] mb-10 animate-[fadeUp_0.7s_0.18s_ease_both] max-w-xl"
          style={{ fontSize:'clamp(0.95rem,2vw,1.05rem)', fontWeight:300 }}>
          {wb.text}
        </p>

        {/* Quote */}
        <p className="text-white/20 italic text-sm mb-10 animate-[fadeUp_0.7s_0.24s_ease_both] max-w-sm border-l-2 border-accent/30 pl-4">
          „{wb.quote}"
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 animate-[fadeUp_0.7s_0.3s_ease_both]">
          <a href="#projects" className="btn-primary">
            {language === 'de' ? 'Projekte ansehen' : 'View Projects'}
            <svg width="14" height="14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="https://github.com/tomdevtech" target="_blank" rel="noreferrer" className="btn-ghost">
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
            GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 sm:gap-8 mt-10 sm:mt-14 pt-6 sm:pt-8 animate-[fadeUp_0.7s_0.38s_ease_both]"
          style={{ borderTop:'1px solid var(--border)' }}>
          {STATS.map(s => (
            <div key={s.value}>
              <div className="font-display font-bold text-white tracking-[-0.03em]" style={{ fontSize:'clamp(1.5rem,3vw,1.9rem)' }}>{s.value}</div>
              <div className="text-white/25 text-xs mt-0.5 tracking-wide">{language === 'de' ? s.de : s.en}</div>
            </div>
          ))}
        </div>
      </div>

    </section>

    {/* Tech ticker — separate row, never overlaps */}
    <div className="overflow-hidden py-4 bg-bg-2" style={{ borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)' }}>
      <div className="flex gap-8 sm:gap-12 animate-ticker w-max select-none">
        {[...TECH,...TECH].map((tech,i) => (
          <span key={i} className="flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.08em] uppercase whitespace-nowrap" style={{ color:'rgba(255,255,255,0.18)' }}>
            <span className="w-1 h-1 rounded-full" style={{ background:'var(--accent)', opacity:0.5 }}/>
            {tech}
          </span>
        ))}
      </div>
    </div>
    </>
  )
}
