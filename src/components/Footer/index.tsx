import styled from "styled-components"

const FooterContainer = styled.footer`
  text-align: center;
  background-color: #000;
  color: #fff;
  padding: 24px;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
    margin-bottom: 24px;

    @media (max-width: 480px) {
      gap: 16px;
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 20px 16px;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <p>Trabalhe conosco</p>
        <p>Parceiro de negócio</p>
        <p>Termos de uso</p>
      </div>
      LIONS PRE-OWNED S. A. - 19.826.203/0001-60
    </FooterContainer>
  )
}

export default Footer
