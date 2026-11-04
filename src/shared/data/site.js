/**
 * Dados fixos do negócio (contatos, navegação).
 * Centralizados aqui para trocar em um único lugar.
 */

// Número do WhatsApp no formato internacional, só dígitos.
// ATENÇÃO: confirme se o número real tem o 9 extra (ex.: 55 35 9 9804-8483).
export const WHATSAPP_NUMBER = '553598048483';
export const WHATSAPP_DISPLAY = '+55 35 9804-8483';

export const CONTACT = {
  phone: '35********',               // TODO: telefone fixo real
  email: 'mecanicojorge01@outlook.com',
  instagram: '@mecanico_jorge.pa',
  instagramUrl: 'https://www.instagram.com/mecanico_jorge.pa',
  address: 'Av. Dr. Artur Ribeiro Guimarães, 113 - Jardim Noronha,',
  // Cidade usada só para o mapa. O PDF indica "Pouso…" — CONFIRME a cidade.
  mapQuery: 'Av. Dr. Artur Ribeiro Guimarães, 113, Jardim Noronha, Pouso Alegre, MG',
};

// Itens do menu principal (ordem igual ao design)
export const NAV_LINKS = [
  { to: '/', label: 'Início', end: true },
  { to: '/sobre', label: 'Sobre' },
  { to: '/produtos', label: 'Produtos' },
  { to: '/servicos', label: 'Serviços' },
];
