import filtroOleo from './images/filtro-oleo.jpg';
import filtroAr from './images/filtro-ar.jpg';
import pastilhaFreio from './images/pastilha-freio.jpg';
import oleo from './images/oleo.jpg';
import amortecedor from './images/amortecedor.jpg';
import bateria from './images/bateria.jpg';

/**
 * Catálogo de produtos (dados de exemplo).
 * Quando houver back-end, troque este arquivo por uma chamada de API
 * (o hook useProductFilter continua funcionando igual).
 * TODO: marcas "A definir" e descrições são provisórias.
 */
export const PRODUCTS = [
  { id: 1, name: 'Filtro de óleo', brand: 'Wega', category: 'Filtros', description: 'Filtro de óleo para motores.', image: filtroOleo },
  { id: 2, name: 'Filtro de ar', brand: 'Tecfil', category: 'Filtros', description: 'Filtro de ar do motor.', image: filtroAr },
  { id: 3, name: 'Pastilha de freio', brand: 'A definir', category: 'Freios', description: 'Jogo de pastilhas de freio.', image: pastilhaFreio },
  { id: 4, name: 'Óleo', brand: 'Gulf', category: 'Lubrificantes', description: 'Óleo lubrificante sintético.', image: oleo },
  { id: 5, name: 'Amortecedor', brand: 'A definir', category: 'Suspensão', description: 'Amortecedor para suspensão.', image: amortecedor },
  { id: 6, name: 'Bateria', brand: 'Moura', category: 'Elétrica', description: 'Bateria automotiva.', image: bateria },
];
