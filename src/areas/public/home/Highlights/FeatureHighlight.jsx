import './FeatureHighlight.css';

/**
 * Destaque curto com ícone vermelho (faixa de diferenciais da página inicial).
 * @param {React.ComponentType} icon - Ícone (componente do lucide-react).
 * @param {string} label - Texto abaixo do ícone.
 */
export default function FeatureHighlight({ icon: Icon, label }) {
  return (
    <li className="feature">
      <Icon size={36} strokeWidth={1.6} aria-hidden="true" />
      <span>{label}</span>
    </li>
  );
}
