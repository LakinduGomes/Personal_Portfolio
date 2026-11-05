import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Magnetic, Counter } from './ui'

const base = import.meta.env.BASE_URL
const candidates = ['photo.png', 'photo.jpg', 'photo.jpeg', 'photo.webp'].map((f) => base + f)

function Photo() {
  const [i, setI] = useState(0)
  return i < candidates.length ? (
    <img src={candidates[i]} alt="Lakindu Gomes" draggable="false" onError={() => setI(i + 1)} />
  ) : (
    <div className="none"><b>LG</b><small>Add your photo as public/photo.png</small></div>
  )
}

function Compare() {
  const ref = useRef(), drag = useRef(false), sweep = useRef(), x = useMotionValue(0)
  const clip = useTransform(x, (v) => `inset(0 ${100 - v}% 0 0)`), left = useTransform(x, (v) => v + '%')
  const rx = useSpring(0, { stiffness: 120, damping: 14 }), ry = useSpring(0, { stiffness: 120, damping: 14 })
  useEffect(() => { sweep.current = animate(x, [4, 74, 50], { duration: 2.8, delay: 1, ease: 'easeInOut' }); return () => sweep.current.stop() }, [])
  const pct = (e) => { const r = ref.current.getBoundingClientRect(); return [(e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height] }
  return (
    <motion.div className="cmp" ref={ref} style={{ rotateX: rx, rotateY: ry }}
      initial={{ opacity: 0, y: 70, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.1, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
      onPointerDown={(e) => { drag.current = true; sweep.current?.stop(); e.currentTarget.setPointerCapture(e.pointerId); x.set(Math.max(3, Math.min(97, pct(e)[0] * 100))) }}
      onPointerMove={(e) => { const [px, py] = pct(e); if (drag.current) { sweep.current?.stop(); x.set(Math.max(3, Math.min(97, px * 100))) } ry.set((px - 0.5) * 12); rx.set(-(py - 0.5) * 12) }}
      onPointerUp={() => (drag.current = false)} onPointerLeave={() => { rx.set(0); ry.set(0) }}>
      <div className="ph"><Photo /></div>
      <motion.div className="wire" style={{ clipPath: clip }}>
        <div className="ph"><Photo /></div>
        {[['12%', '8%', '76%', '62%', 'Frame 1 · 480×600'], ['12%', '76%', '44%', '9%', 'Heading / Auto layout'], ['60%', '76%', '28%', '9%', 'Button']].map((b, i) => (
          <motion.div key={i} className="box" style={{ left: b[0], top: b[1], width: b[2], height: b[3] }}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 + i * 0.25 }}><i>{b[4]}</i></motion.div>
        ))}
      </motion.div>
      <motion.div className="hd" style={{ left }} />
      <span className="tag l">Figma</span><span className="tag r">Production</span>
    </motion.div>
  )
}

const words = ['Frontend', 'to', 'full-stack,', 'built right.']
export default function Hero() {
  return (
    <div className="wrap hero" id="top">
      <div>
        <motion.span className="pill" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <i className="dot" />Associate Software Engineer · Gate One Soft
        </motion.span>
        <h1>{words.map((w, i) => (
          <span key={i}>{i === 2 && <br />}<span className="mask"><motion.span className={i === 3 ? 'ac' : ''} style={{ display: 'inline-block' }}
            initial={{ y: '115%', rotate: 4 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 0.95, delay: 0.25 + i * 0.13, ease: [0.2, 0.7, 0.2, 1] }}>{w}&nbsp;</motion.span></span></span>
        ))}</h1>
        <motion.p className="lead" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}>
          I’m Lakindu. I specialize in front-end, web design and full-stack development, building scalable, user-focused applications that real clients run on.
        </motion.p>
        <motion.div className="row" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.8 }}>
          <Magnetic className="btn p" href="#projects">See the work</Magnetic><Magnetic className="btn" href="#contact">Say hello</Magnetic>
        </motion.div>
       <motion.div className="stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
  <div><b><Counter to={2} suffix="+" /></b><span>years of experience</span></div>
  <div><b><Counter to={10} suffix="+" /></b><span>live client systems</span></div>
  <div><b>1st</b><span>Class Honours, BSc</span></div>
</motion.div>
      </div>
      <Compare />
    </div>
  )
}
