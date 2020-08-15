import styled from 'styled-components'
import { SWrapper, SImage, STitle, SText } from 'components/Blocks'

const SParallax = styled.header`
  overflow: hidden;
  position: relative;
  height: 400px;
  background: #000;
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    content: '';
    background: rgba(0, 0, 0, .5);
  }
  > ${SWrapper} {
    position: relative;
    z-index: 3;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    > * {
      color: #fff;
    }
  }
  > ${SImage} {
    position: absolute;
    top: -2rem;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    height: calc(100% + 2rem);
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
  }
  @media (min-width: 800px) {
    height: 450px;
  }
  @media (min-width: 1200px) {
    height: 500px;
  }
`

const Parallax = ({ title, description, children }: ParallaxProps) => (
  <SParallax>
    <SWrapper spacing="small" isFlex isCenter>
      <STitle size="large">{title}</STitle>
      {description && <SText size="large">{description}</SText>}
    </SWrapper>
    {children && children}
  </SParallax>
)

interface ParallaxProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export default Parallax
export { SParallax }
