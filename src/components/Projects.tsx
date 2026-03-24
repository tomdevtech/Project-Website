import React, { useState, useRef, useCallback, useEffect } from "react";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

/* ── Types ─────────────────────────────────────────────────── */
interface Tag {
  label: string;
  bg: string;
  color: string;
}

interface ProjectDef {
  id: string;
  icon: string;
  tags: Tag[];
  href: string;
}

/* ── Tag palette ────────────────────────────────────────────── */
const T = {
  react: { label: "React", bg: "rgba(45,212,191,0.1)", color: "#2dd4bf" },
  ts: { label: "TypeScript", bg: "rgba(47,181,232,0.12)", color: "#65ccf0" },
  py: { label: "Python", bg: "rgba(251,191,36,0.1)", color: "#fbbf24" },
  vite: { label: "Vite", bg: "rgba(148,163,184,0.1)", color: "#94a3b8" },
  tailwind: {
    label: "Tailwind",
    bg: "rgba(45,212,191,0.08)",
    color: "#2dd4bf",
  },
  ai: { label: "AI", bg: "rgba(167,139,250,0.12)", color: "#a78bfa" },
  docker: { label: "Docker", bg: "rgba(96,165,250,0.1)", color: "#60a5fa" },
  al: { label: "AL/BC", bg: "rgba(199,146,234,0.1)", color: "#c792ea" },
};

/* ── Projects ──────────────────────────────────────────────── */
const PROJECTS: ProjectDef[] = [
  {
    id: "website",
    icon: "🌐",
    tags: [T.react, T.ts, T.tailwind, T.vite],
    href: "https://github.com/tomdevtech/Project-Website",
  },
  {
    id: "scrapeAgent",
    icon: "🤖",
    tags: [T.py, T.ai],
    href: "https://github.com/tomdevtech/Agentic-Scraper",
  },
  {
    id: "githubUserDashboard",
    icon: "📊",
    tags: [T.react, T.ts, T.vite],
    href: "https://github.com/tomdevtech/GitHub-User-Dashboard",
  },
  {
    id: "aiAgentForBC",
    icon: "🏢",
    tags: [T.al, T.ai],
    href: "https://github.com/tomdevtech/AI-Agent-For-BC",
  },
  {
    id: "customAIAgent",
    icon: "🧠",
    tags: [T.py, T.ai, T.docker],
    href: "https://github.com/tomdevtech/Custom-AI-Agent",
  },
];

const LOOP_SETS = 7;
const GAP = 20;
const BASE_ANIMATION_MS = 320;
const DRAG_THRESHOLD = 6;
const SWIPE_DISTANCE_THRESHOLD = 0.18;
const SWIPE_VELOCITY_THRESHOLD = 0.35;

