import workshop from '../images/oficina.jpg';
import './AboutPhoto.css';

/**
 * Foto da oficina com a barra vermelha na lateral direita.
 */
export default function AboutPhoto() {
  return (
    <div className="about-photo">
      <img src={workshop} alt="Fachada e interior da oficina Mecânico Jorge" />
    </div>
  );
}
