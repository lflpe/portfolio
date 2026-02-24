export type Language = 'pt' | 'en';

export interface Translation {
  nav: {
    about: string;
    projects: string;
    technologies: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  projects: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      tags: string[];
      liveLabel: string;
      codeLabel: string;
    }>;
  };
  technologies: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
  };
  footer: {
    rights: string;
    madeWith: string;
  };
}
