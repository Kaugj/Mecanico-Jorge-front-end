import { CONTACT, WHATSAPP_DISPLAY } from '@/shared/data/site';
import { getWhatsAppLink } from '@/shared/utils/whatsapp';
import './Footer.css';

/**
 * Rodapé do site.
 * @param {'social'|'copyright'} variant
 *  - social: slogan + links de WhatsApp, Telefone e Instagram.
 *  - copyright: apenas o texto de direitos reservados (tela de login).
 */
export default function Footer({ variant = 'social' }) {
  if (variant === 'copyright') {
    return (
      <footer className="footer footer--copyright">
        {/* O ano é calculado automaticamente para não ficar desatualizado */}
        <p>{new Date().getFullYear()} Mecânico Jorge. Todos os direitos reservados.</p>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <p>Mecânico Jorge • Manutenção automotiva e autopeças</p>
      <p className="footer__links">
        <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" title={WHATSAPP_DISPLAY}>WhatsApp</a>
        <span aria-hidden="true">•</span>
        <a href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}>Telefone</a>
        <span aria-hidden="true">•</span>
        <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
      </p>
    </footer>
  );
}
