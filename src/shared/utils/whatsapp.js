import { WHATSAPP_NUMBER } from '../data/site';

/**
 * Monta o link de conversa do WhatsApp (wa.me) com texto pré-preenchido.
 * @param {string} message - Mensagem inicial (opcional).
 * @returns {string} URL pronta para usar em <a href>.
 */
export function getWhatsAppLink(message = '') {
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${WHATSAPP_NUMBER}${text}`;
}
