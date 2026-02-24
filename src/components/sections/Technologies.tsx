import { useLanguage } from '../../contexts/LanguageContext';

const techStack = [
  { name: 'TypeScript', icon: '🔷', category: 'Language' },
  { name: 'JavaScript', icon: '🟨', category: 'Language' },
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Next.js', icon: '▲', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
  { name: 'Git', icon: '📦', category: 'Tools' },
  { name: 'Vite', icon: '⚡', category: 'Tools' },
  { name: 'Prisma', icon: '🔺', category: 'Backend' },
  { name: 'AWS', icon: '☁️', category: 'DevOps' },
];

export default function Technologies() {
  const { t } = useLanguage();

  return (
    <section id="technologies" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.technologies.title}
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">{t.technologies.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-2 p-5 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-indigo-500/50 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <span className="text-3xl" role="img" aria-label={tech.name}>
                {tech.icon}
              </span>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="text-xs text-gray-600 group-hover:text-indigo-400 transition-colors">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
