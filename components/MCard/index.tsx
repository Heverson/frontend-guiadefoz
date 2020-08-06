import styled from 'styled-components'
import { SWrap, SImg, SText } from 'components/Blocks'
import Stars, { SStars } from 'components/Stars'

const SMCard = styled.article`
	position: relative;
	min-height: 4rem;
	padding-left: 5rem;
	> ${SImg} {
		position: absolute;
		top: 0;
		left: 0;
		width: 4rem;
		height: 4rem;
		object-fit: cover;
		border-radius: .5rem;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
	}
	> ${SText} {
		font-weight: 600;
		line-height: 1.5;
		letter-spacing: .1rem;
	}
	> ${SStars} {
		
	}
	@media (min-width: 800px) {
		min-height: 4.5rem;
		padding-left: 5.5rem;
		> ${SImg} {
			width: 4.5rem;
			height: 4.5rem;
		}
	}
	@media (min-width: 1200px) {
		min-height: 5rem;
		padding-left: 6rem;
		> ${SImg} {
			width: 5rem;
			height: 5rem;
		}
	}
`

const MCard = ({ tag, title }: IMCard) => (
	<SMCard>
		<SImg src="/imagens/cupcakes.jpg" alt="" />
		<SText as={tag} size="large">{title}</SText>
		<Stars />
	</SMCard>
)

interface IMCard {
	tag: 'h2' | 'h3' | 'h4' | 'h5'
	title: string
}

export default MCard
export { SMCard }
