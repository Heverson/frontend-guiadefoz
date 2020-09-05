import styled from 'styled-components'
import { useEffect, useRef, Children, FC } from 'react'
import { Swiper } from 'swiper'
import { SFlex, SFlexItem, SText } from 'components/Styled'

const SSlider = styled.div`
  position: relative;
  display: block;
  > ${SFlex} {
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    > ${SFlexItem} {
      flex-shrink: 0;
      width: 100%;
      height: 100%;
    }
  }
`

const Slider: FC<SliderProps> = ({
  children,
  items,
  hasArrows,
  navigation
}) => {
  const container = useRef(null)
  const prev = useRef(null)
  const next = useRef(null)
  
  useEffect(() => {
    if (!container.current) return
    
    let breakpoints

    if (items) {
      breakpoints = {}
      for (let key in items) {
        breakpoints[key] = {
          slidesPerView: items[key]
        }
      }
    }

    const options = {
      slidesPerView: 1,
      breakpoints,
      containerModifierClass: 'is-',
      slideClass: SFlexItem.styledComponentId,
      wrapperClass: SFlex.styledComponentId
    }

    const swiper = new Swiper(container.current, options)
  }, [])

  if (Children.count(children)) {
    return (
      <SSlider ref={container}>
        <SFlex>
          {Children.map(children, (child, index) => (
            <SFlexItem key={index}>{child}</SFlexItem>
          ))}
        </SFlex>
      </SSlider>
    )
  }

  return (
    <SSlider ref={container}>
      <SText>No children</SText>
    </SSlider>
  )
}

interface SliderProps {
  items?: {
    [key: string]: number
  }
  hasArrows?: boolean
  navigation?: boolean
}

export default Slider
export { SSlider }
