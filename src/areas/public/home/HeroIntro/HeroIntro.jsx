import Button from '@/shared/components/Button/Button';
import './HeroIntro.css';

/**
 * Seção "apresentação" da home: nome da oficina, slogan, descrição
 * e os dois botões de ação (ver serviços / login).
 */
export default function HeroIntro() {
  return (
    <div className="hero-intro">
      <h1>
        <span className="hero-intro__name">Mecânico Jorge</span>
        <span className="hero-intro__sub">Auto Peças</span>
      </h1>
      <p className="hero-intro__tagline">Manutenção automotiva<br />com confiança e qualidade.</p>
      <p className="hero-intro__desc">Serviços mecânicos e produtos para cuidar do seu veículo.</p>

      <div className="hero-intro__actions">
        <Button to="/servicos">Conheça nossos serviços</Button>
        <Button to="/login" variant="outline">Login</Button>
      </div>
    </div>
  );
}
