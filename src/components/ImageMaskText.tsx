import { useRef, useEffect, useState } from 'react'
import './ImageMaskText.css'

interface ImageMaskTextProps {
  children: React.ReactNode
  imageSrc: string
  className?: string
}

/**
 * Renders text with an image visible only inside the text shape (image-masked text).
 * Uses a canvas-generated mask so the image fills the letters.
 */
export default function ImageMaskText({ children, imageSrc, className = '' }: ImageMaskTextProps) {
  const textRef = useRef<HTMLSpanElement>(null)
  const [maskUrl, setMaskUrl] = useState<string | null>(null)

  useEffect(() => {
    if (!imageSrc || !textRef.current) return

    const textEl = textRef.current
    const canvas = document.createElement('canvas')

    const updateMask = () => {
      const rect = textEl.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return

      const padY = 8
      const padX = 4
      const w = rect.width + padX * 2
      const h = rect.height + padY * 2
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = w * dpr
      canvas.height = h * dpr

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = 'rgba(0,0,0,0)'
      ctx.fillRect(0, 0, w, h)
      ctx.fillStyle = '#fff'
      ctx.font = window.getComputedStyle(textEl).font
      ctx.textBaseline = 'alphabetic'
      ctx.textAlign = 'left'
      const text = String(children).toUpperCase()
      const baselineY = h - padY - 2
      ctx.fillText(text, padX, baselineY)

      setMaskUrl(canvas.toDataURL('image/png'))
    }

    updateMask()
    const ro = new ResizeObserver(updateMask)
    ro.observe(textEl)
    return () => ro.disconnect()
  }, [imageSrc, children])

  return (
    <span className={`image-mask-text ${className}`}>
      <span ref={textRef} className="image-mask-text__measure" aria-hidden>
        {children}
      </span>
      <span
        className="image-mask-text__image-wrap"
        style={
          maskUrl
            ? {
                maskImage: `url(${maskUrl})`,
                WebkitMaskImage: `url(${maskUrl})`,
                opacity: 1,
              }
            : { opacity: 0 }
        }
      >
        <img className="image-mask-text__image" src={imageSrc} alt="" draggable={false} />
      </span>
    </span>
  )
}
