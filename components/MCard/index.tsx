import styled from 'styled-components'
import { SWrap, SImg, SText } from 'components/Blocks'

const SMCard = styled(SWrap)`
	position: relative;
	> ${SImg} {
		
	}
	> ${SText} {
		font-weight: 700;
	}
`

const MCard = ({ tag, title }: IMCard) => (
	<SMCard as="article">
		<SImg src="/images/cupcakes.jpg" alt="" />
		<SText as={tag}>{title}</SText>
	</SMCard>
)

interface IMCard {
	tag: 'h2' | 'h3' | 'h4' | 'h5'
	title: string
}

export default MCard
export { SMCard }
