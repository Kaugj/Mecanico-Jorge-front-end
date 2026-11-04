import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ServiceCard.css';

/**
 * Card de um serviço da oficina.
 * O link "Saiba mais" leva ao formulário de contato já com o serviço
 * escolhido (a página de contato lê o parâmetro ?servico=).
 * @param {{title: string, description: string, icon: React.ComponentType}} service
 */
export default function ServiceCard({ service }) {
  const { title, description, icon: Icon } = service;
  return (
    <article className="service-card">
      <span className="service-card__icon"><Icon size={24} aria-hidden="true" /></span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`/contato?servico=${encodeURIComponent(title)}`} className="service-card__link">
          Saiba mais <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
