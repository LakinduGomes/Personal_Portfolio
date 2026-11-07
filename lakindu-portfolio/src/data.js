export const nav = [['About', '#top'], ['Experience', '#experience'], ['Research', '#research'], ['Projects', '#projects'], ['Education', '#education'], ['Tech Stack', '#skills'], ['Contact', '#contact']]
export const tech = ['React.js', 'Laravel', 'Flutter', 'Figma', 'PHP', 'MySQL', 'Python Flask', 'Tailwind CSS', 'Dart', 'REST APIs', 'Machine Learning']
export const links = {
  email: 'lakindusanjula166@gmail.com',
  phone: '+94761684753',
  github: 'https://github.com/LakinduGomes',
  linkedin: 'https://linkedin.com/in/lakindu-gomes-704b4a280',
  whatsapp: 'https://wa.me/94761684753?text=' + encodeURIComponent('Hi Lakindu, I saw your portfolio and would like to talk.'),
}

export const experience = [
  {
    badge: 'Current', when: 'Dec 2024 – Present', org: 'Gate One Soft', role: 'Associate Software Engineer',
    lead: 'Own front-end architecture and implementation across the company’s client portfolio, translating Figma mockups into production UI with React.js and Laravel/Blade.',
    bullets: [
      'Shipped and maintain interfaces for 5+ enterprise systems: Hospital Management, HR & Payroll, EMR, Hotel Management and Master Data Management, supporting live client operations.',
      'Took initiative on backend tasks in PHP and MySQL beyond the standard front-end scope, including payroll calculation logic and watermark/access-control features tied to system-level settings.',
    ],
    tags: ['React.js', 'Laravel', 'PHP', 'MySQL', 'Figma'],
  },
  {
    badge: 'Internship', when: 'Jun 2024 – Dec 2024', org: 'Gate One Soft', role: 'Frontend Developer Intern',
    lead: 'Started out building web pages and applying design implementations under senior guidance, working alongside the team on live client work.',
    bullets: ['Performance during this period led to a promotion into the Associate Software Engineer role within 6 months.'],
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
]

export const research = {
  name: 'ProdTrack AI', field: 'Applied Machine Learning · Productivity Analytics',
  lead: 'A university project: an AI-powered task management and productivity analytics platform that connects a Laravel/MySQL backend to a Python Flask ML service for predictive analytics.',
  bullets: [
    'Built an Excel import module with fuzzy column mapping.',
    'Connected the Laravel/MySQL backend to a Python Flask service for batch ML predictions.',
    'Delivered Chart.js-driven analytics dashboards.',
  ],
  tags: ['Laravel', 'PHP', 'MySQL', 'Python', 'Flask', 'Machine Learning', 'Chart.js'],
}

/* Personal cards: add  gh: 'https://github.com/LakinduGomes/<repo>'  to link the GitHub icon to that repo
   (until then the icon opens your GitHub profile).  Screenshots: public/projects/<slug>.png
   (slug = name in lowercase, symbols → "-", e.g. banana-ninja.png).  Client projects can use  hi: [...]  for bullet highlights. */
export const projects = [
  // ---------- Personal & university ----------
    { c: 'Personal', kind: 'University project · Game', name: 'Banana Ninja', tech: ['JavaScript', 'REST API', 'Game'], blurb: 'An equation-solving bubble game powered by the Banana API.',
    desc: 'A game built on the Banana API, which supplies the equation puzzles. Each round shows an equation and four bubbles pop up on screen: one holds the correct answer and three are wrong. Pick the right one to score; pick a wrong one and you lose a life.',
    hi: ['Equation puzzles served by the Banana puzzle API', 'Four bubbles pop up each round: 1 correct answer and 3 wrong ones', 'A correct answer earns 10 points', 'Three lives: every wrong answer costs one, and losing all three ends the game', 'Leaderboard showing the top scorers'] },
  { c: 'Personal', kind: 'Booking system', name: 'Travel Agency Platform', tech: ['React.js', 'Laravel', 'PHP', 'MySQL'], blurb: 'Sri Lanka’s popular places, nearby hotels and online booking.',
    desc: 'A travel agency website built with React.js that showcases the popular travelling peak places around Sri Lanka together with the hotels near each of them. Visitors can explore a destination, choose a hotel and book with all their details, while an admin panel lets the team manage every booking.',
    hi: ['Travelling peak places across Sri Lanka', 'Hotels listed near each destination', 'Booking flow that captures all the stay and traveller details', 'Admin panel to manage bookings'] },
  { c: 'Personal', kind: 'Company website · E-commerce', name: 'Synergy One', tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Admin panel', 'Stock management'], blurb: 'Website and shop for a Sri Lankan bio-fertilizer company.',
    desc: 'The full website for Synergy One, a Sri Lankan bio-fertilizer company. It presents all of the company’s services, includes an online shop for its products and comes with an admin panel to manage the site. I gathered the requirements directly with the client and developed the whole system.',
    hi: ['Multi-page website presenting all of the company’s services', 'Online shop for the company’s products', 'Sinhala language support', 'Admin panel with product management and stock management', 'Requirements managed directly with the client'] },
  { c: 'Personal', kind: 'Live booking system', name: 'Movie Theatre Booking', tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Admin panel'], demo: 'https://eveloungelk.com/', blurb: 'A live booking system for a private movie theatre.',
    desc: 'A live, working booking system for a private movie theatre. Customers browse movies and showtimes, select their seats and make a booking, and an admin panel lets the team manage movies, showtimes, bookings and customers.',
    hi: ['Live in production at evelounge.lk', 'Browse movies and showtimes', 'Seat selection and booking', 'Admin panel for movies, showtimes, bookings and customers'] },
  // ---------- Client & enterprise ----------
  { c: 'Client', name: 'HR & Payroll', tech: ['Laravel', 'PHP', 'MySQL'], blurb: 'Attendance through to payroll.', desc: 'Employee management, attendance and payroll modules for a live client.', hi: ['Employee management and attendance modules', 'Contributed backend logic for payroll calculations', 'Watermark and access-control features tied to system-level settings'] },
  { c: 'Client', name: 'Hotel Management', tech: ['Laravel'], blurb: 'Branch- and availability-aware bookings.', desc: 'Booking, room and admin management interfaces for hotels.', hi: ['Booking, room and admin management interfaces', 'Branch- and availability-aware logic'] },
  { c: 'Client', name: 'GateOneHR Mobile', tech: ['Flutter', 'Dart', 'UI/UX'], blurb: 'HR workflows in your pocket.', desc: 'Responsive mobile interfaces for employee management and HR-related workflows.' },
  { c: 'Client', name: 'POS System', tech: ['Laravel', 'MySQL'], blurb: 'Fast point-of-sale for retail counters.', desc: 'Point-of-sale system for handling sales and billing at the counter.' },
  { c: 'Client', name: 'Inventory Management', tech: ['Laravel', 'MySQL'], blurb: 'Know what’s in stock, always.', desc: 'Inventory management system for tracking stock levels and stock movements.' },
  { c: 'Client', name: 'EMR System', tech: ['Laravel'], blurb: 'Medical records for clinics.', desc: 'Electronic medical record features for hospitals and clinics.' },
  { c: 'Client', name: 'Master Data Management', tech: ['Laravel'], blurb: 'Clean organizational data.', desc: 'Data entry, validation and management features for organizational data.' },
  { c: 'Client', name: 'GateOneSoft Website', tech: ['HTML', 'CSS', 'Tailwind', 'PHP'], blurb: 'The company’s public site.', desc: 'Front-end interfaces and responsive design for the company website.' },
  { c: 'Client', name: 'GateOneSoft SaaS', tech: ['React.js', 'Tailwind CSS'], blurb: 'The SaaS marketing site.', desc: 'Front-end interfaces and responsive design for the SaaS website.' },
  { c: 'Client', name: 'LMS Mobile App', tech: ['Flutter', 'Dart', 'UI/UX'], blurb: 'Courses and exams on mobile.', desc: 'Mobile interface for an LMS: course content, lessons, student access and examination-related screens.' },
  { c: 'Client', name: 'LMS Website', tech: ['React.js', 'JavaScript', 'CSS'], blurb: 'Course browsing and student portal.', desc: 'Responsive LMS website covering course browsing, free content, authentication and student-facing interfaces.' },
]

export const education = [
  { y: '2026', t: 'BSc (Hons) Software Engineering', s: 'First Class · University of Bedfordshire, via SLIIT City Uni' },
  { y: '2023–24', t: 'HND in Software Engineering', s: 'NIBM | Coventry University' },
  { y: '2022–23', t: 'Diploma in Software Engineering', s: 'GPA 3.65 · NIBM | Coventry University' },
  { y: '2019', t: 'G.C.E. Ordinary Level', s: 'Carey College, Colombo 8' },
]

export const techGroups = [
  { title: 'Frontend', tint: '#e0a030', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Laravel Blade'] },
  { title: 'Backend', tint: '#3ddc97', items: ['PHP', 'Laravel', 'Flask', 'REST APIs'] },
  { title: 'Database', tint: '#4d8dff', items: ['MySQL'] },
  { title: 'Mobile', tint: '#2bb7f6', items: ['Flutter', 'Dart'] },
  { title: 'Machine Learning', tint: '#ff7a59', items: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter', 'Applied ML / AI', 'Chart.js'] },
  { title: 'Others', tint: '#8d9bff', items: ['Figma', 'Git', 'Jira', 'Postman', 'VS Code'] },
]
