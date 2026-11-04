import './ProductFilters.css';

/**
 * Barra de busca + selects de marca e categoria (componente "controlado":
 * quem guarda o estado é o hook useProductFilter, na página).
 * @param {object} props
 * @param {string} props.search / props.onSearch - Texto de busca e seu setter.
 * @param {string} props.brand / props.onBrand - Marca selecionada e seu setter.
 * @param {string} props.category / props.onCategory - Categoria selecionada e seu setter.
 * @param {string[]} props.brands / props.categories - Opções dos selects.
 */
export default function ProductFilters({ search, onSearch, brand, onBrand, category, onCategory, brands, categories }) {
  return (
    <form className="filters" role="search" onSubmit={(e) => e.preventDefault()}>
      <input
        type="search" className="filters__field filters__search" placeholder="Buscar produto..."
        value={search} onChange={(e) => onSearch(e.target.value)} aria-label="Buscar produto"
      />
      <select className="filters__field" value={brand} onChange={(e) => onBrand(e.target.value)} aria-label="Filtrar por marca">
        <option value="">Marca</option>
        {brands.map((b) => <option key={b} value={b}>{b}</option>)}
      </select>
      <select className="filters__field" value={category} onChange={(e) => onCategory(e.target.value)} aria-label="Filtrar por categoria">
        <option value="">Categoria</option>
        {categories.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
    </form>
  );
}
