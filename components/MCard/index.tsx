import styled from 'styled-components'
import { SWrap, SImg, STitle } from 'components/Blocks'

const SMCard = styled(SWrap)`
	position: relative;
	> ${SImg} {
		
	}
	> ${STitle} {
		
	}
`

const MCard = ({ tag, title }: IMCard) => (
	<SMCard as="article">
		<SImg src="/images/cupcakes.jpg" alt="" />
		<STitle as={tag}>{title}</STitle>
	</SMCard>
)

interface IMCard {
	tag: 'h2' | 'h3' | 'h4' | 'h5'
	title: string
}

export default MCard
export { SMCard }
