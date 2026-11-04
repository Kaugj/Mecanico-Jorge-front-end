import './ContactInfoItem.css';

/**
 * Linha de informação de contato: quadrado colorido com ícone + rótulo + valor.
 * @param {React.ComponentType} icon - Ícone do lucide-react.
 * @param {string} label - Ex.: "E-mail".
 * @param {string} value - Ex.: o endereço de e-mail.
 * @param {string} [href] - Se informado, o valor vira link (mailto:, tel:, https:).
 * @param {'red'|'green'} [tone] - Cor do quadrado do ícone.
 * @param {React.ReactNode} [action] - Elemento extra à direita (ex.: botão do WhatsApp).
 */
export default function ContactInfoItem({ icon: Icon, label, value, href, tone = 'red', action }) {
  return (
    <li className="info-item">
      <span className={`info-item__icon info-item__icon--${tone}`}><Icon size={26} aria-hidden="true" /></span>
      <div className="info-item__text">
        <span className="info-item__label">{label}</span>
        {href ? <a href={href}>{value}</a> : <span>{value}</span>}
      </div>
      {action}
    </li>
  );
}
