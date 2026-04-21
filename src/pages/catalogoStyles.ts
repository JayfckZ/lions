import styled from "styled-components"

export const PageWrapper = styled.div`
  background-color: #000;
  min-height: 100vh;
  color: #fff;
  font-family: var(--fonte-corpo);
`

export const Hero = styled.div`
  padding: 56px 48px 32px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1px solid #2a2a2a;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 32px 20px 24px;
  }
`

export const HeroTitle = styled.h1`
  font-family: var(--fonte-titulo);
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 800;
  letter-spacing: -2px;
  line-height: 1;
  color: #fff;

  span {
    color: var(--cor-vermelho);
  }

  @media (max-width: 480px) {
    font-size: 36px;
    letter-spacing: -1px;
  }
`

export const HeroSub = styled.p`
  font-size: 14px;
  color: #888;
  margin-top: 8px;
  letter-spacing: 0.2px;
`

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: #1c1c1c;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  padding: 0 16px;
  height: 44px;
  gap: 10px;
  min-width: 280px;

  i {
    color: #888;
    font-size: 16px;
  }

  input {
    background: none;
    border: none;
    outline: none;
    color: #fff;
    font-family: var(--fonte-corpo);
    font-size: 14px;
    width: 100%;

    &::placeholder {
      color: #888;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
  }
`

/* ── Botão hamburguer (só aparece em mobile) ── */
export const FilterToggleBtn = styled.button`
  display: none;
  align-items: center;
  gap: 8px;
  background: #1c1c1c;
  border: 1px solid #2a2a2a;
  color: #fff;
  border-radius: 8px;
  padding: 10px 16px;
  font-family: var(--fonte-corpo);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.2s;
  margin-bottom: 16px;

  i {
    font-size: 15px;
  }

  &:hover {
    border-color: #555;
  }

  @media (max-width: 900px) {
    display: flex;
  }
`

export const ContentArea = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 0;
  min-height: calc(100vh - 200px);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const Sidebar = styled.aside<{ $open?: boolean }>`
  border-right: 1px solid #2a2a2a;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 900px) {
    border-right: none;
    border-bottom: 1px solid #2a2a2a;
    padding: 0 20px;
    gap: 0;
    overflow: hidden;
    max-height: ${(p) => (p.$open ? '1000px' : '0')};
    transition: max-height 0.35s ease, padding 0.2s ease;
    padding-top: ${(p) => (p.$open ? '20px' : '0')};
    padding-bottom: ${(p) => (p.$open ? '24px' : '0')};
    gap: ${(p) => (p.$open ? '24px' : '0')};
  }
`

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const FilterLabel = styled.p`
  font-family: var(--fonte-titulo);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #888;
`

export const Select = styled.select`
  background: #1c1c1c;
  border: 1px solid #2a2a2a;
  color: #fff;
  border-radius: 6px;
  padding: 10px 12px;
  font-family: var(--fonte-corpo);
  font-size: 13px;
  width: 100%;
  outline: none;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23666' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;

  &:focus {
    border-color: var(--cor-vermelho);
  }
  option {
    background: #1c1c1c;
  }
`

export const RangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .range-labels {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #888;
  }

  input[type='range'] {
    width: 100%;
    accent-color: var(--cor-vermelho);
    height: 4px;
    cursor: pointer;
  }
`

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    color: #ccc;
    cursor: pointer;

    input[type='checkbox'] {
      accent-color: var(--cor-vermelho);
      width: 14px;
      height: 14px;
      cursor: pointer;
      flex-shrink: 0;
    }

    &:hover {
      color: #fff;
    }
  }
`

export const ResetBtn = styled.button`
  background: none;
  border: 1px solid #2a2a2a;
  color: #888;
  border-radius: 6px;
  padding: 8px 12px;
  font-family: var(--fonte-corpo);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  margin-top: 4px;

  &:hover {
    border-color: var(--cor-vermelho);
    color: var(--cor-vermelho);
  }
`

export const GridArea = styled.main`
  padding: 32px;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`

export const GridHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`

export const ResultCount = styled.p`
  font-size: 13px;
  color: #888;

  strong {
    color: #fff;
    font-weight: 500;
  }
`

export const SortSelect = styled(Select)`
  width: auto;
  min-width: 180px;

  @media (max-width: 480px) {
    width: 100%;
    min-width: unset;
  }
`

export const CarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

export const CarCard = styled.div`
  background: #1c1c1c;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition:
    border-color 0.25s,
    transform 0.25s;
  position: relative;

  &:hover {
    border-color: #444;
    transform: translateY(-3px);
  }

  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: 140px 1fr;
    border-radius: 10px;

    &:hover {
      transform: none;
    }
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`

export const CardImg = styled.div<{ src: string }>`
  height: 200px;
  background-image: url(${(p) => p.src});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: 640px) {
    height: 100%;
    min-height: 140px;
  }

  @media (max-width: 400px) {
    height: 180px;
  }
`

export const CardBadge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--cor-vermelho);
  color: #fff;
  font-family: var(--fonte-titulo);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
`

export const CardBody = styled.div`
  padding: 18px 20px 20px;

  @media (max-width: 640px) {
    padding: 14px 16px;
  }
`

export const CardTitle = styled.h3`
  font-family: var(--fonte-titulo);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: #fff;
  margin-bottom: 10px;
  line-height: 1.3;

  @media (max-width: 640px) {
    font-size: 13px;
    margin-bottom: 8px;
  }
`

export const CardMeta = styled.div`
  display: flex;
  gap: 0;
  margin-bottom: 14px;
  flex-wrap: wrap;

  span {
    font-size: 12px;
    color: #888;
    padding: 0 10px;

    &:first-child {
      padding-left: 0;
    }
    &:not(:last-child) {
      border-right: 1px solid #2a2a2a;
    }
  }

  @media (max-width: 640px) {
    margin-bottom: 10px;

    span {
      font-size: 11px;
      padding: 0 6px;
    }
  }
`

export const CardPrice = styled.p`
  font-family: var(--fonte-titulo);
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 14px;
  letter-spacing: -0.5px;

  @media (max-width: 640px) {
    font-size: 17px;
    margin-bottom: 10px;
  }
`

export const CardActions = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 6px;
  }

  @media (max-width: 400px) {
    flex-direction: row;
  }
`

export const BtnSimular = styled.button`
  flex: 1;
  background: var(--cor-vermelho);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px;
  font-family: var(--fonte-corpo);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: background 0.2s;

  &:hover {
    background: #a50d26;
  }

  @media (max-width: 640px) {
    padding: 8px;
    font-size: 12px;
  }
`

export const BtnChat = styled.button`
  background: none;
  color: #aaa;
  border: 1px solid #2a2a2a;
  border-radius: 6px;
  padding: 10px 12px;
  font-family: var(--fonte-corpo);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    color: #fff;
    border-color: #555;
  }

  @media (max-width: 640px) {
    padding: 8px 10px;
    font-size: 11px;
    white-space: normal;
  }
`

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 40px;

  @media (max-width: 480px) {
    gap: 4px;
    margin-top: 28px;
  }
`

export const PageBtn = styled.button<{ $active?: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: 1px solid ${(p) => (p.$active ? 'var(--cor-vermelho)' : '#2a2a2a')};
  background: ${(p) => (p.$active ? 'var(--cor-vermelho)' : 'none')};
  color: ${(p) => (p.$active ? '#fff' : '#aaa')};
  font-family: var(--fonte-corpo);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    border-color: ${(p) => (p.$active ? 'var(--cor-vermelho)' : '#555')};
    color: #fff;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 12px;
  }
`
