import { useRef, useEffect } from 'react'
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
    background: rgba(0, 0, 0, 0.5);
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
    perspective: 1000;
  }
  @media (min-width: 800px) {
    height: 450px;
  }
  @media (min-width: 1200px) {
    height: 500px;
  }
`

const Parallax: React.FC<ParallaxProps> = ({ title, description, src, alt }) => {
  const image = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!image.current) return;
      image.current.style.transform = `translate3d(0, ${
        window.scrollY * 0.25
      }px, 0)`
    })
  }, [image])

  return (
    <SParallax>
      <SWrapper spacing="small" isFlex isCenter>
        <STitle size="large">{title}</STitle>
        {description && <SText size="large">{description}</SText>}
      </SWrapper>
      <SImage ref={image} src={src} alt={alt} isCover />
    </SParallax>
  )
}

interface ParallaxProps {
  title: string
  description?: string
  src: string
  alt: string
}

export default Parallax
export { SParallax }
