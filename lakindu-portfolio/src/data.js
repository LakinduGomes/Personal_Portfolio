export const nav = [['About', '#top'], ['Experience', '#experience'], ['Projects', '#projects'], ['Education', '#education'], ['Skills', '#skills'], ['Contact', '#contact']]
export const tech = ['React.js', 'Laravel', 'Flutter', 'Figma', 'PHP', 'MySQL', 'Python Flask', 'Tailwind CSS', 'Dart', 'REST APIs', 'Machine Learning']
export const links = {
  email: 'lakindusanjula166@gmail.com',
  phone: '+94761684753',
  github: 'https://github.com/LakinduGomes',
  linkedin: 'https://linkedin.com/in/lakindu-gomes-704b4a280',
  whatsapp: 'https://wa.me/94761684753?text=' + encodeURIComponent('Hi Lakindu, I saw your portfolio and would like to talk.'),
}

export const experience = [
  { when: 'Dec 2024 – Present', org: 'Gate One Soft', role: 'Associate Software Engineer', text: 'I own front-end architecture and implementation across the client portfolio, translating Figma mockups into production UI with React.js and Laravel/Blade. I’ve shipped and maintain interfaces for 5+ enterprise systems: Hospital Management, HR & Payroll, EMR, Hotel Management and Master Data Management. I also took on backend work in PHP and MySQL, including payroll calculation logic and watermark/access-control features tied to system-level settings.' },
  { when: 'Jun 2024 – Dec 2024', org: 'Gate One Soft', role: 'Frontend Developer Intern', text: 'Built web pages and applied design implementations under senior guidance, working alongside the team on live client work. Performance during this period led to a promotion within six months.' },
]
export const projects = [
  // ---------- Personal & university ----------
  { c: 'Personal', name: 'ProdTrack AI', tech: ['University project', 'Laravel', 'MySQL', 'Flask', 'ML'], blurb: 'AI task and productivity analytics.', desc: 'A university project: a Laravel/MySQL backend connected to a Python Flask ML service. Includes an Excel import module with fuzzy column mapping, batch ML predictions and Chart.js analytics dashboards.' },
  { c: 'Personal', name: 'Banana Ninja', tech: ['University project', 'JavaScript', 'REST API', 'Game'], blurb: 'A puzzle game powered by the Banana Puzzle API.', desc: 'A university project: a game that pulls its puzzles from the Banana Puzzle API, so players solve a fresh challenge each round.' },
  { c: 'Personal', name: 'Travel Agency Platform', tech: ['Booking system', 'Laravel', 'PHP', 'MySQL'], blurb: 'Book travel destinations and hotels.', desc: 'A travel agency website with a booking system, where customers can browse travel destinations and hotels and make bookings.' },
  { c: 'Personal', name: 'Synergy One', tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript'], blurb: 'E-commerce site with Sinhala support.', desc: 'Multi-page store for a Sri Lankan organic fertilizer company. I managed requirements with the client and built the website, admin panel, product management and stock management.' },
  { c: 'Personal', name: 'Movie Theatre Booking', tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript'], blurb: 'Browse showtimes, pick seats, book.', desc: 'Web system for browsing movies and showtimes, selecting seats and booking, with an admin panel for movies, showtimes, bookings and customers.' },

  // ---------- Client & enterprise ----------
  { c: 'Client', name: 'GateOneHR Mobile', tech: ['Flutter', 'Dart', 'UI/UX'], blurb: 'HR workflows in your pocket.', desc: 'Responsive mobile interfaces for employee management and HR-related workflows.' },
  { c: 'Client', name: 'POS System', tech: ['Laravel', 'MySQL'], blurb: 'Fast point-of-sale for retail counters.', desc: 'Point-of-sale system for handling sales and billing at the counter.' },
  { c: 'Client', name: 'Inventory Management', tech: ['Laravel', 'MySQL'], blurb: 'Know what’s in stock, always.', desc: 'Inventory management system for tracking stock levels and stock movements.' },
  { c: 'Client', name: 'Hotel Management', tech: ['Laravel'], blurb: 'Branch- and availability-aware bookings.', desc: 'Booking, room and admin management interfaces with branch- and availability-aware logic.' },
  { c: 'Client', name: 'HR & Payroll', tech: ['Laravel'], blurb: 'Attendance through to payroll.', desc: 'Employee management, attendance and payroll modules, plus backend logic I contributed for payroll calculations.' },
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
export const skillGroups = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Laravel / Blade', 'Tailwind CSS', 'Responsive web'] },
  { title: 'Backend', items: ['PHP', 'Laravel', 'MySQL', 'Python (Flask)', 'RESTful APIs'] },
  { title: 'Mobile', items: ['Flutter', 'Dart'] },
  { title: 'AI & Data', items: ['Applied ML / AI', 'Chart.js dashboards'] },
  { title: 'Design', items: ['Figma', 'UI/UX prototyping'] },
  { title: 'Workflow', items: ['Git', 'Jira', 'VS Code', 'Client requirement gathering', 'Team collaboration'] },
]