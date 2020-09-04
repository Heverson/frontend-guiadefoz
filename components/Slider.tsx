import styled from 'styled-components'
import { useEffect, useRef, Children } from 'react'
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

const Slider: React.FC<SliderProps> = ({
  children,
  items,
  pagination,
  navigation
}) => {
  const container = useRef(null)

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
  pagination?: boolean
  navigation?: boolean
}

export default Slider
export { SSlider }
