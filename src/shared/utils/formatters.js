/**
 * Aplica máscara de telefone brasileiro: (35) 99999-9999 ou (35) 9999-9999.
 * @param {string} value - Texto digitado pelo usuário.
 * @returns {string} Texto formatado (só dígitos são mantidos antes de formatar).
 */
export function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

/**
 * Remove acentos e coloca em minúsculas — usado na busca de produtos
 * para que "oleo" encontre "Óleo".
 * @param {string} text
 * @returns {string}
 */
export function normalizeText(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

/**
 * Valida e-mail de forma simples (formato texto@texto.texto).
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
