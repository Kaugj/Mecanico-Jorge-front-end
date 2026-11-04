/**
 * Cliente HTTP mínimo. Lê a URL base de VITE_API_URL (.env).
 * Se a variável não existir, API_URL fica vazia e os serviços
 * decidem como se comportar (simular ou avisar).
 */
export const API_URL = import.meta.env.VITE_API_URL || '';

/**
 * Faz um POST JSON para a API.
 * @param {string} path - Caminho, ex.: '/contact'.
 * @param {object} body - Dados a enviar.
 * @returns {Promise<object>} Resposta JSON.
 * @throws {Error} Se a resposta não for 2xx.
 */
export async function postJson(path, body) {
  const response = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error('Não foi possível concluir a solicitação.');
  return response.json();
}