/* ── Helpers ───────────────────────────────────────────────── */
function ArrowBtn({
  dir,
  onClick,
}: {
  dir: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all duration-200 hover:border-accent/50 hover:bg-accent/10 active:scale-95"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: "var(--border2)",
      }}
      aria-label={dir === "left" ? "Previous" : "Next"}
    >
      <svg width="16" height="16" fill="none">
        <path
          d={dir === "left" ? "M10 3L5 8l5 5" : "M6 3l5 5-5 5"}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function ProjectCard({
  def,
  title,
  description,
  active,
  onDragStart,
}: {
  def: ProjectDef;
  title: string;
  description: string;
  active: boolean;
  onDragStart?: React.DragEventHandler<HTMLAnchorElement>;
}) {
  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();

    e.currentTarget.style.setProperty(
      "--mx",
      (((e.clientX - r.left) / r.width) * 100).toFixed(1) + "%",
    );
    e.currentTarget.style.setProperty(
      "--my",
      (((e.clientY - r.top) / r.height) * 100).toFixed(1) + "%",
    );
  };

  return (
    <a
      href={active ? def.href : undefined}
      target={active ? "_blank" : undefined}
      rel={active ? "noreferrer" : undefined}
      draggable={false}
      onDragStart={onDragStart}
      onClick={(e) => {
        if (!active) e.preventDefault();
      }}
      tabIndex={active ? 0 : -1}
      aria-disabled={!active}
      onMouseMove={onMove}
      className="group relative flex flex-col h-full rounded-2xl p-6 sm:p-8 overflow-hidden no-underline transition-all duration-500"
      style={{
        background: active ? "#002540" : "#001524",
        border: `1px solid ${
          active ? "rgba(47,181,232,0.3)" : "var(--border)"
        }`,
        boxShadow: active
          ? "0 0 0 1px rgba(47,181,232,0.1), 0 20px 60px rgba(0,0,0,0.5)"
          : "none",
        opacity: active ? 1 : 0.55,
        transform: active ? "scale(1)" : "scale(0.97)",
        pointerEvents: "auto",
        cursor: "default",
      }}
    >
      {active && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
          style={{
            background:
              "radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(47,181,232,0.07), transparent 55%)",
          }}
        />
      )}

      <div className="flex items-start justify-between mb-6">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{
            background: "rgba(47,181,232,0.1)",
            border: "1px solid rgba(47,181,232,0.2)",
          }}
        >
          {def.icon}
        </div>

        <span className="text-white/20 group-hover:text-accent-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-lg mt-1">
          ↗
        </span>
      </div>

      <h3
        className="font-display font-bold text-white tracking-[-0.02em] mb-3 leading-tight"
        style={{ fontSize: "clamp(1rem,2vw,1.15rem)" }}
      >
        {title}
      </h3>

      <p
        className="text-white/40 text-[0.84rem] leading-[1.7] mb-6 flex-1"
        style={{ fontWeight: 300 }}
      >
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {def.tags.map((tag) => (
          <span
            key={tag.label}
            className="text-[0.68rem] font-semibold tracking-[0.05em] uppercase px-2.5 py-1 rounded-md"
            style={{ background: tag.bg, color: tag.color }}
          >
            {tag.label}
          </span>
        ))}
      </div>

      {active && (
        <div
          className="absolute bottom-0 left-8 right-8 h-px"
          style={{
            background:
              "linear-gradient(90deg,transparent,rgba(47,181,232,0.5),transparent)",
          }}
        />
      )}
    </a>
  );
}

