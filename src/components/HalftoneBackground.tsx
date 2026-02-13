import { useRef, useEffect, useState } from 'react'
import './HalftoneBackground.css'

const PARALLAX_INTENSITY = 12
const THROTTLE_MS = 16 // ~60fps

export function HalftoneBackground() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const rafRef = useRef<number>()
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const layers = wrapper.querySelectorAll<HTMLElement>('[data-parallax]')
    if (layers.length === 0) return

    let lastTime = 0
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      const now = performance.now()
      const dt = Math.min((now - lastTime) / 1000, 0.1)
      lastTime = now
      currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, dt * 4)
      currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, dt * 4)
      const { x, y } = currentRef.current
      layers.forEach((el, i) => {
        const depth = 1 + (i * 0.3)
        const tx = x * depth * (i % 2 === 0 ? 1 : -0.7)
        const ty = y * depth * (i % 2 === 0 ? 0.8 : -0.5)
        el.style.transform = `translate(${tx}px, ${ty}px)`
      })
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    let lastRun = 0
    const onMove = (e: MouseEvent) => {
      const now = performance.now()
      if (now - lastRun < THROTTLE_MS) return
      lastRun = now
      const w = window.innerWidth
      const h = window.innerHeight
      const x = (e.clientX / w - 0.5) * 2
      const y = (e.clientY / h - 0.5) * 2
      targetRef.current.x = x * PARALLAX_INTENSITY
      targetRef.current.y = y * PARALLAX_INTENSITY
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className={`halftone-bg ${mounted ? 'halftone-bg--visible' : ''}`}
      aria-hidden
    >
      <div className="halftone-bg__layer halftone-bg__layer--sm" data-parallax />
      <div className="halftone-bg__layer halftone-bg__layer--md" data-parallax />
      <div className="halftone-bg__layer halftone-bg__layer--lg" data-parallax />
      <div className="halftone-bg__layer halftone-bg__layer--blur" data-parallax />
    </div>
  )
}
