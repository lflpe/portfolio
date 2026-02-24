import { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import FotoFelipe from "../../assets/IMG_7790.png";

/* ── Typing effect ──────────────────────────────────────── */
const roles = [
  'Front-end Developer',
  'UI / UX Enthusiast',
  'React Specialist',
];

function useTyping(words: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ── Componente ─────────────────────────────────────────── */
export default function Hero() {
  const { t } = useLanguage();
  const typedRole = useTyping(roles);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ backgroundColor: '#0F172A' }}
    >
      {/* Textura pontilhada sutil */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(229,231,235,0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Luz suave no canto superior direito */}
      <div
        className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Coluna texto ── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-10 animate-fade-in-down" style={{ animationDelay: '0s' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#2563EB' }} />
              <span className="text-xs font-medium tracking-[0.18em] uppercase" style={{ color: 'rgba(229,231,235,0.6)' }}>
                Available for work
              </span>
            </div>

            {/* Saudação */}
            <p className="text-sm mb-3 animate-fade-in-up" style={{ animationDelay: '0.1s', color: 'rgba(229,231,235,0.45)' }}>
              {t.hero.greeting}
            </p>

            {/* Nome */}
            <h1
              className="text-5xl sm:text-6xl font-bold leading-[1.05] tracking-tight mb-4 animate-fade-in-up"
              style={{ animationDelay: '0.18s', color: '#F8FAFC' }}
            >
              {t.hero.name}
            </h1>

            {/* Cargo com typing */}
            <div className="flex items-center gap-1 mb-7 animate-fade-in-up" style={{ animationDelay: '0.26s', minHeight: '2rem' }}>
              <span className="text-lg sm:text-xl font-medium" style={{ color: '#E5E7EB' }}>
                {typedRole}
              </span>
              <span className="inline-block w-[2px] h-5 ml-0.5 animate-cursor" style={{ backgroundColor: '#2563EB' }} />
            </div>

            {/* Divisor */}
            <div className="w-10 h-px mb-7 animate-slide-line" style={{ animationDelay: '0.35s', backgroundColor: '#2563EB' }} />

            {/* Descrição */}
            <p
              className="text-sm max-w-md mb-10 leading-[1.85] animate-fade-in-up"
              style={{ animationDelay: '0.42s', color: 'rgba(229,231,235,0.55)' }}
            >
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-start gap-3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="#projects"
                className="px-6 py-2.5 text-sm font-semibold rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95"
                style={{ backgroundColor: '#2563EB', color: '#F8FAFC' }}
              >
                {t.hero.cta}
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 text-sm font-medium rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(37,99,235,0.6)] active:scale-95"
                style={{ color: '#E5E7EB', border: '1px solid rgba(229,231,235,0.18)' }}
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* ── Coluna foto ── */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="relative animate-photo-float">
              {/* Frame da foto */}
              <div
                className="w-72 h-80 xl:w-80 xl:h-96 rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(229,231,235,0.1)', backgroundColor: 'rgba(248,250,252,0.04)' }}
              >
                <img src={FotoFelipe} alt="Foto de Luís Felipe" className="w-full h-full object-cover" />
              </div>

              {/* Borda deslocada */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl -z-10"
                style={{ border: '1px solid rgba(37,99,235,0.22)' }}
              />

              {/* Chip — experiência */}
              <div
                className="absolute -left-5 bottom-10 px-3 py-2 rounded-lg"
                style={{ backgroundColor: 'rgba(15,23,42,0.96)', border: '1px solid rgba(229,231,235,0.09)', backdropFilter: 'blur(8px)' }}
              >
                <p className="text-xs font-bold" style={{ color: '#F8FAFC' }}>4+ anos</p>
                <p className="text-[10px]" style={{ color: 'rgba(229,231,235,0.4)' }}>de experiência</p>
              </div>

              {/* Chip — projetos */}
              <div
                className="absolute -right-5 top-8 px-3 py-2 rounded-lg"
                style={{ backgroundColor: 'rgba(15,23,42,0.96)', border: '1px solid rgba(229,231,235,0.09)', backdropFilter: 'blur(8px)' }}
              >
                <p className="text-xs font-bold" style={{ color: '#F8FAFC' }}>20+</p>
                <p className="text-[10px]" style={{ color: 'rgba(229,231,235,0.4)' }}>projetos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint — abaixo do conteúdo, centralizado */}
        <div
          className="flex flex-col items-center gap-1.5 mt-24 animate-fade-in-up"
          style={{ animationDelay: '0.7s' }}
        >
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            style={{ color: '#ffffff' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
