import styled from 'styled-components'
import { useEffect, useRef, Children } from 'react'
import { Swiper } from 'swiper'
import { SFlex, SFlexItem, SText } from 'components/Styled'

const SSlider = styled.div`
  position: relative;
  display: block;
  > ${SFlex} {
    > ${SFlexItem} {
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

    const options = {
      slidesPerView: 1,
      containerModifierClass: 'is-',
      slideClass: SFlexItem.componentId,
      wrapperClass: SFlex.componentId
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
  items?: (number, string){}
  pagination?: boolean
  navigation?: boolean
}

export default Slider

export { SSlider }