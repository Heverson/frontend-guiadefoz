import styled from 'styled-components'
import { SImage, SText } from 'components/Blocks'

const SHead = styled.header`
	> ${SImage} {
		width: 4rem;
		height: 4rem;
		border-radius: 2rem;
	}
	> ${SText} {
		margin-top: 0.5rem;
		color: #455a64;
		font-weight: 400;
		text-align: center;
	}
	@media (min-width: 800px) {
		> ${SImage} {
			width: 5rem;
			height: 5rem;
			border-radius: 2.5rem;
		}
	}
	@media (min-width: 1200px) {
		> ${SImage} {
			width: 6rem;
			height: 6rem;
			border-radius: 3rem;
		}
	}
`

const SBody = styled.div`
	overflow: hidden;
	padding: 1rem;
	background: #fff;
	border-bottom: 1px solid #CFD8DC;
	border-radius: 0.5rem;
	box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
	> ${SText} {
	}
	@media (min-width: 800px) {
		padding: 1.25rem;
	}
	@media (min-width: 1200px) {
		padding: 1.5rem;
	}
`

const SComment = styled.article`
	display: flex;
	align-items: flex-start;
	> ${SHead} {
		flex-shrink: 0;
		width: 6rem;
	}
	> ${SBody} {
		flex-grow: 1;
	}
`

const Comment = ({ name, description }: IComment) => (
	<SComment>
		<SHead>
			<SImage src="/imagens/italo.jpg" alt="" isCover />
			<SText as="h3" size="small">
				{name}
			</SText>
		</SHead>
		<SBody>
			<SText>{description}</SText>
			<SText as="time" size="small">
				Fas 3 días
			</SText>
		</SBody>
	</SComment>
)

interface IComment {
	name: string
	description: string
}

export default Comment

export { SComment }
