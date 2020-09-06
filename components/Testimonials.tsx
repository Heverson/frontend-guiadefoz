import styled from 'styled-components'
import Slider from 'components/Slider'
import { SWrapper, STitle } from 'components/Styled'
import { FC } from 'react'

const STestimonials = styled.section`
  position: relative;
  background: #fff;
`

const Testimonials: FC<TestimonialsProps> = ({}) => (
  <STestimonials>
    <SWrapper isCentralized>
      <STitle></STitle>
    </SWrapper>
  </STestimonials>
)

interface TestimonialsProps {
  
}

export default Testimonials
export { STestimonials }

