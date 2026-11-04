import AboutBanner from './AboutBanner/AboutBanner';
import AboutPhoto from './AboutPhoto/AboutPhoto';
import AboutContent from './AboutContent/AboutContent';
import './AboutPage.css';

/**
 * Página "Sobre" (pública): faixa de título + foto da oficina + texto e valores.
 */
export default function AboutPage() {
  return (
    <>
      <AboutBanner />
      <section className="about-body">
        <div className="container about-body__grid">
          <AboutPhoto />
          <AboutContent />
        </div>
      </section>
    </>
  );
}
