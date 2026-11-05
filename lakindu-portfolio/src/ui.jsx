import { motion, useMotionValue, useSpring, useInView, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export const Reveal = ({ children, delay = 0, y = 40, className = '' }) => (
  <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>
)

export function Magnetic({ children, className = '', ...p }) {
  const r = useRef(), x = useMotionValue(0), y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 }), sy = useSpring(y, { stiffness: 200, damping: 15 })
  return (
    <motion.a ref={r} className={className} style={{ x: sx, y: sy }}
      onMouseMove={(e) => { const b = r.current.getBoundingClientRect(); x.set((e.clientX - b.left - b.width / 2) * 0.3); y.set((e.clientY - b.top - b.height / 2) * 0.4) }}
      onMouseLeave={() => { x.set(0); y.set(0) }} whileTap={{ scale: 0.95 }} {...p}>{children}</motion.a>
  )
}

export function Counter({ to, suffix = '' }) {
  const r = useRef(), seen = useInView(r, { once: true }), [n, setN] = useState(0)
  useEffect(() => { if (!seen) return; const c = animate(0, to, { duration: 1.8, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) }); return () => c.stop() }, [seen, to])
  return <span ref={r}>{n}{suffix}</span>
}
