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
    name: 'Seu Nome',
    role: 'Desenvolvedor Full Stack',
    subtitle:
      'Apaixonado por criar experiências digitais elegantes e funcionais. Transformo ideias em código limpo e escalável.',
    cta: 'Ver Projetos',
    ctaSecondary: 'Falar Comigo',
  },
  about: {
    title: 'Sobre Mim',
    paragraphs: [
      'Sou um desenvolvedor apaixonado por tecnologia e inovação. Com experiência em desenvolvimento web moderno, busco sempre as melhores soluções para os desafios que enfrento.',
      'Meu foco está em criar aplicações performáticas, acessíveis e com ótima experiência de usuário. Trabalho com as tecnologias mais modernas do ecossistema JavaScript/TypeScript.',
      'Quando não estou codando, gosto de explorar novas tecnologias, contribuir para projetos open source e compartilhar conhecimento com a comunidade.',
    ],
  },
  projects: {
    title: 'Projetos',
    items: [
      {
        title: 'E-Commerce Platform',
        description:
          'Plataforma completa de e-commerce com carrinho de compras, autenticação e painel administrativo.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        liveLabel: 'Ver Demo',
        codeLabel: 'Código',
      },
      {
        title: 'Task Manager App',
        description:
          'Aplicativo de gerenciamento de tarefas com drag-and-drop, filtros e colaboração em tempo real.',
        tags: ['TypeScript', 'Next.js', 'Prisma', 'Socket.io'],
        liveLabel: 'Ver Demo',
        codeLabel: 'Código',
      },
      {
        title: 'Weather Dashboard',
        description:
          'Dashboard de clima com dados em tempo real, gráficos interativos e previsão para 7 dias.',
        tags: ['React', 'D3.js', 'OpenWeather API', 'TailwindCSS'],
        liveLabel: 'Ver Demo',
        codeLabel: 'Código',
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
    name: 'Your Name',
    role: 'Full Stack Developer',
    subtitle:
      'Passionate about creating elegant and functional digital experiences. I turn ideas into clean, scalable code.',
    cta: 'View Projects',
    ctaSecondary: 'Talk to Me',
  },
  about: {
    title: 'About Me',
    paragraphs: [
      "I'm a developer passionate about technology and innovation. With experience in modern web development, I always seek the best solutions to the challenges I face.",
      'My focus is on building performant, accessible applications with great user experience. I work with the most modern technologies in the JavaScript/TypeScript ecosystem.',
      "When I'm not coding, I enjoy exploring new technologies, contributing to open source projects and sharing knowledge with the community.",
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
