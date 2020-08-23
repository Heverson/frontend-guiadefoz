import styled from 'styled-components'
import { Heart } from '@styled-icons/boxicons-solid'

const SRating = styled.div`
  display: block;
  > svg {
    display: inline-block;
    vertical-align: middle;
    width: 1em;
    height: 1em;
    margin-top: -1px;
  }
`

const Rating: React.FC<RatingProps> = ({ count }) => (
  <SRating>
    <Heart />
    {count} Likes
  </SRating>
)

interface RatingProps {
  count: number
}

export default Rating
export { SRating }
