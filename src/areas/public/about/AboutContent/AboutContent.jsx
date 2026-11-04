import Button from '@/shared/components/Button/Button';
import ChecklistItem from './ChecklistItem';
import './AboutContent.css';

// Valores da oficina (título + descrição curta)
const VALUES = [
  { title: 'Qualidade', text: 'Serviço cuidadoso' },
  { title: 'Confiança', text: 'Atendimento próximo' },
  { title: 'Praticidade', text: 'Produtos e serviços' },
];

/**
 * Coluna de texto do "Sobre": título, parágrafo, lista de valores
 * (ChecklistItem, na mesma pasta) e botão de contato.
 */
export default function AboutContent() {
  return (
    <div className="about-content">
      <h2>Experiência e atendimento próximo</h2>
      <p>A Mecânico Jorge oferece serviços de manutenção automotiva e venda de autopeças, com foco em qualidade, confiança e atendimento.</p>
      <ul className="about-content__values">
        {VALUES.map((value) => <ChecklistItem key={value.title} {...value} />)}
      </ul>
      <Button to="/contato">Conheça a oficina</Button>
    </div>
  );
}
