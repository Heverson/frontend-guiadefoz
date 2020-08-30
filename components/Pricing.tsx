import styled from 'styled-components'
import { Dollar } from '@styled-icons/boxicons-regular'

const SBlackDollar = styled(Dollar)`
  display: block;
  width: 1rem;
  height: 1rem;
  color: #333;
`

const SGrayDollar = styled(Dollar)`
  display: block;
  width: 1rem;
  height: 1rem;
  color: #999;
`

const SPricing = styled.div`
  position: relative;
  display: flex;
`

const Pricing: React.FC<PricingProps> = ({ value }) => (
  <SPricing>
    {Array(value).map(num =>
      num < value - 1 ? <SBlackDollar /> : <SGrayDollar />
    )}
  </SPricing>
)

interface PricingProps {
  value: 1 | 2 | 3 | 4 | 5
}

export default Pricing
export { SPricing }
