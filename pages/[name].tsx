import styled from 'styled-components'
import {
  SWrapper,
  SFlex,
  SFlexItem,
  SImage,
  STitle,
  SText,
  SButton
} from 'components/Blocks'
import { CheckCircle } from '@styled-icons/boxicons-solid'
import Comment, { SComment } from 'components/Comment'
import { Swiper, SwiperSlide } from 'swiper/react'

const SGallery = styled.figure`
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

const SHeading = styled.header`
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

const SSection = styled.section`
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

const SContact = styled.aside`
  overflow: hidden;
  position: relative;
  height: 500px;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  @media (min-width: 1000px) {
    position: absolute;
    top: 5rem;
    right: 1rem;
    top: 4rem;
    width: calc(300px - 4.5rem);
  }
  @media (min-width: 1200px) {
    top: 5rem;
    width: calc(350px - 5rem);
  }
  @media (min-width: 1400px) {
    width: calc(400px - 5rem);
  }
`

const SContent = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 2;
  color: #37474f;
  background: #eceff1;
  > ${SWrapper} {
    > ${SSection} {
      margin-bottom: 3rem;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
    > ${SContact} {
      margin-top: 3rem;
    }
  }
  @media (min-width: 1000px) {
    > ${SWrapper} {
      position: relative;
      padding-right: 300px;
      > ${SContact} {
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

const SCompany = styled.article`
  overflow: hidden;
  position: relative;
  padding-top: 20rem;
  > ${SGallery} {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 20rem;
  }
  @media (min-width: 600px) {
    padding-top: 22rem;
    > ${SGallery} {
      height: 22rem;
    }
  }
  @media (min-width: 800px) {
    padding-top: 24rem;
    > ${SGallery} {
      height: 24rem;
    }
  }
  @media (min-width: 1000px) {
    padding-top: 26rem;
    > ${SGallery} {
      height: 26rem;
    }
  }
  @media (min-width: 1200px) {
    padding-top: 28rem;
    > ${SGallery} {
      height: 28rem;
    }
  }
  @media (min-width: 1400px) {
    padding-top: 30rem;
    > ${SGallery} {
      height: 30rem;
    }
  }
`

const Company = () => (
  <SCompany>
    <SHeading>
      <SWrapper spacing="small" isFlex isCenter>
        <SImage src="/imagens/cupcakes.jpg" alt="" />
        <SDetails>
          <STitle size="normal">Bete Empadinhas</STitle>
          <SText>Comidas</SText>
        </SDetails>
        <SButton as="button" type="button" size="large">
          Fale com a empresa
        </SButton>
      </SWrapper>
    </SHeading>
    <SContent>
      <SWrapper spacing="normal" isCenter>
        <SSection>
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
          <SFlex spacing="large">
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
          </SFlex>
        </SSection>
        <SSection>
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
              />
            </SFlexItem>
          </SFlex>
        </SSection>
        <SContact></SContact>
      </SWrapper>
    </SContent>
    <SGallery>
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
    </SGallery>
  </SCompany>
)

export default Company
