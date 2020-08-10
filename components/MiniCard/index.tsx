import styled from 'styled-components'
import { SWrapper, SImage, STitle } from 'components/Blocks'
import Stars, { SStars } from 'components/Stars'

const SMiniCard = styled(SWrapper)`
	position: relative;
	flex-wrap: nowrap;
	> ${SImage} {
		align-self: flex-start;
		width: 4rem;
		height: 4rem;
		object-fit: cover;
		border-radius: 0.5rem;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
	}
	> ${SWrapper} {
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
		> ${SImage} {
			width: 4.5rem;
			height: 4.5rem;
		}
	}
	@media (min-width: 1200px) {
		> ${SImage} {
			width: 5rem;
			height: 5rem;
		}
	}
`

const MiniCard = ({ tag, title }: IMiniCard) => (
	<SMiniCard as="article" isFlex>
		<SImage src="/imagens/cupcakes.jpg" alt="" />
		<SWrapper>
			<STitle as={tag}>{title}</STitle>
			<Stars />
		</SWrapper>
	</SMiniCard>
)

interface IMiniCard {
	tag: 'h2' | 'h3' | 'h4' | 'h5'
	title: string
}

export default MiniCard
export { SMiniCard }
