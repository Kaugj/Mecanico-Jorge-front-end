import { CONTACT } from '@/shared/data/site';
import './ContactMap.css';

/**
 * Mapa do Google incorporado (iframe) com o endereço da oficina.
 * O endereço de busca vem de CONTACT.mapQuery (confirme a cidade em site.js).
 */
export default function ContactMap() {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&output=embed`;
  return (
    <iframe className="contact-map" title="Localização da oficina no mapa" src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
  );
}
