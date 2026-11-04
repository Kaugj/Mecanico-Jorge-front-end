import heroPhoto from '../images/jorge-hero.jpg';
import './HeroPhoto.css';

/**
 * Foto circular do Jorge com o anel vermelho do design.
 */
export default function HeroPhoto() {
  return (
    <div className="hero-photo">
      <img src={heroPhoto} alt="Jorge, mecânico, em sua oficina" />
    </div>
  );
}
