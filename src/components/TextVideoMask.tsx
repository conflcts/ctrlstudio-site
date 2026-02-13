import { useRef, useEffect, useState } from 'react'
import './TextVideoMask.css'

interface TextVideoMaskProps {
  children: React.ReactNode
  videoSrc?: string
  className?: string
}

export default function TextVideoMask({ children, videoSrc, className = '' }: TextVideoMaskProps) {
  const textRef = useRef<HTMLSpanElement>(null)
  const [maskUrl, setMaskUrl] = useState<string | null>(null)

  useEffect(() => {
    if (!videoSrc || !textRef.current) return

    const textEl = textRef.current
    const canvas = document.createElement('canvas')
    if (!canvas) return

    const updateMask = () => {
      const rect = textEl.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return

      const padY = 6
      const padX = 2
      const w = rect.width + padX * 2
      const h = rect.height + padY * 2
      const dpr = window.devicePixelRatio || 1
      canvas.width = w * dpr
      canvas.height = h * dpr

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = 'rgba(0,0,0,0)'
      ctx.fillRect(0, 0, w, h)
      ctx.fillStyle = 'rgba(255,255,255,1)'
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
  }, [videoSrc, children])

  if (videoSrc) {
    return (
      <span className={`text-video-mask text-video-mask--video ${className}`}>
        <span ref={textRef} className="text-video-mask__text text-video-mask__measure" aria-hidden>
          {children}
        </span>
        <span
          className="text-video-mask__video-wrap"
          style={maskUrl ? { maskImage: `url(${maskUrl})`, WebkitMaskImage: `url(${maskUrl})`, opacity: 1 } : { opacity: 0 }}
        >
          <video
            className="text-video-mask__video"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
        </span>
      </span>
    )
  }

  return (
    <span className={`text-video-mask ${className}`}>
      <span className="text-video-mask__text">
        {children}
      </span>
    </span>
  )
}
