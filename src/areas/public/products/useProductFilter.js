import { useMemo, useState } from 'react';
import { normalizeText } from '@/shared/utils/formatters';

/**
 * Hook que controla busca + filtros (marca e categoria) da lista de produtos.
 * @param {Array} products - Lista completa de produtos.
 * @returns {object} Estados, setters, opções dos selects e lista filtrada.
 */
export function useProductFilter(products) {
  const [search, setSearch] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');

  // Opções únicas dos selects, geradas a partir dos próprios produtos
  const brands = useMemo(() => [...new Set(products.map((p) => p.brand))].sort(), [products]);
  const categories = useMemo(() => [...new Set(products.map((p) => p.category))].sort(), [products]);

  // Lista filtrada: recalculada só quando algum filtro (ou a lista) muda
  const filtered = useMemo(() => {
    const term = normalizeText(search.trim());
    return products.filter((p) => {
      const matchesText = !term || normalizeText(`${p.name} ${p.description} ${p.brand}`).includes(term);
      const matchesBrand = !brand || p.brand === brand;
      const matchesCategory = !category || p.category === category;
      return matchesText && matchesBrand && matchesCategory;
    });
  }, [products, search, brand, category]);

  return { search, setSearch, brand, setBrand, category, setCategory, brands, categories, filtered };
}
