import { API_URL, postJson } from '@/shared/services/api';

/**
 * Autentica o usuário com e-mail e senha (POST /auth/login).
 * Sem back-end configurado, lança um erro explicando o motivo.
 * @param {{email: string, password: string}} credentials
 * @returns {Promise<object>} Dados da sessão devolvidos pela API.
 */
export async function login(credentials) {
  if (!API_URL) {
    throw new Error('Login indisponível: o back-end ainda não foi conectado (VITE_API_URL).');
  }
  return postJson('/auth/login', credentials);
}
