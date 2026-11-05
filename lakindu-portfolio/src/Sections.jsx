import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Reveal, Magnetic } from './ui'
import { experience, projects, education, skillGroups, links } from './data'

const Title = ({ children, sub }) => <Reveal><h2 className="t">{children}</h2>{sub && <p className="sub">{sub}</p>}</Reveal>

export function Experience() {
  const r = useRef(), { scrollYProgress } = useScroll({ target: r, offset: ['start 75%', 'end 55%'] })
  const h = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })
  return (
    <section id="experience"><div className="wrap">
      <Title sub="Promoted from intern to associate engineer within six months.">Experience</Title>
      <div className="tl" ref={r}>
        <motion.i className="line" style={{ scaleY: h }} />
        {experience.map((e, i) => (
          <Reveal key={i} className="xp"><span className="node" /><small>{e.when}<br />{e.org}</small><div><h3>{e.role}</h3><p>{e.text}</p></div></Reveal>
        ))}
      </div>
    </div></section>
  )
}

export function Projects() {
  const [f, setF] = useState('All'), [o, setO] = useState(null)
  const list = projects.filter((p) => f === 'All' || p.c === f)
  useEffect(() => { const k = (e) => e.key === 'Escape' && setO(null); addEventListener('keydown', k); return () => removeEventListener('keydown', k) }, [])
  return (
    <section id="projects"><div className="wrap">
      <Title sub="Personal builds and client systems. Open any card for details.">Projects</Title>
      <div className="tabs">{[['All', 'All'], ['Personal', 'Personal & AI'], ['Client', 'Client & enterprise']].map(([k, l]) => (
        <button key={k} className={'btn ' + (f === k ? 'on' : '')} onClick={() => setF(k)}>{f === k && <motion.span layoutId="tab" className="tabbg" />}<span>{l}</span></button>
      ))}</div>
      <motion.div layout className="grid">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.button layout key={p.name} className="pc" initial={{ opacity: 0, scale: 0.85, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 260, damping: 28, delay: i * 0.03 }} whileHover={{ y: -8 }} whileTap={{ scale: 0.97 }} onClick={() => setO(p)}>
              <div className="th" style={{ '--h': i * 47 + 215 }}><span className="shine" /></div>
              <div className="bd"><h3>{p.name}</h3><p>{p.blurb}</p><div className="chips">{p.tech.map((t) => <span key={t}>{t}</span>)}</div></div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
      <AnimatePresence>
        {o && (
          <motion.div className="ov" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setO(null)}>
            <motion.div className="md" role="dialog" aria-label={o.name} onClick={(e) => e.stopPropagation()} initial={{ y: 60, scale: 0.94, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 28 }}>
              <h3>{o.name}</h3><div className="chips">{o.tech.map((t) => <span key={t}>{t}</span>)}</div><p>{o.desc}</p>
              <button className="btn p" onClick={() => setO(null)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export function Education() {
  const r = useRef(), { scrollYProgress } = useScroll({ target: r, offset: ['start 70%', 'end 60%'] })
  const h = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })
  return (
    <section id="education"><div className="wrap">
      <Title sub="Software engineering, from diploma to honours degree.">Education</Title>
      <div className="zig" ref={r}>
        <motion.i className="zline" style={{ scaleY: h }} />
        {education.map((e, i) => (
          <motion.div key={e.t} className={'zrow ' + (i % 2 ? 'r' : 'l')}
            initial={{ opacity: 0, x: i % 2 ? 60 : -60 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}>
            <motion.div className={'zc' + (i === 0 ? ' hl' : '')} whileHover={{ y: -6 }}>
              <em>{e.y}</em><b>{e.t}</b><span>{e.s}</span>
            </motion.div>
            <motion.i className="znode" initial={{ scale: 0 }} whileInView={{ scale: 1 }}
              viewport={{ once: true }} transition={{ type: 'spring', stiffness: 300, damping: 14, delay: 0.25 }} />
          </motion.div>
        ))}
      </div>
    </div></section>
  )
}

export function Skills() {
  return (
    <section id="skills"><div className="wrap">
      <Title sub="What I reach for every day.">Skills</Title>
      <div className="sg">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <motion.div className="sc" whileHover={{ y: -6 }}>
              <motion.i className="sbar" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 + i * 0.08 }} />
              <small>0{i + 1}</small>
              <h3>{g.title}</h3>
              <motion.div className="schips" initial="h" whileInView="s" viewport={{ once: true }} transition={{ staggerChildren: 0.05, delayChildren: 0.3 + i * 0.08 }}>
                {g.items.map((s) => (
                  <motion.span key={s} variants={{ h: { opacity: 0, y: 16, scale: 0.9 }, s: { opacity: 1, y: 0, scale: 1 } }} whileHover={{ y: -3, scale: 1.06 }}>{s}</motion.span>
                ))}
              </motion.div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div></section>
  )
}

export function Contact() {
  const [cp, setCp] = useState(false)
  const copy = () => { navigator.clipboard?.writeText(links.phone); setCp(true); setTimeout(() => setCp(false), 1800) }
  return (
    <section className="cta" id="contact"><div className="wrap">
      <Reveal><h2 className="t">Let’s build something together</h2></Reveal>
      <Reveal delay={0.1}><p className="sub" style={{ margin: '0 auto 34px' }}>Open to full-stack and senior front-end roles. Colombo, Sri Lanka. The fastest way to reach me is WhatsApp.</p></Reveal>
      <Reveal delay={0.2}>
        <Magnetic className="wa" href={links.whatsapp} target="_blank" rel="noopener noreferrer">
          <span className="ring" />
          <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" /></svg>
          Chat on WhatsApp
        </Magnetic>
      </Reveal>
      <Reveal delay={0.3}>
        <button className="num" onClick={copy}>{cp ? 'Number copied' : '+94 76 168 4753'}</button>
        <div className="row c">
          <Magnetic className="btn" href={'mailto:' + links.email}>Email</Magnetic>
          <Magnetic className="btn" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</Magnetic>
          <Magnetic className="btn" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</Magnetic>
        </div>
      </Reveal>
    </div></section>
  )
}
