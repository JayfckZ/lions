import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Layout } from './styles'
import background from '../assets/imagem-de-fundo-CPX787uD.webp'

const AgendamentoContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #000;
  color: #fff;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    gap: 24px;
    padding: 48px 24px;

    h3 {
      font-size: 32px;
    }

    p {
      padding-left: 8px;
      border-left: 2px solid #fff;
    }

    .bloco {
      display: flex;
      flex-direction: column;
      max-width: 350px;
      width: 100%;
      gap: 8px;
    }

    .inputs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }

    input,
    select {
      background-color: #1b1d1d;
      color: #fff;
      padding: 8px;
      height: 40px;
      border: none;
      outline: none;
      border-radius: 4px;
      width: 100%;

      &:focus {
        outline: 2px solid var(--cor-vermelho);
      }
    }

    .inputIcon {
      position: relative;
      width: 100%;

      i {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #aaa;
        pointer-events: none;
        font-size: 16px;
      }

      input,
      select {
        padding-left: 36px;
      }
    }

    button {
      background-color: #fff;
      border: none;
      padding: 1rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: center;
      font-size: 1rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      height: 2.5rem;

      &:hover {
        gap: 16px;
      }
    }
  }

  #text {
    background-image: url(${background});
    background-size: cover;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 32px;

    h2 {
      font-size: 48px;
      margin-bottom: 16px;
    }

    h2,
    p {
      max-width: 90%;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    #text {
      display: none;
    }

    form {
      padding: 40px 20px;
      width: 100%;

      .bloco {
        max-width: 100%;
      }
    }
  }

  @media (max-width: 480px) {
    form {
      padding: 32px 16px;
      gap: 20px;

      h3 {
        font-size: 24px;
      }

      .inputs {
        grid-template-columns: 1fr;
      }
    }
  }
`

const Layout2 = styled(Layout)`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`

const maskPhone = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}

const AgendeSuaVisita = () => {
  return (
    <Layout2>
      <Header />
      <AgendamentoContainer>
        <form>
          <h3>AGENDE SUA VISITA</h3>

          <div className="bloco">
            <p>Seus dados</p>

            <div className="inputs">
              <div className="inputIcon">
                <i className="bi bi-person" />
                <input type="text" placeholder="Nome completo" />
              </div>

              <div className="inputIcon">
                <i className="bi bi-telephone" />
                <input
                  type="tel"
                  placeholder="Telefone"
                  onChange={(e) => {
                    e.target.value = maskPhone(e.target.value)
                  }}
                />
              </div>
            </div>

            <div className="inputIcon">
              <i className="bi bi-envelope" />
              <input type="email" placeholder="E-mail" />
            </div>
          </div>

          <div className="bloco">
            <p>Loja</p>

            <div className="inputIcon">
              <i className="bi bi-geo-alt" />
              <select defaultValue="">
                <option value="" hidden>
                  Loja mais próxima
                </option>
                <option>Lions Seminovos Nova Iguaçu</option>
                <option>Lions Seminovos Duque de Caxias</option>
                <option>Lions Seminovos Intendente Magalhães</option>
                <option>Lions Seminovos Niterói</option>
                <option>Lions Seminovos Barra Mansa</option>
                <option>Lions Seminovos Campo Grande</option>
                <option>Lions Seminovos Vila Prudente</option>
                <option>Lions Seminovos Osasco</option>
                <option>Lions Seminovos Santo Amaro</option>
                <option>Lions Seminovos São Bernardo do Campo</option>
                <option>Lions Seminovos São Miguel</option>
              </select>
            </div>

            <div className="inputs">
              <div className="inputIcon">
                <i className="bi bi-calendar-event" />
                <input type="date" />
              </div>

              <div className="inputIcon">
                <i className="bi bi-clock" />
                <select defaultValue="">
                  <option value="" hidden>
                    Horário
                  </option>
                  <option>09:00</option>
                  <option>09:30</option>
                  <option>10:00</option>
                  <option>10:30</option>
                  <option>11:00</option>
                  <option>11:30</option>
                  <option>12:00</option>
                  <option>12:30</option>
                  <option>13:00</option>
                  <option>13:30</option>
                  <option>14:00</option>
                  <option>14:30</option>
                  <option>15:00</option>
                  <option>15:30</option>
                  <option>16:00</option>
                  <option>16:30</option>
                  <option>17:00</option>
                  <option>17:30</option>
                  <option>18:00</option>
                  <option>18:30</option>
                  <option>19:00</option>
                  <option>19:30</option>
                  <option>20:00</option>
                  <option>20:30</option>
                  <option>21:00</option>
                  <option>21:30</option>
                </select>
              </div>
            </div>
          </div>

          <button>Agendar visita <div className="bi bi-arrow-right"></div></button>
        </form>

        <div id="text">
          <h2>A LIONS ESTÁ COM VOCÊ EM CADA ENCONTRO</h2>
          <p>
            Na LIONS, cada visita é pensada para você. Um momento exclusivo, com
            atendimento humano e atenção aos detalhes que realmente importam.
            Aqui, você não é apenas mais um horário na agenda — é alguém com
            planos, dúvidas e expectativas que merecem ser respeitadas. Agende
            quando for melhor para você. Estamos prontos para receber, ouvir e
            ajudar no que for preciso.
          </p>
        </div>
      </AgendamentoContainer>
      <Footer />
    </Layout2>
  )
}

export default AgendeSuaVisita
