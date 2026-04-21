import { useEffect } from 'react'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Section from '../components/Section'
import { Grid, CTA, CTAGrid } from '../components/Section/styles'
import { Layout } from './styles'
import { Link } from 'react-router'

const Home = () => {
  useEffect(() => {
    document.title = 'Lions seminovos | Concessionária de seminovos'
  }, [])

  return (
    <Layout>
      <Header />
      <Carousel />
      <Section>
        <h2>EXPLORE NOSSOS MODELOS</h2>
        <Grid>
          <li>
            <Link to="/catalogo">
              <figure>
                <img src="https://dmmfmlu2mykln.cloudfront.net/site/home/propaganda/utilitarios.webp" />
                <figcaption>
                  <p>Utilitarios</p>
                  <div>
                    <button>Conferir</button>
                  </div>
                </figcaption>
              </figure>
            </Link>
          </li>
          <li>
            <Link to="/catalogo">
              <figure>
                <img src="https://dmmfmlu2mykln.cloudfront.net/site/home/propaganda/suv.webp" />
                <figcaption>
                  <p>SUV</p>
                  <div>
                    <button>Conferir</button>
                  </div>
                </figcaption>
              </figure>
            </Link>
          </li>
          <li>
            <Link to="/catalogo">
              <figure>
                <img src="https://dmmfmlu2mykln.cloudfront.net/site/home/propaganda/hatch.webp" />
                <figcaption>
                  <p>Hatch</p>
                  <div>
                    <button>Conferir</button>
                  </div>
                </figcaption>
              </figure>
            </Link>
          </li>
          <li>
            <Link to="/catalogo">
              <figure>
                <img src="https://dmmfmlu2mykln.cloudfront.net/site/home/propaganda/sedan.webp" />
                <figcaption>
                  <p>Sedan</p>
                  <div>
                    <button>Conferir</button>
                  </div>
                </figcaption>
              </figure>
            </Link>
          </li>
        </Grid>

        <CTAGrid>
          <CTA to="/lojas">
            <i className="bi bi-geo-alt icon"></i>
            <h3>Encontre a LIONS</h3>
            <span>
              <p>Ver locais</p>
              <i className="bi bi-arrow-right-circle"></i>
            </span>
          </CTA>
          <CTA to="/agende-sua-visita">
            <i className="bi bi-chat-left-text icon"></i>
            <h3>Solicitar contato</h3>
            <span>
              <p>Começar</p>
              <i className="bi bi-arrow-right-circle"></i>
            </span>
          </CTA>
          <CTA to="/catalogo">
            <i className="bi bi-car-front icon"></i>
            <h3>Conferir catálogo</h3>
            <span>
              <p>Conferir</p>
              <i className="bi bi-arrow-right-circle"></i>
            </span>
          </CTA>
          <CTA to="/">
            <i className="bi bi-whatsapp icon"></i>
            <h3>Falar com vendedor</h3>
            <span>
              <p>Whatsapp</p>
              <i className="bi bi-arrow-right-circle"></i>
            </span>
          </CTA>
        </CTAGrid>
      </Section>
      <Footer />
    </Layout>
  )
}

export default Home
