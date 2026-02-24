import { useLanguage } from '../../contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.projects.title}
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project, index) => (
            <article
              key={index}
              className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Project number */}
              <span className="absolute top-4 right-4 text-4xl font-bold text-gray-800 group-hover:text-indigo-900/50 transition-colors select-none">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition-colors"
                  >
                    {project.liveLabel}
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600 px-4 py-2 rounded-lg transition-colors"
                  >
                    {project.codeLabel}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
