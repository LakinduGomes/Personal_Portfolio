import { motion, AnimatePresence, useScroll, useSpring, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'
import Background from './Background'
import Hero from './Hero'
import { Experience, Research, Projects, Education, TechStack, Contact } from './Sections'
import { nav, tech, links } from './data'
import Logo from './Logo'



export default function App() {
  const [load, setLoad] = useState(true), [menu, setMenu] = useState(false), [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
useEffect(() => {
  const s = () => setScrolled(scrollY > 40)
  s(); addEventListener('scroll', s, { passive: true })
  return () => removeEventListener('scroll', s)
}, [])
  const { scrollYProgress } = useScroll(), bar = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })
  const gx = useMotionValue(-500), gy = useMotionValue(-500), sx = useSpring(gx, { stiffness: 90, damping: 20 }), sy = useSpring(gy, { stiffness: 90, damping: 20 })
  useEffect(() => { const m = (e) => { gx.set(e.clientX); gy.set(e.clientY) }; addEventListener('pointermove', m); return () => removeEventListener('pointermove', m) }, [])
  useEffect(() => { const t = setTimeout(() => setLoad(false), 1500); return () => clearTimeout(t) }, [])
  useEffect(() => {
    if (load) return
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach(([, h]) => { const el = document.querySelector(h); el && io.observe(el) })
    return () => io.disconnect()
  }, [load])
  const row = [...tech, ...tech]
  return (
    <>
      <AnimatePresence>
        {load && (
          <motion.div className="pre" exit={{ y: '-100%' }} transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}>
            <motion.b initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>LG</motion.b>
            <motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, ease: 'easeInOut' }} />
          </motion.div>
        )}
      </AnimatePresence>
      <Background />
      <motion.div className="glow" style={{ x: sx, y: sy }} />
      <motion.div className="prog" style={{ scaleX: bar }} />
      <motion.header className={'bar' + (scrolled ? ' sc' : '')} initial={{ y: -90, opacity: 0 }} animate={{ y: load ? -90 : 0, opacity: load ? 0 : 1 }} transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}>
  <div className="pillbar">
   <a className="logo" href="#top" aria-label="Lakindu Gomes, home"><Logo /><span>Lakindu Gomes</span></a>
    <nav>
      {nav.slice(1, 6).map(([l, h]) => (
        <a key={l} href={h} className={active === h.slice(1) ? 'on' : ''}>
          {active === h.slice(1) && <motion.span layoutId="navpill" className="np" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
          <span>{l}</span>
        </a>
      ))}
    </nav>
    <a className="cta-btn" href="#contact"><i className="dot" />Let’s talk</a>
    <button className="burger" aria-label="Menu" aria-expanded={menu} onClick={() => setMenu((m) => !m)}><span /><span /></button>
  </div>
  <AnimatePresence>
    {menu && (
      <motion.div className="mnav" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}>
        {nav.map(([l, h]) => <a key={l} href={h} onClick={() => setMenu(false)}>{l}</a>)}
      </motion.div>
    )}
  </AnimatePresence>
</motion.header>
      <main>
        {!load && <Hero />}
        <div className="mq" aria-hidden="true"><div>{row.map((t, i) => <span key={i}>{t}</span>)}</div><div className="rev">{row.map((t, i) => <span key={i}>{t}</span>)}</div></div>
        <Experience /><Research /><Projects /><Education /><TechStack /><Contact />
      </main>
      <footer><div className="wrap">
        <span>© 2026 Lakindu Gomes. Built with React, Vite and Framer Motion.</span>
        <nav><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={links.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></nav>
        <a className="top" href="#top">Back to top ↑</a>
      </div></footer>
    </>
  )
}
