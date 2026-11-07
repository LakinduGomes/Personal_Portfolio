import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import {
  LuBriefcase, LuCalendar, LuBuilding2, LuGraduationCap, LuGithub, LuExternalLink, LuLayers, LuCode,
  LuSend, LuMail, LuPhone, LuLinkedin, LuMapPin, LuCopy, LuCheck, LuArrowUpRight, LuMessageCircle,
  LuGamepad2, LuPlane, LuSprout, LuFilm,
} from 'react-icons/lu'
import { Reveal, Magnetic } from './ui'
import { TechChip, iconFor } from './icons'
import { experience, research, projects, education, techGroups, links } from './data'

const Title = ({ children, sub, tag, Icon }) => (
  <Reveal>{tag && <span className="tagp">{Icon && <Icon />}{tag}</span>}<h2 className="t">{children}</h2>{sub && <p className="sub">{sub}</p>}</Reveal>
)
const slug = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const shot = (n) => import.meta.env.BASE_URL + 'projects/' + slug(n) + '.png'
const hide = (e) => e.currentTarget.remove()

function Timeline({ children }) {
  const r = useRef(), { scrollYProgress } = useScroll({ target: r, offset: ['start 75%', 'end 55%'] })
  const h = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })
  return <div className="tl" ref={r}><motion.i className="line" style={{ scaleY: h }} />{children}</div>
}

