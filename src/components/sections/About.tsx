import { useLanguage } from '../../contexts/LanguageContext';

const stats = [
  { value: '3+', labelPt: 'Anos de Exp.', labelEn: 'Years of Exp.' },
  { value: '20+', labelPt: 'Projetos', labelEn: 'Projects' },
  { value: '10+', labelPt: 'Clientes', labelEn: 'Clients' },
];

export default function About() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image / Avatar placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-5xl font-bold text-white">
                  YN
                </div>
              </div>
              {/* Decorative blobs */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              {t.about.title}
            </h2>
            <div className="space-y-4 mb-10">
              {t.about.paragraphs.map((para, i) => (
                <p key={i} className="text-gray-400 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.value} className="text-center p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                  <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {language === 'pt' ? stat.labelPt : stat.labelEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
