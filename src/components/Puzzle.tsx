import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { pieceTL, pieceTR, pieceBL, pieceBR } from '../assets'

// Where each piece starts before it flies in: x/y in % of the stage, z in px, rotations in deg.
// edge tints the copies stacked behind the face so the extruded side reads as shaded; bob/delay (s) desync the idle float.
const ink = 'invert(0.38)'
const pieces = [
  { src: pieceTL, x: -26, y: -16, z: 90, rx: 30, ry: -25, rz: -10, edge: ink, bob: 5.2, delay: 0 },
  { src: pieceTR, x: 26, y: -18, z: -60, rx: -20, ry: 28, rz: 12, edge: ink, bob: 6.1, delay: -2.3 },
  { src: pieceBL, x: -24, y: 20, z: -90, rx: 22, ry: 22, rz: 8, edge: ink, bob: 5.7, delay: -4.1 },
  { src: pieceBR, x: 26, y: 16, z: 110, rx: -28, ry: -22, rz: -14, edge: 'brightness(0.72)', bob: 6.6, delay: -1.2 },
]

const depth = 6 // extruded copies behind each face, 1.5px apart

// 0 = pieces apart, 1 = joined. Apart at the top of the page, joined once the stage's centre has scrolled up to 35% of the viewport.
const progressFor = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect()
  const joinAt = rect.top + window.scrollY + rect.height / 2 - window.innerHeight * 0.35
  if (joinAt <= 0) return 1 // screen so tall the stage is already there without scrolling
  return Math.min(1, window.scrollY / joinAt)
}

const Puzzle = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [mouse, setMouse] = useState({ x: 0, y: 0 }) // cursor position, -1..1 across the viewport

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1)
      return
    }
    const update = () => ref.current && setProgress(progressFor(ref.current))
    const follow = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return // touch drags would make the puzzle jump around while scrolling
      setMouse({ x: (e.clientX / window.innerWidth) * 2 - 1, y: (e.clientY / window.innerHeight) * 2 - 1 })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    window.addEventListener('pointermove', follow, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      window.removeEventListener('pointermove', follow)
    }
  }, [])

  const apart = 1 - progress * progress * (3 - 2 * progress) // smoothstep: eases in and out of the join
  const spread = window.innerWidth < 620 ? 0.6 : 1 // phones have little side margin, keep the pieces on screen

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Four puzzle pieces joining into a square"
      className="relative w-[min(300px,60vw)] aspect-square [perspective:1100px] [transform-style:preserve-3d]"
    >
      {/* Mouse tilt sits on its own wrapper so it doesn't fight the CSS float animation below */}
      <div
        className="absolute inset-0 [transform-style:preserve-3d] transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${mouse.x * 14}px, ${mouse.y * 10}px, 0) rotateY(${mouse.x * 16}deg) rotateX(${-mouse.y * 12}deg)`,
        }}
      >
        <div className="absolute inset-0 [transform-style:preserve-3d] animate-puzzle-float">
          {pieces.map((p) => (
            // Idle bob lives on this wrapper, scaled by --float, so it composes with the scroll transform and vanishes once joined.
            <div
              key={p.src}
              className="absolute inset-0 [transform-style:preserve-3d] animate-puzzle-bob"
              style={{ '--float': apart, animationDuration: `${p.bob}s`, animationDelay: `${p.delay}s` } as CSSProperties}
            >
              <div
                className="absolute inset-0 [transform-style:preserve-3d]"
                style={{
                  transform: `translate3d(${p.x * apart * spread}%, ${p.y * apart}%, ${p.z * apart}px) rotateX(${p.rx * apart}deg) rotateY(${p.ry * apart}deg) rotateZ(${p.rz * apart}deg)`,
                }}
              >
                {Array.from({ length: depth + 1 }, (_, i) => (
                  <img
                    key={i}
                    src={p.src}
                    alt=""
                    className="absolute inset-0 w-full h-full"
                    style={{
                      transform: `translateZ(${-i * 1.5}px)`,
                      // The backmost copy casts the ground shadow, softer and further down the higher the piece floats.
                      filter: i === depth
                        ? `${p.edge} drop-shadow(0 ${3 + 16 * apart}px ${2 + 10 * apart}px rgba(1, 2, 8, ${0.22 - 0.08 * apart}))`
                        : i > 0 ? p.edge : undefined,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Puzzle
