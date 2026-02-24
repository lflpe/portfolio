import { useLanguage } from '../../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10"
      style={{
        backgroundColor: '#0F172A',
        borderTop: '1px solid rgba(229,231,235,0.07)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'rgba(229,231,235,0.3)' }}>
            © {year} — {t.footer.rights}
          </p>

          <div className="flex items-center gap-3 text-xs" style={{ color: 'rgba(229,231,235,0.3)' }}>
            <span>{t.footer.madeWith}</span>
            <span style={{ color: '#E5E7EB' }}>React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
