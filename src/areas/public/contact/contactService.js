import { API_URL, postJson } from '@/shared/services/api';

/**
 * Envia a mensagem do formulário de contato.
 * - Com VITE_API_URL: faz POST em /contact.
 * - Sem API: simula o envio (útil durante o desenvolvimento do front).
 * @param {{name: string, phone: string, message: string}} payload
 * @returns {Promise<void>}
 */
export async function sendContactMessage(payload) {
  if (API_URL) {
    await postJson('/contact', payload);
    return;
  }
  await new Promise((resolve) => setTimeout(resolve, 800));
  console.info('[contato simulado]', payload);
}
