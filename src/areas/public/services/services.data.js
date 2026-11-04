import { Wrench, Droplets, CircleDot, ScanSearch, Zap, ArrowDownUp } from 'lucide-react';

/**
 * Lista de serviços exibidos na página "Serviços".
 * Para adicionar um serviço novo, basta incluir um objeto aqui:
 * o ServiceCard e a página renderizam automaticamente.
 */
export const SERVICES = [
  { id: 'manutencao', title: 'Manutenção', description: 'Revisões e manutenção preventiva.', icon: Wrench },
  { id: 'troca-de-oleo', title: 'Troca de óleo', description: 'Óleo e filtros.', icon: Droplets },
  { id: 'freios', title: 'Freios', description: 'Verificação e manutenção.', icon: CircleDot },
  { id: 'diagnostico', title: 'Diagnóstico', description: 'Identificação de problemas.', icon: ScanSearch },
  { id: 'eletrica', title: 'Elétrica', description: 'Sistema elétrico automotivo.', icon: Zap },
  { id: 'suspensao', title: 'Suspensão', description: 'Amortecedores e componentes.', icon: ArrowDownUp },
];
