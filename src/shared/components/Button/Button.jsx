import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Botão reutilizável. Decide sozinho qual tag usar:
 *  - `to`   → <Link> (navegação interna)
 *  - `href` → <a> (link externo, abre em nova aba)
 *  - nenhum → <button>
 *
 * @param {'primary'|'outline'|'whatsapp'|'ghost'} variant - Estilo visual.
 * @param {string} [to] - Rota interna.
 * @param {string} [href] - URL externa.
 * @param {boolean} [block] - Ocupa 100% da largura.
 */
export default function Button({ variant = 'primary', to, href, block = false, className = '', children, ...rest }) {
  const classes = `btn btn--${variant} ${block ? 'btn--block' : ''} ${className}`.trim();

  if (to) return <Link to={to} className={classes} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
  return <button className={classes} {...rest}>{children}</button>;
}
