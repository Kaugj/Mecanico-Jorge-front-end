import Button from '@/shared/components/Button/Button';
import { getWhatsAppLink } from '@/shared/utils/whatsapp';
import './ProductCard.css';

/**
 * Card de um produto do catálogo.
 * "VER PRODUTO" abre o WhatsApp com a pergunta já escrita
 * (enquanto não existe página de detalhe/checkout).
 * @param {{name: string, brand: string, description: string, image: string}} product
 */
export default function ProductCard({ product }) {
  const { name, brand, description, image } = product;
  const link = getWhatsAppLink(`Olá! Tenho interesse no produto: ${name} (${brand}). Poderia me passar mais informações?`);

  return (
    <article className="product-card">
      <div className="product-card__media">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="product-card__body">
        <h3>{name}</h3>
        <p>{description}</p>
        <Button href={link} className="product-card__btn">Ver produto</Button>
      </div>
    </article>
  );
}
