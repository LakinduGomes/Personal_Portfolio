import { motion, useScroll, useSpring, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'
import Background from './Background'
import Hero from './Hero'
import { Experience, Projects, Education, Skills, Contact } from './Sections'
import { nav, tech } from './data'

export default function App() {
  const { scrollYProgress } = useScroll(), bar = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })
  const gx = useMotionValue(-500), gy = useMotionValue(-500), sx = useSpring(gx, { stiffness: 90, damping: 20 }), sy = useSpring(gy, { stiffness: 90, damping: 20 })
  useEffect(() => { const m = (e) => { gx.set(e.clientX); gy.set(e.clientY) }; addEventListener('pointermove', m); return () => removeEventListener('pointermove', m) }, [])
  const row = [...tech, ...tech]
  return (
    <>
      <Background />
      <motion.div className="glow" style={{ x: sx, y: sy }} />
      <motion.div className="prog" style={{ scaleX: bar }} />
      <motion.header className="bar" initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}>
        <div className="wrap"><a className="logo" href="#top">Lakindu Gomes</a>
          <nav>{nav.slice(1, 5).map(([l, h]) => <a key={l} href={h}>{l}</a>)}</nav>
          <a className="btn p" href="#contact">Get in touch</a></div>
      </motion.header>
      <main>
        <Hero />
        <div className="mq" aria-hidden="true"><div>{row.map((t, i) => <span key={i}>{t}</span>)}</div><div className="rev">{row.map((t, i) => <span key={i}>{t}</span>)}</div></div>
        <Experience /><Projects /><Education /><Skills /><Contact />
      </main>
      <footer><div className="wrap">© 2026 Lakindu Gomes. Built with React, Vite and Framer Motion.</div></footer>
    </>
  )
}
