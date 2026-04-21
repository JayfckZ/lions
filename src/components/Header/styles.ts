import styled from 'styled-components'
import { NavLink } from 'react-router'

export const Header = styled.header`
  background-color: var(--cor-preto);
  color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;

  .header {
    display: flex;
  }

  .header {
    justify-content: space-between;
    align-items: center;
    padding: 16px;

    div {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    a {
      text-decoration: none;
      color: #fff;
      background-color: var(--cor-cinza);
      padding: 10px 12px;
      border-radius: 50%;
      transition: ease 300ms;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;

      i {
        width: 18px;
        height: 18px;
      }

      &:hover {
        background-color: var(--cor-vermelho);
      }
    }
  }
`

export const NavItem = styled(NavLink)<{ principal?: boolean }>`
  padding: 8px 16px;
  text-decoration: none;
  color: #fff;
  background-color: ${props => props.principal ? 'var(--cor-vermelho)' : 'var(--cor-cinza)'};
  font-weight: 600;
  font-size: 14px;

  &:hover {
    ${props => props.principal ? 'filter: brightness(0.8)' : 'background-color: var(--cor-vermelho)'};
  }
`

export const HamburgerBtn = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background 0.2s;
  line-height: 1;

  &:hover {
    background-color: var(--cor-cinza);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const MobileNav = styled.nav<{ open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: var(--cor-cinza);
    overflow: hidden;
    max-height: ${p => p.open ? '400px' : '0'};
    transition: max-height 0.35s ease;

    a {
      padding: 14px 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      font-size: 15px;
    }
  }
`

export const DesktopNav = styled.nav`
  background-color: var(--cor-cinza);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: none;
  }
`
