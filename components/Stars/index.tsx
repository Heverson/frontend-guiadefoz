import styled from 'styled-components'
import { Star } from '@styled-icons/boxicons-regular'

const SStars = styled.div`
	> svg {
		display: inline-block;
		width: 1rem;
		height: 1rem;
	}
`

const Stars = () => (
	<SStars>
		<Star />
		<Star />
		<Star />
		<Star />
		<Star />
	</SStars>
)

export default Stars
export { SStars }