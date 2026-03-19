import { TECH_STACK } from '../data/portfolio'

export function TechTicker() {
  // Duplicate for seamless infinite scroll
  const items = [...TECH_STACK, ...TECH_STACK]

  return (
    <div
      className="overflow-hidden py-6 bg-bg-2"
      style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div
        className="flex gap-12 animate-ticker w-max"
        /* pause on hover for accessibility */
        onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = 'running')}
      >
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center gap-2 text-white/25 text-[0.85rem] font-medium tracking-[0.05em] uppercase whitespace-nowrap select-none"
          >
            <span className="w-1 h-1 rounded-full bg-accent" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
