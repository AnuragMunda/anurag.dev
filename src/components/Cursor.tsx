'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const raf     = useRef<number>(0)

  useEffect(() => {
    if (window.innerWidth <= 768) return

    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }

    const animate = () => {
      const p = pos.current
      p.rx += (p.mx - p.rx) * 0.12
      p.ry += (p.my - p.ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = p.rx + 'px'
        ringRef.current.style.top  = p.ry + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  style={dotStyle}  />
      <div ref={ringRef} style={ringStyle} />
    </>
  )
}

// Inline styles to avoid CSS module dependency
const dotStyle: React.CSSProperties = {
  position: 'fixed', zIndex: 9999,
  width: 9, height: 9,
  background: 'var(--fg)', borderRadius: '50%',
  pointerEvents: 'none', transform: 'translate(-50%,-50%)',
  mixBlendMode: 'difference',
  transition: 'width .2s, height .2s',
}
const ringStyle: React.CSSProperties = {
  position: 'fixed', zIndex: 9998,
  width: 30, height: 30,
  border: '1px solid var(--fg)', borderRadius: '50%',
  pointerEvents: 'none', transform: 'translate(-50%,-50%)',
  opacity: 0.35, mixBlendMode: 'difference',
  transition: 'width .3s, height .3s',
}