import useEmblaCarousel from 'embla-carousel-react'
import image1 from '/foto-43088-desktop.webp'
import image2 from '/foto-28419-desktop.webp'
import image3 from '/foto-28275-desktop.webp'
import image4 from '/foto-92727-desktop.webp'
import image5 from '/foto-19645-desktop.webp'
import styled from 'styled-components'
import Autoplay from 'embla-carousel-autoplay'

const EmblaWrapper = styled.div`
  overflow: hidden;
  width: 100%;

  .embla__container {
    display: flex;
  }

  .embla__slide {
    flex: 0 0 100%;
  }

  img {
    width: 100%;
    height: calc(100dvh - 104.4px);
    display: block;
    object-fit: cover;
    object-position: center;

    @media (max-width: 768px) {
      height: calc(100dvh - 60px);
      object-position: 70% center;
    }

    @media (max-width: 480px) {
      height: 60vw;
      min-height: 240px;
    }
  }
`

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: false
      })
    ]
  )

  return (
    <EmblaWrapper ref={emblaRef} className="embla">
      <div className="embla__container">
        <div className="embla__slide"><img src={image1} /></div>
        <div className="embla__slide"><img src={image2} /></div>
        <div className="embla__slide"><img src={image3} /></div>
        <div className="embla__slide"><img src={image4} /></div>
        <div className="embla__slide"><img src={image5} /></div>
      </div>
    </EmblaWrapper>
  )
}

export default Carousel
