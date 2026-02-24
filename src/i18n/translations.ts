import { type Translation } from '../types';

export const pt: Translation = {
  nav: {
    about: 'Sobre',
    projects: 'Projetos',
    technologies: 'Tecnologias',
    contact: 'Contato',
  },
  hero: {
    greeting: 'Olá, eu sou',
    name: 'Luís Felipe',
    role: 'Desenvolvedor Front-end',
    subtitle:
      'Apaixonado por criar experiências digitais elegantes e funcionais. Transformo ideias em código limpo e escalável.',
    cta: 'Ver Projetos',
    ctaSecondary: 'Falar Comigo',
  },
  about: {
    title: 'Sobre Mim',
    paragraphs: [
      'Sou desenvolvedor focado em construir soluções digitais modernas, eficientes e bem estruturadas. Trabalho com TypeScript, React e Vite para criar interfaces performáticas, escaláveis e centradas na experiência do usuário. Valorizo código limpo, arquitetura sólida e boas práticas que garantem manutenção simples e crescimento sustentável dos projetos.',
      'Tenho forte interesse em transformação digital, otimização de processos e no desenvolvimento de aplicações que gerem impacto real. Busco evolução técnica constante, aplicando padrões atuais de mercado com atenção à qualidade, performance e usabilidade.',
      'Sou comprometido com aprendizado contínuo, colaboração em equipe e entrega de soluções que conectam tecnologia, estratégia e resultados mensuráveis.',
    ],
  },
  projects: {
    title: 'Projetos',
    items: [
      {
        title: 'Agendamentos Motirõ',
        description:
          'Plataforma de agendamentos internos para a Secretaria de Ciência, Tecnologia e Inovação do Estado de Pernambuco.',
        tags: ['Bootstrap', 'Javascript', 'HTML5', 'CSS'],
        liveLabel: '',
        codeLabel: '',
      },
      {
        title: 'PE Digital',
        description:
          'Plataforma onde museus do estado de Pernambuco foram digitalizados e podem ser acessados.',
        tags: ['TypeScript', 'React', 'Axios', 'TailwindCSS', 'CSS'],
        liveLabel: 'Ver plataforma',
        codeLabel: '',
      },
      {
        title: 'Site SECTI',
        description:
          'O site da Secretaria de Ciência, Tecnologia e Inovação de Pernambuco foi desenvolvido com arquitetura moderna, foco em performance, segurança e escalabilidade.',
        tags: ['React', 'TypeScript', 'Axios', 'TailwindCSS'],
        liveLabel: 'Ver plataforma',
        codeLabel: '',
      },
      {
        title: 'Sistema Ciência Jovem',
        description:
            'O site da Secretaria de Ciência, Tecnologia e Inovação de Pernambuco foi desenvolvido com arquitetura moderna, foco em performance, segurança e escalabilidade.',
        tags: ['React', 'TypeScript', 'Axios', 'TailwindCSS'],
        liveLabel: 'Ver plataforma',
        codeLabel: '',
      },
    ],
  },
  technologies: {
    title: 'Tecnologias',
    subtitle: 'Ferramentas e tecnologias que utilizo no dia a dia',
  },
  contact: {
    title: 'Contato',
    subtitle:
      'Tem um projeto em mente? Vamos conversar! Estou disponível para freelances e oportunidades.',
    namePlaceholder: 'Seu nome',
    emailPlaceholder: 'Seu e-mail',
    messagePlaceholder: 'Sua mensagem',
    send: 'Enviar Mensagem',
  },
  footer: {
    rights: 'Todos os direitos reservados.',
    madeWith: 'Feito com',
  },
};

export const en: Translation = {
  nav: {
    about: 'About',
    projects: 'Projects',
    technologies: 'Technologies',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Luís Felipe',
    role: 'Front-end Developer',
    subtitle:
      'Passionate about creating elegant and functional digital experiences. I turn ideas into clean, scalable code.',
    cta: 'View Projects',
    ctaSecondary: 'Talk to Me',
  },
  about: {
    title: 'About Me',
    paragraphs: [
      "I am a developer focused on building modern, efficient, and well-structured digital solutions. I work with TypeScript, React, and Vite to create high-performance, scalable interfaces centered on user experience. I value clean code, solid architecture, and best practices that ensure maintainability and sustainable project growth.",
      'I have a strong interest in digital transformation, process optimization, and developing applications that generate real impact. I continuously seek technical improvement by applying current industry standards with close attention to quality, performance, and usability.',
      "I am committed to continuous learning, team collaboration, and delivering solutions that connect technology, strategy, and measurable results.",
    ],
  },
  projects: {
    title: 'Projects',
    items: [
      {
        title: 'E-Commerce Platform',
        description:
          'Full-featured e-commerce platform with shopping cart, authentication and admin panel.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        liveLabel: 'Live Demo',
        codeLabel: 'Code',
      },
      {
        title: 'Task Manager App',
        description:
          'Task management application with drag-and-drop, filters and real-time collaboration.',
        tags: ['TypeScript', 'Next.js', 'Prisma', 'Socket.io'],
        liveLabel: 'Live Demo',
        codeLabel: 'Code',
      },
      {
        title: 'Weather Dashboard',
        description:
          'Weather dashboard with real-time data, interactive charts and 7-day forecast.',
        tags: ['React', 'D3.js', 'OpenWeather API', 'TailwindCSS'],
        liveLabel: 'Live Demo',
        codeLabel: 'Code',
      },
    ],
  },
  technologies: {
    title: 'Technologies',
    subtitle: 'Tools and technologies I use every day',
  },
  contact: {
    title: 'Contact',
    subtitle:
      "Have a project in mind? Let's talk! I'm available for freelance work and new opportunities.",
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    messagePlaceholder: 'Your message',
    send: 'Send Message',
  },
  footer: {
    rights: 'All rights reserved.',
    madeWith: 'Made with',
  },
};
