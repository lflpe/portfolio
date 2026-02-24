import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Technologies from './components/sections/Technologies';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Technologies />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
