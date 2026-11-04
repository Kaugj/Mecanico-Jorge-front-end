import './ClientSection.css';

/**
 * Cartão genérico de uma seção da área do cliente.
 * @param {React.ComponentType} icon - Ícone do lucide-react.
 * @param {string} title - Título da seção.
 * @param {string} [emptyText] - Texto exibido quando não há dados.
 * @param {React.ReactNode} children - Conteúdo/ações da seção.
 */
export default function ClientSection({ icon: Icon, title, emptyText, children }) {
  return (
    <article className="client-section">
      <header>
        <span className="client-section__icon"><Icon size={22} aria-hidden="true" /></span>
        <h2>{title}</h2>
      </header>
      {emptyText && <p className="client-section__empty">{emptyText}</p>}
      <div className="client-section__body">{children}</div>
    </article>
  );
}
