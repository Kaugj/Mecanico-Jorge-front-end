import { MessageCircle, Phone, Mail, Instagram } from 'lucide-react';
import Button from '@/shared/components/Button/Button';
import ContactInfoItem from './ContactInfoItem';
import { CONTACT, WHATSAPP_DISPLAY } from '@/shared/data/site';
import { getWhatsAppLink } from '@/shared/utils/whatsapp';
import './ContactChannels.css';

/**
 * Lista dos canais de atendimento: WhatsApp (com botão), telefone, e-mail e Instagram.
 * Cada linha é um ContactInfoItem (mesma pasta).
 */
export default function ContactChannels() {
  return (
    <ul className="contact-channels">
      <ContactInfoItem
        icon={MessageCircle} tone="green" label="WhatsApp" value={WHATSAPP_DISPLAY}
        action={<Button href={getWhatsAppLink('Olá! Vim pelo site.')} variant="whatsapp">Chamar no whatsapp</Button>}
      />
      <ContactInfoItem icon={Phone} label="Telefone" value={CONTACT.phone} />
      <ContactInfoItem icon={Mail} label="E-mail" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
      <ContactInfoItem icon={Instagram} label="Instagram" value={CONTACT.instagram} href={CONTACT.instagramUrl} />
    </ul>
  );
}
