import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#technologies', label: t.nav.technologies },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(15,23,42,0.97)' : 'transparent',
        borderBottom: isScrolled ? '1px solid rgba(229,231,235,0.07)' : 'none',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#hero"
            className="text-sm font-semibold tracking-[0.1em] transition-colors duration-150 hover:text-[#E5E7EB]"
            style={{ color: '#F8FAFC' }}
          >
            &lt;dev /&gt;
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-150 hover:text-[#F8FAFC] relative group"
                style={{ color: 'rgba(229,231,235,0.6)' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: '#2563EB' }}
                />
              </a>
            ))}

            <button
              onClick={toggleLanguage}
              className="text-xs font-semibold px-3 py-1.5 rounded-md transition-all duration-150 hover:-translate-y-0.5"
              aria-label="Toggle language"
              style={{
                color: 'rgba(229,231,235,0.65)',
                border: '1px solid rgba(229,231,235,0.15)',
              }}
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="text-xs font-semibold px-3 py-1.5 rounded-md"
              aria-label="Toggle language"
              style={{ color: 'rgba(229,231,235,0.65)', border: '1px solid rgba(229,231,235,0.15)' }}
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="p-1.5"
              aria-label="Toggle menu"
              style={{ color: 'rgba(229,231,235,0.65)' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 animate-fade-in-down" style={{ borderTop: '1px solid rgba(229,231,235,0.07)' }}>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-2 py-2.5 text-sm rounded transition-colors duration-150 hover:text-[#F8FAFC]"
                  style={{ color: 'rgba(229,231,235,0.6)' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
