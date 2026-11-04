import PageTitle from '@/shared/components/PageTitle/PageTitle';
import ProductFilters from './ProductFilters/ProductFilters';
import ProductList from './ProductList/ProductList';
import { PRODUCTS } from './products.data';
import { useProductFilter } from './useProductFilter';
import './ProductsPage.css';

/**
 * Página "Produtos e autopeças" (pública).
 * Une: título + ProductFilters (controles) + ProductList (resultado).
 * O estado de busca/filtros fica no hook useProductFilter (mesma pasta).
 */
export default function ProductsPage() {
  const { filtered, brands, categories, ...filters } = useProductFilter(PRODUCTS);

  return (
    <div className="products">
      <section className="container products__inner">
        <PageTitle tone="light" title="Produtos e autopeças" subtitle="Encontre peças e produtos para o seu veículo." />
        <ProductFilters
          search={filters.search} onSearch={filters.setSearch}
          brand={filters.brand} onBrand={filters.setBrand}
          category={filters.category} onCategory={filters.setCategory}
          brands={brands} categories={categories}
        />
        <ProductList products={filtered} />
      </section>
    </div>
  );
}
