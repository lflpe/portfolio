import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const techStack = [
  { name: 'TypeScript', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Git', category: 'Tools' },
  { name: 'Vite', category: 'Tools' },
  { name: 'Prisma', category: 'Backend' },
  { name: 'AWS', category: 'DevOps' },
];

const categories = ['Language', 'Frontend', 'Backend', 'Database', 'DevOps', 'Tools'];

export default function Technologies() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="technologies"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: '#F8FAFC' }}
      ref={ref as any}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className={`mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#1D4ED8' }}>
            Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#0F3057' }}>
            {t.technologies.title}
          </h2>
        </div>

        <div className="space-y-0">
          {categories.map((cat, ci) => {
            const items = techStack.filter((tech) => tech.category === cat);
            return (
              <div
                key={cat}
                className={`grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-6 items-start py-5
                  ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{
                  animationDelay: `${ci * 0.08}s`,
                  borderTop: '1px solid rgba(15,48,87,0.09)',
                }}
              >
                {/* Label */}
                <span
                  className="text-xs font-medium pt-1.5"
                  style={{ color: 'rgba(15,48,87,0.38)' }}
                >
                  {cat}
                </span>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {items.map((tech, ti) => (
                    <span
                      key={tech.name}
                      className={`px-3 py-1.5 text-sm font-medium rounded
                        transition-all duration-200 cursor-default
                        hover:-translate-y-0.5 hover:shadow-sm
                        ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                      style={{
                        animationDelay: `${ci * 0.08 + ti * 0.04}s`,
                        backgroundColor: '#E5E7EB',
                        color: '#0F172A',
                      }}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
