import { FC } from 'react'
import { SWrapper, SImage, STitle, SText, SLink } from 'components/Styled'
import Stars, { SStars } from 'components/Stars'
import styled from 'styled-components'
import Link from 'next/link'

const SCard = styled(SWrapper)`
  overflow: hidden;
  position: relative;
  padding: 1rem;
  background: #fff;
  border-bottom: 1px solid #eee;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  > ${SImage} {
    width: calc(100% + 2rem);
    height: 12rem;
    margin: -1rem -1rem 1rem;
    object-fit: cover;
  }
  > ${STitle} {
    > ${SLink} {
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        content: '';
        pointer-events: auto;
      }
    }
  }
  @media (min-width: 800px) {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    transition: box-shadow 0.25s, transform 0.25s;
    &:hover {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.05);
      transform: translate3d(0, -0.5rem, 0);
    }
    &:active {
      box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.075);
      transform: translate3d(0, -0.375rem, 0);
    }
  }
`

const Card: FC<CardProps> = ({ title, rating, whatsapp, email, region }) => (
  <SCard as="article">
    <SImage src="/imagens/cupcakes.jpg" alt="" />
    <STitle as="h2" size="xsmall">
      <Link href="/bete-empadinhas" passHref>
        <SLink>{title}</SLink>
      </Link>
    </STitle>
    <SText>{email}</SText>
    <Stars />
    <SWrapper isFlex>
      <SText size="small">Vila C</SText>
      <SText size="small">Preço médio</SText>
    </SWrapper>
  </SCard>
)

interface CardProps {
  title: string
  rating: number
  email: string
  whatsapp: string
  region: 'CE' | 'VA' | 'VB'
}

export default Card
export { SCard }
