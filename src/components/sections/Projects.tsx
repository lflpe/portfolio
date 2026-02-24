import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Projects() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="projects"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: '#0F172A' }}
      ref={ref as any}
    >
      {/* Linha de acento crescente */}
      <div
        className={`absolute top-0 left-0 h-[2px] transition-all duration-700 ${isVisible ? 'w-full' : 'w-0'}`}
        style={{ backgroundColor: 'rgba(29,78,216,0.3)' }}
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className={`mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#1D4ED8' }}>
            Selected work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#F1F5F9' }}>
            {t.projects.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.projects.items.map((project, index) => (
            <article
              key={index}
              className={`group flex flex-col rounded-xl p-6 cursor-default
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                backgroundColor: 'rgba(241,245,249,0.05)',
                border: '1px solid rgba(241,245,249,0.09)',
              }}
            >
              {/* Número + linha que cresce no hover */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-xs font-mono"
                  style={{ color: 'rgba(230,213,195,0.3)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div
                  className="h-px flex-1 transition-all duration-500 group-hover:bg-[#1D4ED8]"
                  style={{ backgroundColor: 'rgba(241,245,249,0.07)' }}
                />
              </div>

              <h3
                className="text-base font-semibold mb-3 transition-colors duration-200 group-hover:text-[#E6D5C3]"
                style={{ color: '#F1F5F9' }}
              >
                {project.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-5 flex-1"
                style={{ color: 'rgba(241,245,249,0.5)' }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded"
                    style={{
                      backgroundColor: 'rgba(37,99,235,0.15)',
                      color: 'rgba(241,245,249,0.55)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div
                className="flex items-center gap-4 pt-4"
                style={{ borderTop: '1px solid rgba(241,245,249,0.07)' }}
              >
                <a
                  href="#"
                  className="text-xs font-semibold transition-colors duration-150 hover:text-[#E6D5C3]"
                  style={{ color: '#F1F5F9' }}
                >
                  {project.liveLabel} →
                </a>
                <a
                  href="#"
                  className="text-xs transition-colors duration-150 hover:text-[#E6D5C3]"
                  style={{ color: 'rgba(241,245,249,0.35)' }}
                >
                  {project.codeLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
