import styled from 'styled-components'
import { Link } from 'react-router'

export const Section = styled.section`
  background-color: var(--cor-preto);
  color: #fff;
  padding: 48px 0;

  h2 {
    font-size: 24px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 48px;
  }
`

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    'propaganda_1 propaganda_2 propaganda_4'
    'propaganda_1 propaganda_3 propaganda_4';
  grid-template-rows: minmax(200px, 30vh) minmax(200px, 30vh);
  gap: 8px;
  max-width: 95%;
  width: 100%;
  margin: 0 auto;

  li {
    list-style: none;

    a {
      text-decoration: none;
    }

    &:nth-child(1) { grid-area: propaganda_1; }
    &:nth-child(2) { grid-area: propaganda_2; }
    &:nth-child(3) { grid-area: propaganda_3; }
    &:nth-child(4) { grid-area: propaganda_4; }
  }

  figure {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;

    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
      transition: transform 0.5s ease-in-out;
      display: block;
    }

    &:hover img {
      transform: scale(1.05);
    }

    figcaption {
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      height: 100%;
      justify-content: end;
      align-items: center;
      padding: 16px 0;

      p {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
      }

      button {
        background-color: transparent;
        border: 2px solid #fff;
        color: #fff;
        cursor: pointer;
        font-weight: 700;
        padding: 8px 32px;
        transition: 0.5s ease-in-out;

        &:hover {
          background-color: #fff;
          color: black;
        }
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'propaganda_1 propaganda_2'
      'propaganda_3 propaganda_4';
    grid-template-rows: minmax(180px, 28vw) minmax(180px, 28vw);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'propaganda_1'
      'propaganda_2'
      'propaganda_3'
      'propaganda_4';
    grid-template-rows: repeat(4, 200px);
  }
`

export const CTAGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 48px;
  max-width: 90%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const CTA = styled(Link)`
  background-color: transparent;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 24px;
  transition: background-color 0.2s ease;
  width: 100%;
  height: 220px;
  cursor: pointer;
  text-decoration: none;

  .icon {
    font-size: 40px;
  }

  h3 {
    font-size: 24px;
    margin: auto 0;
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
  }

  &:hover {
    background-color: var(--cor-vermelho);
    color: #fff;
  }

  @media (max-width: 480px) {
    padding: 16px;
    height: 180px;

    .icon {
      font-size: 28px;
    }

    h3 {
      font-size: 16px;
    }

    span {
      font-size: 13px;
    }
  }
`
