import './PageTitle.css';

/**
 * Título de página com subtítulo (padrão das páginas internas).
 * @param {string} title - Texto grande em caixa alta.
 * @param {string} [subtitle] - Frase de apoio.
 * @param {'dark'|'light'} tone - dark: sobre fundo preto (título branco);
 *                                light: sobre fundo claro (título vermelho).
 */
export default function PageTitle({ title, subtitle, tone = 'dark' }) {
  return (
    <div className={`page-title page-title--${tone}`}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
