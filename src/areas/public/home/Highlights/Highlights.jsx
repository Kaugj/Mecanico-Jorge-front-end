import { Wrench, Settings, Clock, ThumbsUp } from 'lucide-react';
import FeatureHighlight from './FeatureHighlight';
import './Highlights.css';

// Diferenciais da oficina (ícone + texto)
const HIGHLIGHTS = [
  { icon: Wrench, label: 'Serviços Especializados' },
  { icon: Settings, label: 'Peças de qualidade' },
  { icon: Clock, label: 'Agilidade no atendimento' },
  { icon: ThumbsUp, label: 'Melhor preço da cidade' },
];

/**
 * Faixa com os 4 diferenciais abaixo dos botões da home.
 * Cada item é um FeatureHighlight (mora na mesma pasta).
 */
export default function Highlights() {
  return (
    <ul className="highlights">
      {HIGHLIGHTS.map((item) => <FeatureHighlight key={item.label} {...item} />)}
    </ul>
  );
}
