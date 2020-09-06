import styled from 'styled-components'
import { useEffect, useRef, Children, FC } from 'react'
import { Swiper, Navigation, Pagination } from 'swiper'
import { SFlex, SFlexItem, SText } from 'components/Styled'
import { ChevronLeft, ChevronRight } from '@styled-icons/boxicons-solid'

const SSlidArrow = styled.button`
  display: block;
  padding: 0;
  cursor: pointer;
  > svg {
    width: 3rem;
    height: 3rem;
  }
`
const SSlidBullets = styled.div`
  display: block;
  position: relative;
`
const SSlider = styled.div`
  position: relative;
  z-index: 1;
  display: block;
  > ${SFlex} {
    position: relative;
    z-index: 1;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    > ${SFlexItem} {
      flex-shrink: 0;
      width: 100%;
      height: 100%;
    }
  }
  > ${SSlidArrow} {
    position: absolute;
    top: 0;
    z-index: 2;
    &:nth-of-type(1) {
      left: 0;
    }
    &:nth-of-type(2) {
      right: 0;
    }
  }
`

const Slider: FC<SliderProps> = ({
  children,
  items,
  hasArrows,
  hasBullets
}) => {
  const containerRef = useRef(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const bulletsRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    let breakpoints
    let navigation
    let pagination

    if (items) {
      breakpoints = {}
      for (let key in items) {
        breakpoints[key] = {
          slidesPerView: items[key]
        }
      }
    }

    if (hasArrows && prevRef.current && nextRef.current) {
      Swiper.use([Navigation])
      navigation = {
        prevEl: prevRef.current,
        nextEl: nextRef.current
      }
    }

    if (hasBullets && bulletsRef.current) {
      Swiper.use([Pagination])
      pagination = {
        el: bulletsRef.current,
        bulletClass: 'bullet',
        bulletActiveClass: 'is-active'
      }
    }

    const swiper = new Swiper(containerRef.current, {
      slidesPerView: 1,
      breakpoints,
      navigation,
      containerModifierClass: 'is-',
      slideClass: SFlexItem.styledComponentId,
      slideActiveClass: 'is-active',
      slideDuplicateActiveClass: 'is-active',
      slideVisibleClass: 'is-visible',
      slideDuplicateClass: 'is-clone',
      slideNextClass: 'is-next',
      slideDuplicateNextClass: 'is-next',
      wrapperClass: SFlex.styledComponentId
    })
  }, [containerRef, prevRef, nextRef, bulletsRef])

  if (Children.count(children)) {
    return (
      <SSlider ref={containerRef}>
        <SFlex>
          {Children.map(children, (child, index) => (
            <SFlexItem key={index}>{child}</SFlexItem>
          ))}
        </SFlex>
        {hasArrows && (
          <>
            <SSlidArrow ref={prevRef} type="button">
              <ChevronLeft />
            </SSlidArrow>
            <SSlidArrow ref={nextRef} type="button">
              <ChevronRight />
            </SSlidArrow>
          </>
        )}
        {hasBullets && <SSlidBullets ref={bulletsRef} />}
      </SSlider>
    )
  }

  return (
    <SSlider ref={containerRef}>
      <SText>No children</SText>
    </SSlider>
  )
}

interface SliderProps {
  items?: {
    [key: string]: number
  }
  hasArrows?: boolean
  hasBullets?: boolean
}

export default Slider
export { SSlider }
