import PageTitle from '@/shared/components/PageTitle/PageTitle';
import './AboutBanner.css';

/**
 * Faixa branca no topo da página "Sobre" com título vermelho.
 */
export default function AboutBanner() {
  return (
    <div className="about-banner">
      <div className="container">
        <PageTitle tone="light" title="Sobre o Mecânico Jorge" subtitle="Conheça nossa oficina e nosso jeito de atender." />
      </div>
    </div>
  );
}
