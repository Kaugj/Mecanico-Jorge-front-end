import PageTitle from '@/shared/components/PageTitle/PageTitle';
import ServiceCard from './ServiceCard/ServiceCard';
import { SERVICES } from './services.data';
import './ServicesPage.css';

/**
 * Página "Serviços" (pública): título + grade com um ServiceCard por serviço.
 * Os serviços vêm de services.data.js (mesma pasta).
 */
export default function ServicesPage() {
  return (
    <section className="services container">
      <PageTitle title="Nossos serviços" subtitle="Soluções para manter seu veículo em boas condições." />
      <div className="card-grid services__grid">
        {SERVICES.map((service) => <ServiceCard key={service.id} service={service} />)}
      </div>
    </section>
  );
}
