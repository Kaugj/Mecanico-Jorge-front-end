import HeroIntro from './HeroIntro/HeroIntro';
import HeroPhoto from './HeroPhoto/HeroPhoto';
import Highlights from './Highlights/Highlights';
import './HomePage.css';

/**
 * Página inicial (pública). Apenas MONTA as seções:
 *  - coluna esquerda: HeroIntro (títulos e botões) + Highlights (diferenciais)
 *  - coluna direita: HeroPhoto (foto circular do Jorge)
 */
export default function HomePage() {
  return (
    <section className="home">
      <div className="home__text">
        <HeroIntro />
        <Highlights />
      </div>
      <HeroPhoto />
    </section>
  );
}
