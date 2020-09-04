import styled from 'styled-components'
import {
  SWrapper,
  SFlex,
  SFlexItem,
  SImage,
  STitle,
  SText,
  SButton
} from 'components/Styled'
import { CheckCircle } from '@styled-icons/boxicons-solid'
import Pricing from 'components/Pricing'
import Rating from 'components/Rating'
import Comment, { SComment } from 'components/Comment'
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from 'components/Card'
import Social from 'components/Social'

//

const SDetails = styled.div`
  margin: 0 auto 0 2rem;
  > ${STitle} {
    margin-bottom: 0.25rem;
    color: #222;
  }
  > ${SText} {
    color: #555;
  }
`
const SServices = styled(SFlex)`
  > ${SFlexItem} {
    width: 33.33333%;
  }
`

const SCompImages = styled.figure`
  overflow: hidden;
  position: relative;
  z-index: 1;
  min-height: 20rem;
  color: #b0bec5;
  margin: 0;
  background: #263238;
  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    height: 50%;
    content: '';
    background: -webkit-linear-gradient(
      bottom,
      rgba(0, 0, 0, 0.5) 0,
      transparent 100%
    );
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0, transparent 100%);
  }
  > .swiper-container {
    height: 100%;
    > .swiper-wrapper {
      > .swiper-slide {
        opacity: 0.5;
        transition: opacity 0.25s;
      }
      > .swiper-slide-active {
        opacity: 1;
      }
    }
  }
  @media (min-width: 800px) {
    > .swiper-container {
      overflow: visible;
      width: 750px;
      margin: 0 auto;
      > .swiper-wrapper {
        > .swiper-slide {
          box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0);
          transition: opacity 0.25s, box-shadow 0.25s;
        }
        > .swiper-slide-active {
          z-index: 2;
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
  @media (min-width: 1000px) {
    > .swiper-container {
      width: 900px;
    }
  }
  @media (min-width: 1200px) {
    > .swiper-container {
      width: 1050px;
    }
  }
  @media (min-width: 1400px) {
    > .swiper-container {
      width: 1200px;
    }
  }
`
const SCompCards = styled.section`
  position: relative;
  background: ${({ theme }) => theme.colors.bluegray[0]};
  > ${SWrapper} {
    padding-top: 0;
    > ${STitle} {
      margin-bottom: 2rem;
    }
    > .swiper-container {
      overflow: visible;
      margin: -1rem;
      width: calc(100% + 2rem);
      > .swiper-wrapper {
        > .swiper-slide {
          padding: 1rem;
        }
      }
    }
  }
`
const SCompBodySidebar = styled.aside`
  position: relative;
  overflow: hidden;
  padding: 1rem;
  background: #fff;
  color: ${({ theme }) => theme.colors.gray[6]};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  > iframe {
    width: calc(100% + 2rem);
    height: 300px;
    margin: -1rem -1rem 1rem;
    background: #f6f7f8;
  }
  > ${STitle} {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  @media (min-width: 600px) {
    > iframe {
      height: 260px;
    }
  }
  @media (min-width: 800px) {
    padding: 1.25rem;
    > iframe {
      width: calc(100% + 2.5rem);
      height: 220px;
      margin: -1.25rem -1.25rem 1rem;
    }
  }
  @media (min-width: 1000px) {
    position: absolute;
    top: 5rem;
    right: 1rem;
    top: 4rem;
    width: calc(300px - 4.5rem);
    > iframe {
      height: 300px;
    }
  }
  @media (min-width: 1200px) {
    top: 5rem;
    width: calc(350px - 5rem);
    padding: 1.5rem;
    > iframe {
      width: calc(100% + 3rem);
      height: 280px;
      margin: -1.5rem -1.5rem 1rem;
    }
  }
  @media (min-width: 1400px) {
    width: calc(400px - 5rem);
    > iframe {
      height: 260px;
    }
  }
`
const SCompBodySection = styled.section`
  > ${STitle} {
    text-transform: uppercase;
  }
  > p {
    margin: 1rem 0;
    &:first-of-type {
      margin-top: 1.5rem;
    }
    &:last-of-type {
      margin-bottom: 1.5rem;
    }
  }
  > ${SFlex} {
    > ${SFlexItem} {
      > svg {
        display: inline-block;
        vertical-align: bottom;
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
      }
    }
  }
  &:nth-of-type(1) {
    > ${SFlex} {
      margin-top: 0.5rem;
      > ${SFlexItem} {
        font-size: 0.9rem;
      }
    }
  }
  &:nth-of-type(2) {
    > ${SFlex} {
      margin-top: -0.5rem;
    }
  }
`
const SCompBody = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 2;
  color: #37474f;
  background: #eceff1;
  > ${SWrapper} {
    > ${SCompBodySection} {
      margin-bottom: 3rem;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
    > ${SCompBodySidebar} {
      margin-top: 3rem;
    }
  }
  @media (min-width: 1000px) {
    > ${SWrapper} {
      position: relative;
      padding-right: 300px;
      > ${SCompBodySidebar} {
        margin-top: 0;
      }
    }
  }
  @media (min-width: 1200px) {
    > ${SWrapper} {
      padding-right: 350px;
    }
  }
  @media (min-width: 1400px) {
    > ${SWrapper} {
      padding-right: 400px;
    }
  }
`
const SCompHead = styled.header`
  overflow: hidden;
  position: relative;
  z-index: 3;
  background: #fff;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.05);
  > ${SWrapper} {
    justify-content: space-between;
    > ${SImage} {
      width: 5rem;
      height: 5rem;
      object-fit: cover;
      border-radius: 2.5rem;
    }
  }
  @media (min-width: 800px) {
    > ${SWrapper} {
      padding-top: 2rem !important;
      padding-bottom: 2rem !important;
    }
  }
`
const SCompany = styled.article`
  overflow: hidden;
  position: relative;
  padding-top: 20rem;
  > ${SCompImages} {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 20rem;
  }
  @media (min-width: 600px) {
    padding-top: 22rem;
    > ${SCompImages} {
      height: 22rem;
    }
  }
  @media (min-width: 800px) {
    padding-top: 24rem;
    > ${SCompImages} {
      height: 24rem;
    }
  }
  @media (min-width: 1000px) {
    padding-top: 26rem;
    > ${SCompImages} {
      height: 26rem;
    }
  }
  @media (min-width: 1200px) {
    padding-top: 28rem;
    > ${SCompImages} {
      height: 28rem;
    }
  }
  @media (min-width: 1400px) {
    padding-top: 30rem;
    > ${SCompImages} {
      height: 30rem;
    }
  }
`

//

const Company = () => (
  <SCompany>
    <SCompHead>
      <SWrapper spacing="small" isFlex isCentralized>
        <SImage src="/imagens/cupcakes.jpg" alt="" />
        <SDetails>
          <STitle size="normal">Bete Empadinhas</STitle>
          <SText>Comidas</SText>
          <Rating count={20} />
        </SDetails>
        <SButton as="button" type="button" size="large">
          Fale com a empresa
        </SButton>
      </SWrapper>
    </SCompHead>
    <SCompBody>
      <SWrapper spacing="normal" isCentralized>
        <SCompBodySection>
          <STitle as="h2" size="xsmall">
            Mais informacoes:
          </STitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            facilis deleniti doloribus repellendus corrupti illum, veniam nemo
            blanditiis accusantium totam voluptas, earum repellat minus ullam
            vitae. Sint laudantium error est.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            facilis deleniti doloribus repellendus corrupti illum, veniam nemo
            blanditiis accusantium totam voluptas, earum repellat minus ullam
            vitae. Sint laudantium error est.
          </p>
          <SServices spacing="large">
            <SFlexItem>
              <CheckCircle />
              Área para fumadores
            </SFlexItem>
            <SFlexItem>
              <CheckCircle />
              Área para fumadores
            </SFlexItem>
            <SFlexItem>
              <CheckCircle />
              Área para fumadores
            </SFlexItem>
          </SServices>
        </SCompBodySection>
        <SCompBodySection>
          <STitle as="h2" size="xsmall">
            Comentários:
          </STitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            facilis deleniti doloribus repellendus corrupti illum.
          </p>
          <SFlex spacing="xlarge">
            <SFlexItem>
              <Comment
                name="Jefferson Caique"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda facilis deleniti doloribus repellendus corrupti illum, veniam nemo blanditiis accusantium totam voluptas"
                region="PM"
              />
            </SFlexItem>
            <SFlexItem>
              <Comment
                name="Jefferson Caique"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda facilis deleniti doloribus repellendus corrupti illum, veniam nemo blanditiis accusantium totam voluptas"
                region="KL"
              />
            </SFlexItem>
            <SFlexItem>
              <Comment
                name="Jefferson Caique"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda facilis deleniti doloribus repellendus corrupti illum, veniam nemo blanditiis accusantium totam voluptas"
              />
            </SFlexItem>
          </SFlex>
        </SCompBodySection>
        <SCompBodySidebar>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4160.752491131133!2d-54.55823522146453!3d-25.4955940574814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf2ed25e1cdcadbb!2sBett%C2%B4s%20Empadinhas!5e0!3m2!1ses-419!2sbr!4v1598298371890!5m2!1ses-419!2sbr"
            width="600"
            height="450"
            frameBorder="0"
            tabIndex={0}
            allowFullScreen
          ></iframe>
          <STitle as="h2" size="xsmall" hasColon>
            Localização
          </STitle>
          <SText size="small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </SText>
          <Social facebook="#" instagram="#" />
        </SCompBodySidebar>
      </SWrapper>
    </SCompBody>
    <SCompCards>
      <SWrapper spacing="large" isCentralized>
        <STitle as="h2" hasColon>
          Locais relacionados
        </STitle>
        <Swiper
          breakpoints={{
            600: {
              slidesPerView: 2
            },
            1200: {
              slidesPerView: 3
            }
          }}
        >
          <SwiperSlide>
            <Card title="Empresa 01" region="VA" rating={3} />
          </SwiperSlide>
          <SwiperSlide>
            <Card title="Empresa 01" region="VA" rating={3} />
          </SwiperSlide>
          <SwiperSlide>
            <Card title="Empresa 01" region="VA" rating={3} />
          </SwiperSlide>
          <SwiperSlide>
            <Card title="Empresa 01" region="VA" rating={3} />
          </SwiperSlide>
        </Swiper>
      </SWrapper>
    </SCompCards>
    <SCompImages>
      <Swiper wrapperTag="ul" slidesPerView={1}>
        <SwiperSlide tag="li">
          <SImage src="imagens/cupcakes.jpg" alt="" isCover />
        </SwiperSlide>
        <SwiperSlide tag="li">
          <SImage src="imagens/cupcakes.jpg" alt="" isCover />
        </SwiperSlide>
        <SwiperSlide tag="li">
          <SImage src="imagens/cupcakes.jpg" alt="" isCover />
        </SwiperSlide>
        <SwiperSlide tag="li">
          <SImage src="imagens/cupcakes.jpg" alt="" isCover />
        </SwiperSlide>
        <SwiperSlide tag="li">
          <SImage src="imagens/cupcakes.jpg" alt="" isCover />
        </SwiperSlide>
      </Swiper>
    </SCompImages>
  </SCompany>
)

export default Company
