import { MapPin } from 'lucide-react';
import Button from '@/shared/components/Button/Button';
import { CONTACT } from '@/shared/data/site';
import './AddressCard.css';

/**
 * Card "Nosso endereço" com botão que abre o local no Google Maps.
 */
export default function AddressCard() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.mapQuery)}`;
  return (
    <section className="address-card" aria-labelledby="address-title">
      <MapPin size={34} className="address-card__icon" aria-hidden="true" />
      <div>
        <h2 id="address-title">Nosso endereço</h2>
        <p>{CONTACT.address}</p>
        <Button href={mapsUrl} variant="ghost" className="address-card__btn">Ver no mapa</Button>
      </div>
    </section>
  );
}
