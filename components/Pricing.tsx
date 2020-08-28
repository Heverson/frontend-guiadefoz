import styled from 'styled-components'
import { Dollar } from '@styled-icons/boxicons-regular'

const SPricing = styled.div`
  position: relative;
  > svg {
    display: inline-block;
    width: 0.9rem;
    height: 0.9rem;
  }
`

const Pricing: React.FC<PricingProps> = ({ value }) => (
  <SPricing>
    {Array(value).map(() => (
      <Dollar />
    ))}
  </SPricing>
)

interface PricingProps {
  value: 1 | 2 | 3 | 4 | 5
}

export default Pricing
export { SPricing }
