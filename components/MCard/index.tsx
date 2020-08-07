import styled from 'styled-components'
import { SWrap, SImg, STitle } from 'components/Blocks'
import Stars, { SStars } from 'components/Stars'

const SMCard = styled(SWrap)`
	position: relative;
	flex-wrap: nowrap;
	> ${SImg} {
		align-self: flex-start;
		width: 4rem;
		height: 4rem;
		object-fit: cover;
		border-radius: 0.5rem;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
	}
	> ${SWrap} {
		padding-left: 1rem;
		padding-bottom: 0.25rem;
		> ${STitle} {
			margin-bottom: 0.25rem;
			font-weight: 600;
			font-size: 1rem;
			line-height: 1.5;
		}
		> ${SStars} {
		}
	}
	@media (min-width: 800px) {
		> ${SImg} {
			width: 4.5rem;
			height: 4.5rem;
		}
	}
	@media (min-width: 1200px) {
		> ${SImg} {
			width: 5rem;
			height: 5rem;
		}
	}
`

const MCard = ({ tag, title }: IMCard) => (
	<SMCard as="article" isFlex>
		<SImg src="/imagens/cupcakes.jpg" alt="" />
		<SWrap>
			<STitle as={tag}>{title}</STitle>
			<Stars />
		</SWrap>
	</SMCard>
)

interface IMCard {
	tag: 'h2' | 'h3' | 'h4' | 'h5'
	title: string
}

export default MCard
export { SMCard }