export function Experience() {
  return (
    <section id="experience"><div className="wrap">
      <Title tag="Experience" Icon={LuBriefcase} sub="Professional roles at Gate One Soft, building scalable web applications from front-end to full-stack.">Work Experience</Title>
      <Timeline>
        {experience.map((e, i) => (
          <Reveal key={i} className="xw"><span className="node" />
            <motion.article className="xcard" whileHover={{ y: -4 }}>
              <div className="xtop"><span className={'badge' + (i === 0 ? ' cur' : '')}>{e.badge}</span><span className="dpill"><LuCalendar />{e.when}</span></div>
              <h3>{e.role}</h3>
              <div className="meta"><span className="mchip"><LuBuilding2 />{e.org}</span></div>
              <p className="xlead">{e.lead}</p>
              <ul className="bl">{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <div className="tw">{e.tags.map((t) => <TechChip key={t} name={t} small />)}</div>
            </motion.article>
          </Reveal>
        ))}
      </Timeline>
    </div></section>
  )
}

export function Research() {
  return (
    <section id="research"><div className="wrap">
      <Title tag="Research" Icon={LuGraduationCap} sub="Applied machine learning from my software engineering degree.">Research Project</Title>
      <Timeline>
        <Reveal className="xw"><span className="node" />
          <motion.article className="xcard" whileHover={{ y: -4 }}>
            <div className="xtop"><span className="badge cur"><LuGraduationCap />University Project</span>
<a className="gh sm" href={research.gh || links.github} target="_blank" rel="noopener noreferrer" aria-label="ProdTrack AI on GitHub" title="View repository"><LuGithub /></a></div>
            <h3>{research.name}</h3>
            <p className="field">{research.field}</p>
            <p className="xlead">{research.lead}</p>
            <ul className="bl">{research.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            <div className="tw">{research.tags.map((t) => <TechChip key={t} name={t} small />)}</div>
          </motion.article>
        </Reveal>
      </Timeline>
    </div></section>
  )
}

const art = {
  'Banana Ninja': LuGamepad2,
  'Travel Agency Platform': LuPlane,
  'Synergy One': LuSprout,
  'Movie Theatre Booking': LuFilm,
}

function GlassCard({ p, i, onOpen }) {
  const shown = p.tech.slice(0, 3), more = p.tech.length - shown.length
  const A = art[p.name] || LuLayers
  return (
    <motion.div role="button" tabIndex={0} className="gc" style={{ '--h': i * 61 + 230 }}
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.2, 0.7, 0.2, 1] }} whileHover={{ y: -8 }}
      onClick={() => onOpen(p)} onKeyDown={(e) => e.key === 'Enter' && onOpen(p)}>
      <img className="gimg" src={shot(p.name)} alt="" loading="lazy" onError={hide} />
      <div className="gart">
        <span className="gbadge"><A /></span>
        <p>{p.blurb}</p>
      </div>
      {p.demo && <em className="live"><i />Live</em>}
      <div className="gpanel">
        <div className="gtop">
          <div className="gt"><small>{p.kind}</small><h3>{p.name}</h3></div>
          <a className="gh" href={p.gh || links.github} target="_blank" rel="noopener noreferrer" aria-label={p.name + ' on GitHub'}
            title={p.gh ? 'View repository' : 'View my GitHub'} onClick={(e) => e.stopPropagation()}><LuGithub /></a>
        </div>
        <div className="tw">{shown.map((t) => <TechChip key={t} name={t} small />)}{more > 0 && <span className="tchip sm more">+{more} more</span>}</div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [o, setO] = useState(null)
  const personal = projects.filter((p) => p.c === 'Personal'), client = projects.filter((p) => p.c === 'Client')
  useEffect(() => { const k = (e) => e.key === 'Escape' && setO(null); addEventListener('keydown', k); return () => removeEventListener('keydown', k) }, [])
  useEffect(() => { document.body.style.overflow = o ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [o])
  return (
    <section id="projects"><div className="wrap">
      <Title tag="Projects" Icon={LuLayers} sub="Personal builds, university projects and client systems. Open any card for details.">Projects</Title>
      <h3 className="sh">Personal &amp; university projects</h3>
      <div className="gg">{personal.map((p, i) => <GlassCard key={p.name} p={p} i={i} onOpen={setO} />)}</div>
      <h3 className="sh">Client &amp; enterprise systems <span>Built at Gate One Soft</span></h3>
      <div className="grid">
        {client.map((p, i) => {
          const m = iconFor(p.tech[0]), I = m && m[0]
          return (
            <motion.button key={p.name} className="pc" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }} whileHover={{ y: -8 }} whileTap={{ scale: 0.97 }} onClick={() => setO(p)}>
              <div className="th" style={{ '--h': i * 47 + 215 }}>
                <img src={shot(p.name)} alt="" loading="lazy" onError={hide} />
                {I && <span className="thico"><I /></span>}
                <span className="shine" />{p.hi && <em className="feat">Featured</em>}
              </div>
              <div className="bd">
                <h3>{p.name}</h3><p>{p.blurb}</p>
                <div className="tw" style={{ marginTop: 16 }}>{p.tech.map((t) => <TechChip key={t} name={t} small />)}</div>
              </div>
            </motion.button>
          )
        })}
      </div>
    </div>
      <AnimatePresence>
        {o && (
          <motion.div className="ov" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setO(null)}>
            <motion.div className="md" role="dialog" aria-label={o.name} onClick={(e) => e.stopPropagation()} initial={{ y: 60, scale: 0.94, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 28 }}>
              <img className="mimg" src={shot(o.name)} alt={o.name + ' screenshot'} onError={hide} />
              <h3>{o.name}</h3><div className="tw" style={{ margin: '12px 0 0' }}>{o.tech.map((t) => <TechChip key={t} name={t} small />)}</div><p>{o.desc}</p>
              {o.hi && <ul className="hi">{o.hi.map((h) => <li key={h}>{h}</li>)}</ul>}
              <div className="row">
                {o.gh && <a className="btn" href={o.gh} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
                {o.demo && <a className="btn" href={o.demo} target="_blank" rel="noopener noreferrer">Live demo ↗</a>}
                <button className="btn p" onClick={() => setO(null)}>Close</button>
              </div>
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

export function TechStack() {
  const [f, setF] = useState('All')
  const list = techGroups.filter((g) => f === 'All' || g.title === f)
  return (
    <section id="skills"><div className="wrap">
      <Title tag="Skills" Icon={LuCode} sub="The languages, frameworks and tools I use to design, build and ship.">Tech Stack</Title>
      <div className="tabs">{['All', ...techGroups.map((g) => g.title)].map((k) => (
        <button key={k} className={'btn ' + (f === k ? 'on' : '')} onClick={() => setF(k)}>{f === k && <motion.span layoutId="ttab" className="tabbg" />}<span>{k}</span></button>
      ))}</div>
      <motion.div layout className="tg">
        <AnimatePresence mode="popLayout">
          {list.map((g) => (
            <motion.div layout key={g.title} className="tcat" style={{ '--t': g.tint }} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ type: 'spring', stiffness: 260, damping: 28 }}>
              <div className="tch"><div><h3>{g.title}</h3><small>{g.items.length} {g.items.length === 1 ? 'technology' : 'technologies'}</small></div><span className="catpill">Category</span></div>
              <div className="tw">{g.items.map((t) => <TechChip key={t} name={t} small />)}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div></section>
  )
}


export function Contact() {
  const [cp, setCp] = useState(false)
  const copy = (e) => {
    e.preventDefault()
    navigator.clipboard?.writeText(links.phone)
    setCp(true)
    setTimeout(() => setCp(false), 1800)
  }

  const cards = [
    { Icon: LuMail, label: 'Email', value: links.email, href: 'mailto:' + links.email, tint: '#e0a030' },
    { Icon: LuPhone, label: 'Phone', value: cp ? 'Number copied' : '+94 76 168 4753', href: '#', tint: '#3ddc97', onClick: copy, ActionIcon: cp ? LuCheck : LuCopy },
    { Icon: LuLinkedin, label: 'LinkedIn', value: 'lakindu-gomes', href: links.linkedin, tint: '#4d8dff', ext: true },
    { Icon: LuGithub, label: 'GitHub', value: 'LakinduGomes', href: links.github, tint: '#8d9bff', ext: true },
  ]

  return (
    <section className="cta" id="contact"><div className="wrap">
      <Title tag="Contact" Icon={LuSend} sub="Open to full-stack and senior front-end roles. The fastest way to reach me is WhatsApp.">
        Let’s build something together
      </Title>

      <Reveal delay={0.1}>
        <div className="cmeta">
          <span className="avail"><i />Available for new roles</span>
          <span className="mchip"><LuMapPin />Colombo, Sri Lanka</span>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <Magnetic className="wa" href={links.whatsapp} target="_blank" rel="noopener noreferrer">
          <span className="ring" />
          <LuMessageCircle size={26} />
          Chat on WhatsApp
        </Magnetic>
      </Reveal>

      <div className="cgrid">
        {cards.map(({ Icon, label, value, href, tint, ext, onClick, ActionIcon }, i) => {
          const End = ActionIcon || LuArrowUpRight
          return (
            <motion.a key={label} className="cc" style={{ '--t': tint }} href={href}
              {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} onClick={onClick}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }} whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }}>
              <span className="cico"><Icon /></span>
              <span className="ctxt"><small>{label}</small><b>{value}</b></span>
              <End className="cgo" />
            </motion.a>
          )
        })}
      </div>
    </div></section>
  )
}