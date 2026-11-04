import { useSearchParams } from 'react-router-dom';
import ContactIntro from './ContactIntro/ContactIntro';
import ContactChannels from './ContactChannels/ContactChannels';
import ContactMap from './ContactMap/ContactMap';
import ContactForm from './ContactForm/ContactForm';
import AddressCard from './AddressCard/AddressCard';
import './ContactPage.css';

/**
 * Página "Entre em contato" (pública).
 *  - Coluna esquerda: ContactIntro + ContactChannels + ContactMap
 *  - Coluna direita:  ContactForm + AddressCard
 * Se a URL tiver ?servico=Freios, a mensagem do formulário já vem preenchida.
 */
export default function ContactPage() {
  const [params] = useSearchParams();
  const service = params.get('servico');
  const initialMessage = service ? `Olá! Gostaria de um orçamento para: ${service}.` : '';

  return (
    <section className="contact">
      <div className="contact__left">
        <ContactIntro />
        <ContactChannels />
        <ContactMap />
      </div>
      <div className="contact__right">
        {/* key: recria o formulário se o serviço da URL mudar */}
        <ContactForm key={initialMessage} initialMessage={initialMessage} />
        <AddressCard />
      </div>
    </section>
  );
}
