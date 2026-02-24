import { useLanguage } from '../../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          © {year} — {t.footer.rights}
        </p>
        <p className="text-gray-400 text-sm flex items-center gap-1">
          {t.footer.madeWith}{' '}
          <span className="text-red-500 text-base" aria-label="love">
            ♥
          </span>{' '}
          React &amp; TypeScript
        </p>
      </div>
    </footer>
  );
}
