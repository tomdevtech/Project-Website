import React from 'react'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

const SKILLS = [
  { label:'React',          color:'rgba(45,212,191,0.12)',  text:'#2dd4bf' },
  { label:'TypeScript',     color:'rgba(47,181,232,0.12)',   text:'#65ccf0' },
  { label:'Python',         color:'rgba(251,191,36,0.12)',  text:'#fbbf24' },
  { label:'TailwindCSS',    color:'rgba(45,212,191,0.10)',  text:'#2dd4bf' },
  { label:'Vite',           color:'rgba(148,163,184,0.10)', text:'#94a3b8' },
  { label:'Node.js',        color:'rgba(74,222,128,0.10)',  text:'#4ade80' },
  { label:'GitHub Actions', color:'rgba(255,255,255,0.06)', text:'rgba(255,255,255,0.5)' },
  { label:'REST APIs',      color:'rgba(248,113,113,0.10)', text:'#f87171' },
  { label:'Docker',         color:'rgba(96,165,250,0.10)',  text:'#60a5fa' },
  { label:'AL / BC',        color:'rgba(167,139,250,0.10)', text:'#a78bfa' },
]

export function About() {
  const { language } = useLanguage()
  const textRef = useReveal<HTMLDivElement>()
  const codeRef = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="py-20 md:py-32 px-5 sm:px-8 md:px-14 lg:px-24">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">

        {/* Left */}
        <div ref={textRef} className="reveal">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase font-semibold mb-4" style={{ color:'var(--accent)' }}>
            {language === 'de' ? 'Über mich' : 'About me'}
          </p>
          <h2 className="font-display font-bold tracking-[-0.025em] leading-[1.1] text-white mb-6"
            style={{ fontSize:'clamp(1.8rem,3.5vw,2.6rem)' }}>
            {language === 'de'
              ? <>Entwickler aus<br /><span className="gradient-text">Leidenschaft.</span></>
              : <>Developer by<br /><span className="gradient-text">passion.</span></>}
          </h2>
          <p className="text-white/45 leading-[1.85] mb-4 text-[0.92rem]" style={{ fontWeight:300 }}>
            {language === 'de'
              ? 'Ich bin Tom, ein leidenschaftlicher Software Ingenieur, der Ideen in saubere, performante Software verwandelt.'
              : "I'm Tom, a passionate software engineer who turns ideas into clean, performant software."}
          </p>
          <p className="text-white/45 leading-[1.85] mb-8 text-[0.92rem]" style={{ fontWeight:300 }}>
            {language === 'de'
              ? 'Ich lege großen Wert auf saubere Architektur, durchdachte UX und Open Source. Jedes Projekt ist eine Chance zu wachsen.'
              : 'I care deeply about clean architecture, thoughtful UX, and open source. Every project is a chance to grow.'}
          </p>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map(s => (
              <span key={s.label}
                className="text-[0.75rem] font-medium px-3 py-1.5 rounded-lg border border-white/[0.06] transition-all duration-200 hover:border-white/[0.14] cursor-default"
                style={{ background:s.color, color:s.text }}>
                {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right — code card */}
        <div ref={codeRef} className="reveal" style={{ transitionDelay:'0.12s' }}>
          <div className="relative rounded-2xl overflow-hidden" style={{ background:'#000f1a', border:'1px solid var(--border)' }}>
            {/* Window bar */}
            <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom:'1px solid var(--border)', background:'rgba(255,255,255,0.02)' }}>
              {['#ff5f57','#febc2e','#28c840'].map(c => <span key={c} className="w-3 h-3 rounded-full" style={{ background:c, opacity:0.8 }}/>)}
              <span className="text-white/20 text-[0.7rem] font-mono ml-2">tom.ts</span>
            </div>
            {/* Code */}
            <div className="p-6 overflow-x-auto">
              <pre className="text-[0.78rem] leading-[2] relative z-10" style={{ fontFamily:'var(--font-mono)' }}>
                <code>
                  <span className="c-keyword">const</span> <span className="c-var">tom</span>{` = {`}{'\n'}
                  {'  '}<span className="c-var">name</span>{`:`} <span className="c-str">"Tom DevTech"</span>,{'\n'}
                  {'  '}<span className="c-var">location</span>{`:`} <span className="c-str">"Leipzig, DE"</span>,{'\n'}
                  {'  '}<span className="c-var">stack</span>{`: [`}<span className="c-str">"React"</span>{`, `}<span className="c-str">"TS"</span>{`, `}<span className="c-str">"Python"</span>{`, `}<span className="c-str">"AL"</span>{`, `}<span className="c-str">"Docker"</span>{`]`}{'\n'}
                  {'  '}<span className="c-var">projects</span>{`:`} <span className="c-num">29</span>,{'\n'}
                  {'  '}<span className="c-var">coffee</span>{`:`} <span className="c-num">Infinity</span>,{'\n'}
                  {'  '}<span className="c-fn">build</span>{`: `}<span className="c-keyword">async</span>{` () => {`}{'\n'}
                  {'    '}<span className="c-comment">// {language === 'de' ? 'Ideen in Code verwandeln' : 'turn ideas into code'}</span>{'\n'}
                  {'    '}<span className="c-keyword">await</span>{` `}<span className="c-fn">ship</span>{`(greatStuff);`}{'\n'}
                  {'  }'}{'\n'}
                  {`};`}{'\n'}
                  {'\n'}
                  <span className="c-comment">{'// '}{language === 'de' ? 'Offen für neue Möglichkeiten ✓' : 'Open to opportunities ✓'}</span>
                </code>
              </pre>
            </div>
            {/* Subtle glow inside */}
            <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none"
              style={{ background:'radial-gradient(circle at 100% 100%, rgba(47,181,232,0.08), transparent 70%)' }} />
          </div>
        </div>

      </div>
    </section>
  )
}
