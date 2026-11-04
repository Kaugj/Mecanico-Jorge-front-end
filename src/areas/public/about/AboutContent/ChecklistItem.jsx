import { Check } from 'lucide-react';
import './ChecklistItem.css';

/**
 * Linha da lista de valores da página "Sobre": quadrado vermelho com ✓,
 * título em vermelho e descrição curta.
 * @param {string} title - Ex.: "QUALIDADE".
 * @param {string} text - Ex.: "Serviço cuidadoso".
 */
export default function ChecklistItem({ title, text }) {
  return (
    <li className="check-item">
      <span className="check-item__box"><Check size={22} aria-hidden="true" /></span>
      <strong className="check-item__title">{title}</strong>
      <span className="check-item__text">{text}</span>
    </li>
  );
}
