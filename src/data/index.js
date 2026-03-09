export const skills = {
  Frontend: [
    { name: 'React', icon: 'SiReact', color: '#61DAFB' },
    { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
    { name: 'HTML5', icon: 'SiHtml5', color: '#E34F26' },
    { name: 'CSS3', icon: 'SiCss3', color: '#1572B6' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4' },
    { name: 'Flutter', icon: 'SiFlutter', color: '#02569B' },
  ],
  Backend: [
    { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
    { name: 'Express.js', icon: 'SiExpress', color: '#FFFFFF' },
    { name: 'Spring Boot', icon: 'SiSpringboot', color: '#6DB33F' },
    { name: 'REST APIs', icon: 'TbApi', color: '#FF6B6B' },
    { name: 'JWT Auth', icon: 'MdSecurity', color: '#6C63FF' },
  ],
  Databases: [
    { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
    { name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
  ],
  Languages: [
    { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
    { name: 'Java', icon: 'FaJava', color: '#ED8B00' },
    { name: 'C++', icon: 'SiCplusplus', color: '#00599C' },
    { name: 'SQL', icon: 'TbSql', color: '#336791' },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'SyncX Computer Accessories Store',
    description: 'Full stack e-commerce platform with REST APIs, JWT authentication, RBAC, product management, cart system, and order processing.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/alfen-yu/syncx',
    color: '#6C63FF',
  },
  {
    id: 2,
    title: 'Voucher Mall',
    description: 'Voucher-based e-commerce platform with layered architecture including controllers, services, repositories, and authentication workflows.',
    tech: ['React', 'Vite', 'TypeScript', 'Spring Boot'],
    github: 'https://github.com/waqas-uddin/Voucher_Mall_ESD',
    color: '#00D4FF',
  },
  {
    id: 3,
    title: 'QuickHire',
    description: 'Mobile-first recruitment system with candidate-job matching, JWT authentication, RBAC, and optimized MongoDB queries.',
    tech: ['Flutter', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/waqas-uddin/QuickHire',
    color: '#FF6B6B',
  },
];

export const experiences = [
  {
    id: 1,
    role: 'Frontend Developer Intern',
    company: 'Ismail Industries Limited',
    period: 'Jun 2025 – Jul 2025',
    points: [
      'Built internal tools using JavaScript',
      'Integrated REST APIs',
      'Implemented modular UI components',
    ],
    color: '#6C63FF',
  },
  {
    id: 2,
    role: 'Frontend Developer Intern',
    company: 'Scitforte',
    period: 'Aug 2024 – Sep 2024',
    points: [
      'Developed responsive React SPAs',
      'Integrated REST APIs',
      'Collaborated with backend developers',
    ],
    color: '#00D4FF',
  },
];

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'FAST NUCES Karachi',
    period: '2021 – 2026',
    color: '#6C63FF',
  },
];

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];
