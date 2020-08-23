import styled from 'styled-components'
import { Dollar } from '@styled-icons/boxicons-regular'

const SPricing = styled.div`
  position: relative;
  > svg {
    display: inline-block;
    width: .9rem;
    height: .9rem;
  }
`

const Pricing = () => (
  <SPricing>
    <Dollar />
    <Dollar />
    <Dollar />
    <Dollar />
    <Dollar />
  </SPricing>
)

export default Pricing
export { SPricing }
