import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export function ImPrint() {
  const { language } = useLanguage()
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const de = language === 'de'

  return (
    <div className="min-h-screen bg-bg">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background:'radial-gradient(ellipse at 50% 0%, rgba(123,108,255,0.07), transparent 70%)' }} />
      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8 py-24 md:py-32">
        <Link to="/" className="inline-flex items-center gap-2 text-white/35 hover:text-white text-sm mb-12 no-underline transition-colors group">
          <svg width="16" height="16" fill="none" className="group-hover:-translate-x-0.5 transition-transform">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {de ? 'Zurück zur Startseite' : 'Back to homepage'}
        </Link>
        <div className="mb-12">
          <p className="text-xs tracking-[0.15em] uppercase text-accent font-semibold mb-3">Legal</p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-[-0.03em] text-white">
            {de ? 'Impressum' : 'Legal Notice'}
          </h1>
        </div>
        <div className="rounded-2xl p-8 space-y-8" style={{ background:'#1c1c26', border:'1px solid var(--border)' }}>
          <div>
            <h2 className="font-display font-bold text-lg text-white mb-3">{de ? 'Angaben gemäß § 5 TMG' : 'Information according to § 5 TMG'}</h2>
            <p className="text-white/55 font-light leading-relaxed">Tom Helling<br/>Queiser Straße 11<br/>06188 Landsberg<br/>Deutschland</p>
          </div>
          <div style={{ borderTop:'1px solid var(--border)', paddingTop:'2rem' }}>
            <h2 className="font-display font-bold text-lg text-white mb-3">{de ? 'Kontakt' : 'Contact'}</h2>
            <p className="text-white/55 font-light leading-relaxed">E-Mail: <a href="mailto:TomHelling.DevTech@gmail.com" className="text-accent-2 hover:text-white transition-colors">TomHelling.DevTech@gmail.com</a></p>
          </div>
          <div style={{ borderTop:'1px solid var(--border)', paddingTop:'2rem' }}>
            <h2 className="font-display font-bold text-lg text-white mb-3">{de ? 'Hinweis' : 'Note'}</h2>
            <p className="text-white/55 font-light leading-relaxed">{de ? 'Dies ist eine rein private Website ohne kommerziellen Zweck.' : 'This is a purely private website without commercial purpose.'}</p>
          </div>
          <div style={{ borderTop:'1px solid var(--border)', paddingTop:'2rem' }}>
            <h2 className="font-display font-bold text-lg text-white mb-3">{de ? 'Haftung für Inhalte' : 'Liability for Content'}</h2>
            <p className="text-white/55 font-light leading-relaxed">{de ? 'Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich.' : 'The contents of this website have been created with the utmost care. As a service provider, I am responsible for my own content in accordance with general laws per § 7 TMG.'}</p>
          </div>
          <div style={{ borderTop:'1px solid var(--border)', paddingTop:'2rem' }}>
            <h2 className="font-display font-bold text-lg text-white mb-3">{de ? 'Urheberrecht' : 'Copyright'}</h2>
            <p className="text-white/55 font-light leading-relaxed">{de ? 'Die durch den Seitenbetreiber erstellten Inhalte unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung bedürfen der schriftlichen Zustimmung des Autors.' : 'The content created by the site operator is subject to German copyright law. Reproduction, editing and distribution require the written consent of the author.'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
