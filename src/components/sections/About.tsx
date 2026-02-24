import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import FotoFelipe from "../../assets/IMG_7790.png";


const stats = [
  { value: '4+', labelPt: 'Anos de Exp.', labelEn: 'Years of Exp.' },
  { value: '20+', labelPt: 'Projetos', labelEn: 'Projects' },
  { value: '10+', labelPt: 'Clientes', labelEn: 'Clients' },
];

export default function About() {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: '#F1F5F9' }}
      ref={ref as any}
    >
      {/* Faixa de acento horizontal no topo */}
      <div
        className={`absolute top-0 left-0 h-[2px] transition-all duration-700 ${isVisible ? 'w-full' : 'w-0'}`}
        style={{ backgroundColor: 'rgba(29,78,216,0.15)' }}
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ── Foto / Avatar ── */}
          <div className={`flex justify-center lg:justify-start ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative">
              {/* Frame da foto */}
              <div
                className="w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden relative"
                style={{ backgroundColor: '#E5E7EB' }}
              >
                <img
                  src={FotoFelipe}
                  alt="Foto de Luís Felipe"
                  className="w-full h-full object-cover"
                />
                {/* Iniciais sobrepostas no canto inferior esquerdo */}
                <div className="absolute bottom-4 bg-[#0F172A] p-5 rounded-full left-4">
                  <span
                    className="text-2xl font-bold tracking-wider"
                    style={{ color: '#F8FAFC', textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
                  >
                    LF
                  </span>
                </div>
              </div>

              {/* Borda deslocada */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl -z-10"
                style={{ border: '2px solid rgba(29,78,216,0.2)' }}
              />
            </div>
          </div>

          {/* ── Texto ── */}
          <div>
            <p
              className={`text-xs font-semibold tracking-[0.2em] uppercase mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ color: '#1D4ED8', animationDelay: '0.05s' }}
            >
              About me
            </p>

            <h2
              className={`text-3xl sm:text-4xl font-bold leading-tight mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ color: '#0F3057', animationDelay: '0.12s' }}
            >
              {t.about.title}
            </h2>

            <div className="space-y-4 mb-10">
              {t.about.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className={`text-base leading-[1.8] ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ color: 'rgba(15,48,87,0.7)', animationDelay: `${i * 0.1 + 0.2}s` }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Stats com linha animada */}
            <div
              className="grid grid-cols-3 gap-6 pt-8"
              style={{ borderTop: '1px solid rgba(15,48,87,0.1)' }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.value}
                  className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                  style={{ animationDelay: `${i * 0.12 + 0.35}s` }}
                >
                  <div
                    className="text-3xl font-bold mb-1 tabular-nums"
                    style={{ color: '#0F172A' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: 'rgba(15,23,42,0.4)' }}>
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
