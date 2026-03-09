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
    image: '/projects/project-1.svg',
  },
  {
    id: 2,
    title: 'Voucher Mall',
    description: 'Voucher-based e-commerce platform with layered architecture including controllers, services, repositories, and authentication workflows.',
    tech: ['React', 'Vite', 'TypeScript', 'Spring Boot'],
    github: 'https://github.com/waqas-uddin/Voucher_Mall_ESD',
    color: '#00D4FF',
    image: '/projects/project-2.svg',
  },
  {
    id: 3,
    title: 'QuickHire',
    description: 'Mobile-first recruitment system with candidate-job matching, JWT authentication, RBAC, and optimized MongoDB queries.',
    tech: ['Flutter', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/waqas-uddin/QuickHire',
    color: '#FF6B6B',
    image: '/projects/project-3.svg',
  },
  {
    id: 4,
    title: 'Music Streaming App',
    description: 'Full-stack music streaming platform with user authentication, playlist management, song search, and a React frontend backed by a Node.js/Express REST API and MongoDB.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/waqas-uddin/Music_StreamingApp_MERN',
    color: '#A855F7',
    image: '/projects/project-4.svg',
  },
  {
    id: 5,
    title: 'Text Editor',
    description: 'MERN stack text editor with real-time editing, document management, and user authentication, built with React on the frontend and Node.js/Express on the backend.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/waqas-uddin/Text_Editor_MERN',
    color: '#F59E0B',
    image: '/projects/project-5.svg',
  },
  {
    id: 6,
    title: 'Language Translator',
    description: 'Browser-based language translator supporting multiple languages with instant translation, language detection, and a clean responsive interface built with vanilla web technologies.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/waqas-uddin/language_translator',
    color: '#10B981',
    image: '/projects/project-6.svg',
  },
  {
    id: 7,
    title: 'Computer Shop Management System',
    description: 'Console-based C++ application for managing computer shop inventory, processing sales, and maintaining customer records using object-oriented programming principles.',
    tech: ['C++'],
    github: 'https://github.com/waqas-uddin/Computer-Shop-Management-System',
    color: '#00599C',
    image: '/projects/project-7.svg',
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

