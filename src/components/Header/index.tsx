import { useState } from 'react'
import Logo from '../Logo'
import { Header as HeaderContainer, NavItem, HamburgerBtn, MobileNav, DesktopNav } from './styles'

const NAV_LINKS = [
  { label: 'Início', to: '/' },
  { label: 'Financiamento', to: '/' },
  { label: 'Fipe', to: '/' },
  { label: 'Lojas', to: '/lojas' },
  { label: 'Pós venda', to: '/' },
  { label: 'Catálogo', to: '/catalogo' },
  { label: 'Agende uma visita', to: '/agende-sua-visita', principal: true },
]

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <HeaderContainer>
      <div className="header">
        <Logo />

        <div>
          <a href="https://www.instagram.com/lionsseminovos/" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.facebook.com/lionsseminovos" target="_blank" rel="noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://wa.me/558004540505?text=Olá, vi essa oferta no Site e gostaria de saber mais informações."
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-whatsapp"></i>
          </a>

          <HamburgerBtn
            onClick={() => setMenuAberto(p => !p)}
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          >
            <i className={`bi bi-${menuAberto ? 'x-lg' : 'list'}`}></i>
          </HamburgerBtn>
        </div>
      </div>

      <DesktopNav>
        {NAV_LINKS.map(link => (
          <NavItem key={link.label} to={link.to} principal={link.principal}>
            {link.label}
          </NavItem>
        ))}
      </DesktopNav>

      {menuAberto && <MobileNav open={menuAberto}>
        {NAV_LINKS.map(link => (
          <NavItem
            key={link.label}
            to={link.to}
            principal={link.principal}
            onClick={() => setMenuAberto(false)}
          >
            {link.label}
          </NavItem>
        ))}
      </MobileNav>}
    </HeaderContainer>
  )
}

export default Header
