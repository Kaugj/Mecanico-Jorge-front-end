import { Link } from 'react-router-dom';
import logo from '@/shared/assets/logo.png';
import './Logo.css';

/**
 * Logotipo clicável que leva para a página inicial.
 */
export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Mecânico Jorge Auto Peças — ir para o início">
      <img src={logo} alt="Mecânico Jorge Auto Peças" />
    </Link>
  );
}
