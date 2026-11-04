import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

/**
 * Grade de produtos. Se a lista estiver vazia (filtros sem resultado),
 * mostra uma mensagem orientando o usuário.
 * @param {Array} products - Produtos já filtrados.
 */
export default function ProductList({ products }) {
  if (products.length === 0) {
    return <p className="product-list__empty">Nenhum produto encontrado. Limpe os filtros ou fale com a gente pelo WhatsApp.</p>;
  }
  return (
    <div className="card-grid">
      {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  );
}
