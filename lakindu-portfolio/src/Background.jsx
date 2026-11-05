import { useEffect, useRef } from 'react'
export default function Background() {
  const ref = useRef()
  useEffect(() => {
    const c = ref.current, x = c.getContext('2d'), d = Math.min(devicePixelRatio || 1, 2)
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches
    let w, h, raf, P = [], m = { x: -9999, y: -9999 }
    const size = () => {
      w = c.width = innerWidth * d; h = c.height = innerHeight * d
      P = Array.from({ length: Math.min(100, Math.floor(innerWidth / 13)) }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.4 * d, vy: (Math.random() - 0.5) * 0.4 * d }))
    }
    const mv = (e) => { m.x = e.clientX * d; m.y = e.clientY * d }
    const tick = () => {
      x.clearRect(0, 0, w, h); const L = 150 * d
      for (const p of P) {
        if (!still) {
          p.x += p.vx; p.y += p.vy
          if (p.x < 0 || p.x > w) p.vx *= -1
          if (p.y < 0 || p.y > h) p.vy *= -1
          const dx = p.x - m.x, dy = p.y - m.y
          if (dx * dx + dy * dy < (170 * d) ** 2) { p.x += dx * 0.014; p.y += dy * 0.014 }
        }
        x.fillStyle = 'rgba(170,180,255,.75)'; x.beginPath(); x.arc(p.x, p.y, 1.4 * d, 0, 7); x.fill()
      }
      for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) {
        const a = P[i], b = P[j], q = Math.hypot(a.x - b.x, a.y - b.y)
        if (q < L) { x.strokeStyle = `rgba(141,155,255,${0.2 * (1 - q / L)})`; x.lineWidth = d; x.beginPath(); x.moveTo(a.x, a.y); x.lineTo(b.x, b.y); x.stroke() }
      }
      for (const p of P) if (Math.hypot(p.x - m.x, p.y - m.y) < 200 * d) { x.strokeStyle = 'rgba(255,95,162,.35)'; x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(m.x, m.y); x.stroke() }
      raf = requestAnimationFrame(tick)
    }
    size(); tick(); addEventListener('resize', size); addEventListener('pointermove', mv)
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', size); removeEventListener('pointermove', mv) }
  }, [])
  return <canvas ref={ref} className="bg" aria-hidden="true" />
}
