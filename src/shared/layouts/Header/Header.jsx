import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, ShoppingCart, MessageCircle, Menu, X } from 'lucide-react';
import Logo from '@/shared/components/Logo/Logo';
import Button from '@/shared/components/Button/Button';
import { NAV_LINKS } from '@/shared/data/site';
import { getWhatsAppLink } from '@/shared/utils/whatsapp';
import './Header.css';

/**
 * Cabeçalho do site.
 * @param {'default'|'account'} variant
 *  - default: mostra o botão vermelho CONTATO à direita.
 *  - account: mostra ícones de busca, carrinho e WhatsApp (tela de login).
 *
 * Em telas pequenas o menu vira "hambúrguer" (estado `open`).
 */
export default function Header({ variant = 'default' }) {
  const [open, setOpen] = useState(false);

  // Alterna o menu mobile (abre/fecha)
  const toggleMenu = () => setOpen((current) => !current);
  // Fecha o menu ao clicar em um link
  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="header__inner">
        <Logo />

        <nav className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={closeMenu}
              className={({ isActive }) => `header__link ${isActive ? 'is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          {variant === 'default' ? (
            <Button to="/contato" className="header__cta">Contato</Button>
          ) : (
            <>
              {/* TODO: ligar a busca global e o carrinho quando existirem */}
              <button className="header__icon" aria-label="Buscar"><Search size={26} /></button>
              <Link to="/produtos" className="header__icon" aria-label="Carrinho"><ShoppingCart size={26} /></Link>
              <a className="header__icon header__icon--whatsapp" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
                <MessageCircle size={26} />
              </a>
            </>
          )}
          <button className="header__burger" onClick={toggleMenu} aria-label="Abrir menu" aria-expanded={open}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}