/* ── Component ─────────────────────────────────────────────── */
export function Projects() {
  const { language } = useLanguage();
  const t = translations[language];

  const headerRef = useReveal<HTMLDivElement>();
  const carouselRef = useReveal<HTMLDivElement>();

  const total = PROJECTS.length;
  const middleSetIndex = Math.floor(LOOP_SETS / 2);
  const middleStartIndex = middleSetIndex * total;

  const loopProjects = Array.from({ length: LOOP_SETS }, () => PROJECTS).flat();

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  const [position, setPosition] = useState(0);
  const positionRef = useRef(0);

  const [isAnimating, setIsAnimating] = useState(false);
  const isAnimatingRef = useRef(false);
  const [animationDuration, setAnimationDuration] = useState(BASE_ANIMATION_MS);

  const isDragging = useRef(false);
  const isPointerDown = useRef(false);
  const didDrag = useRef(false);
  const dragStartX = useRef(0);
  const dragStartY = useRef(0);
  const dragStartPosition = useRef(0);
  const lastPointerX = useRef(0);
  const lastPointerTime = useRef(0);
  const swipeVelocityRef = useRef(0);
  const dragInputTypeRef = useRef<"mouse" | "touch" | "pen" | null>(null);
  const wheelActiveRef = useRef(false);
  const wheelSnapTimeoutRef = useRef<number | null>(null);
  const gestureIntentRef = useRef<
    "idle" | "pending" | "horizontal" | "vertical"
  >("idle");

  const cardWidthRef = useRef(0);
  const stepRef = useRef(320);
  const visibleCardsRef = useRef(1);
  const middleOffsetRef = useRef(0);
  const initializedRef = useRef(false);

  const setActiveSynced = useCallback(
    (idx: number) => {
      const normalized = ((idx % total) + total) % total;
      activeRef.current = normalized;
      setActive(normalized);
    },
    [total],
  );

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const isDesktop = window.innerWidth >= 1024;
    const visibleCards = isDesktop ? 3 : 1;
    const middleOffset = Math.floor(visibleCards / 2);
    const viewportWidth = viewport.getBoundingClientRect().width;

    const cardWidth =
      visibleCards === 1
        ? viewportWidth
        : (viewportWidth - GAP * (visibleCards - 1)) / visibleCards;

    visibleCardsRef.current = visibleCards;
    middleOffsetRef.current = middleOffset;
    cardWidthRef.current = cardWidth;
    stepRef.current = cardWidth + GAP;
  }, []);

  const getCenteredPositionForLogicalIndex = useCallback(
    (logicalIdx: number) => {
      const middleOffset = middleOffsetRef.current;
      return (middleStartIndex + logicalIdx - middleOffset) * stepRef.current;
    },
    [middleStartIndex],
  );

  const getLogicalIndexFromPosition = useCallback(
    (rawPosition: number) => {
      const step = stepRef.current;
      const middleOffset = middleOffsetRef.current;
      const absoluteLeftIndex = Math.round(rawPosition / step);
      const absoluteCenterIndex = absoluteLeftIndex + middleOffset;

      return ((absoluteCenterIndex % total) + total) % total;
    },
    [total],
  );

  const normalizePosition = useCallback(
    (rawPosition: number) => {
      const setWidth = stepRef.current * total;
      const lowerBound = setWidth * (middleSetIndex - 1);
      const upperBound = setWidth * (middleSetIndex + 1);

      let next = rawPosition;
      while (next < lowerBound) next += setWidth;
      while (next > upperBound) next -= setWidth;

      return next;
    },
    [middleSetIndex, total],
  );

  const applyPosition = useCallback(
    (nextPosition: number) => {
      positionRef.current = nextPosition;
      setPosition(nextPosition);
      setActiveSynced(getLogicalIndexFromPosition(nextPosition));
    },
    [getLogicalIndexFromPosition, setActiveSynced],
  );

  const animateToPosition = useCallback(
    (nextPosition: number, duration = BASE_ANIMATION_MS) => {
      isAnimatingRef.current = true;
      setIsAnimating(true);
      setAnimationDuration(duration);
      positionRef.current = nextPosition;
      setPosition(nextPosition);
      setActiveSynced(getLogicalIndexFromPosition(nextPosition));
    },
    [getLogicalIndexFromPosition, setActiveSynced],
  );

  const jumpWithoutAnimation = useCallback(
    (nextPosition: number) => {
      isAnimatingRef.current = false;
      setIsAnimating(false);
      applyPosition(nextPosition);
    },
    [applyPosition],
  );

  const goToLogicalIndex = useCallback(
    (logicalIdx: number, animate = true) => {
      const target = getCenteredPositionForLogicalIndex(logicalIdx);

      if (animate) animateToPosition(target);
      else jumpWithoutAnimation(target);
    },
    [
      animateToPosition,
      getCenteredPositionForLogicalIndex,
      jumpWithoutAnimation,
    ],
  );

  const next = useCallback(() => {
    animateToPosition(positionRef.current + stepRef.current);
  }, [animateToPosition]);

  const prev = useCallback(() => {
    animateToPosition(positionRef.current - stepRef.current);
  }, [animateToPosition]);

  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.target !== trackRef.current || e.propertyName !== "transform") {
        return;
      }

    if (!isAnimatingRef.current) return;

    isAnimatingRef.current = false;
    setIsAnimating(false);

    const normalized = normalizePosition(positionRef.current);
    if (normalized !== positionRef.current) {
      jumpWithoutAnimation(normalized);
    }
    },
    [jumpWithoutAnimation, normalizePosition],
  );

  useEffect(() => {
    measure();

    const initialPosition =
      (middleStartIndex - middleOffsetRef.current) * stepRef.current;

    jumpWithoutAnimation(initialPosition);
    initializedRef.current = true;
  }, [jumpWithoutAnimation, measure, middleStartIndex]);

  useEffect(() => {
    const onResize = () => {
      const currentActive = activeRef.current;
      measure();
      goToLogicalIndex(currentActive, false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [goToLogicalIndex, measure]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev]);

  const endDrag = useCallback(() => {
    const wasDragging = isDragging.current;

    isPointerDown.current = false;
    isDragging.current = false;
    gestureIntentRef.current = "idle";
    dragInputTypeRef.current = null;

    if (!wasDragging) {
      swipeVelocityRef.current = 0;
      return;
    }

    const step = stepRef.current;
    const dragDistance = positionRef.current - dragStartPosition.current;
    const dragDistanceRatio = Math.abs(dragDistance) / step;
    const swipeVelocity = swipeVelocityRef.current;

    let targetIndex = Math.round(positionRef.current / step);

    if (
      dragDistanceRatio > SWIPE_DISTANCE_THRESHOLD ||
      Math.abs(swipeVelocity) > SWIPE_VELOCITY_THRESHOLD
    ) {
      targetIndex = Math.round(dragStartPosition.current / step);
      targetIndex += dragDistance > 0 ? 1 : -1;
    }

    const snapped = targetIndex * step;
    const momentumFactor = Math.min(Math.abs(swipeVelocity), 1.2);
    const duration = Math.max(
      180,
      BASE_ANIMATION_MS - Math.round(momentumFactor * 110),
    );

    animateToPosition(snapped, duration);

    swipeVelocityRef.current = 0;
  }, [animateToPosition]);

  const beginDrag = useCallback(
    (
      clientX: number,
      clientY: number,
      inputType: "mouse" | "touch" | "pen",
    ) => {
      if (!initializedRef.current) return;

      isPointerDown.current = true;
      isDragging.current = inputType === "mouse";
      didDrag.current = false;
      dragStartX.current = clientX;
      dragStartY.current = clientY;
      dragStartPosition.current = positionRef.current;
      lastPointerX.current = clientX;
      lastPointerTime.current = performance.now();
      swipeVelocityRef.current = 0;
      dragInputTypeRef.current = inputType;
      gestureIntentRef.current =
        inputType === "mouse" ? "horizontal" : "pending";

      isAnimatingRef.current = false;
      setIsAnimating(false);
    },
    [],
  );

  const moveDrag = useCallback(
    (
      clientX: number,
      clientY: number,
      inputType: "mouse" | "touch" | "pen",
      shouldPreventDefault?: () => void,
    ) => {
      if (!isPointerDown.current) return;
      if (dragInputTypeRef.current && dragInputTypeRef.current !== inputType) {
        return;
      }

      const deltaX = dragStartX.current - clientX;
      const deltaY = dragStartY.current - clientY;

      if (gestureIntentRef.current === "pending") {
        if (
          Math.abs(deltaX) <= DRAG_THRESHOLD &&
          Math.abs(deltaY) <= DRAG_THRESHOLD
        ) {
          return;
        }

        if (Math.abs(deltaY) > Math.abs(deltaX)) {
          gestureIntentRef.current = "vertical";
          isPointerDown.current = false;
          isDragging.current = false;
          dragInputTypeRef.current = null;
          return;
        }

        gestureIntentRef.current = "horizontal";
        isDragging.current = true;
      }

      if (gestureIntentRef.current !== "horizontal" || !isDragging.current) {
        return;
      }

      shouldPreventDefault?.();

      if (Math.abs(deltaX) > DRAG_THRESHOLD) didDrag.current = true;

      const now = performance.now();
      const elapsed = Math.max(now - lastPointerTime.current, 1);
      const velocity = (lastPointerX.current - clientX) / elapsed;
      swipeVelocityRef.current = velocity;
      lastPointerX.current = clientX;
      lastPointerTime.current = now;

      applyPosition(dragStartPosition.current + deltaX);
    },
    [applyPosition],
  );

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if (e.pointerType === "mouse") e.preventDefault();

    const pointerType: "mouse" | "touch" | "pen" =
      e.pointerType === "touch" || e.pointerType === "pen"
        ? e.pointerType
        : "mouse";

    beginDrag(e.clientX, e.clientY, pointerType);
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const pointerType: "mouse" | "touch" | "pen" =
        e.pointerType === "touch" || e.pointerType === "pen"
          ? e.pointerType
          : "mouse";

      moveDrag(e.clientX, e.clientY, pointerType, () => {
        if (e.cancelable) e.preventDefault();
      });
    };

    const handlePointerEnd = () => {
      endDrag();
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: false,
    });
    window.addEventListener("pointerup", handlePointerEnd);
    window.addEventListener("pointercancel", handlePointerEnd);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerEnd);
      window.removeEventListener("pointercancel", handlePointerEnd);
    };
  }, [endDrag, moveDrag]);

  const onTrackClick = (e: React.MouseEvent) => {
    if (didDrag.current) {
      e.preventDefault();
      e.stopPropagation();
      didDrag.current = false;
    }
  };

  const onCardDragStart = (e: React.DragEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  const snapToNearestCard = useCallback(() => {
    const step = stepRef.current;
    const snapped = Math.round(positionRef.current / step) * step;
    animateToPosition(snapped, 220);
  }, [animateToPosition]);

  const onWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      if (isPointerDown.current) return;

      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);
      const horizontalDelta = absX >= absY ? e.deltaX : 0;

      if (horizontalDelta === 0) return;

      // keep vertical page scrolling intact, intercept only horizontal touchpad intent
      e.preventDefault();

      isAnimatingRef.current = false;
      setIsAnimating(false);
      wheelActiveRef.current = true;

      applyPosition(positionRef.current + horizontalDelta);

      const now = performance.now();
      const elapsed = Math.max(now - lastPointerTime.current, 1);
      swipeVelocityRef.current = horizontalDelta / elapsed;
      lastPointerTime.current = now;

      if (wheelSnapTimeoutRef.current !== null) {
        window.clearTimeout(wheelSnapTimeoutRef.current);
      }

      wheelSnapTimeoutRef.current = window.setTimeout(() => {
        wheelActiveRef.current = false;
        snapToNearestCard();
      }, 90);
    },
    [applyPosition, snapToNearestCard],
  );

  useEffect(() => {
    return () => {
      if (wheelSnapTimeoutRef.current !== null) {
        window.clearTimeout(wheelSnapTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20 md:py-32 bg-bg-2 overflow-hidden">
      <style>{`
        .proj-card { flex: 0 0 100%; }
        @media (min-width: 1024px) {
          .proj-card { flex: 0 0 calc((100% - 40px) / 3); }
        }
      `}</style>

      <div
        ref={headerRef}
        className="reveal flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 px-5 sm:px-8 md:px-14 lg:px-24 max-w-5xl mx-auto gap-5"
      >
        <div>
          <p
            className="text-[0.7rem] tracking-[0.18em] uppercase font-semibold mb-4"
            style={{ color: "var(--accent)" }}
          >
            {language === "de" ? "Projekte" : "Projects"}
          </p>

          <h2
            className="font-display font-bold tracking-[-0.025em] leading-[1.1] text-white"
            style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}
          >
            {language === "de" ? "Was ich gebaut habe." : "What I've built."}
          </h2>
        </div>

        <a
          href="https://github.com/tomdevtech"
          target="_blank"
          rel="noreferrer"
          className="btn-ghost self-start sm:self-auto"
          style={{ fontSize: "0.82rem", padding: "0.55rem 1.1rem" }}
        >
          {language === "de" ? "Alle 29 Repos ↗" : "All 29 repos ↗"}
        </a>
      </div>

      <div
        ref={carouselRef}
        className="reveal px-5 sm:px-8 md:px-14 lg:px-24 max-w-5xl mx-auto"
      >
        <div
          ref={viewportRef}
          className="overflow-hidden select-none touch-pan-y"
          style={{
            cursor: isDragging.current ? "grabbing" : "grab",
            touchAction: "pan-y pinch-zoom",
          }}
          onPointerDown={onPointerDown}
          onWheel={onWheel}
        >
          <div
            ref={trackRef}
            className="flex gap-5 pb-2"
            style={{
              transform: `translate3d(${-position}px, 0, 0)`,
              transition: isAnimating
                ? `transform ${animationDuration}ms cubic-bezier(0.22, 1, 0.36, 1)`
                : "none",
              willChange: "transform",
            }}
            onTransitionEnd={handleTransitionEnd}
            onClick={onTrackClick}
          >
            {loopProjects.map((def, i) => {
              const logicalIndex = ((i % total) + total) % total;
              const proj = t.projects[def.id as keyof typeof t.projects];
              if (!proj) return null;

              return (
                <div
                  key={`${def.id}-${i}`}
                  className="proj-card"
                  style={{
                    minHeight: "280px",
                  }}
                >
                  <ProjectCard
                    def={def}
                    title={proj.title}
                    description={proj.description}
                    active={logicalIndex === active}
                    onDragStart={onCardDragStart}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 mt-8">
          <span className="text-white/25 text-xs font-mono tabular-nums">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>

          <div className="flex items-center justify-center gap-3">
            <ArrowBtn dir="left" onClick={prev} />
            <ArrowBtn dir="right" onClick={next} />
          </div>
        </div>
      </div>
    </section>
  );
}
