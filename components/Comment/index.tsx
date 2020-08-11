import styled from 'styled-components'
import { SImage, STitle, SText } from 'components/Blocks'

const SComment = styled.article`
	position: relative;
	background: #fff;
	border-radius: 0.5rem;
	padding: 1.5rem;
	margin-left: 7.5rem;
	border-bottom: 1px solid #CFD8DC;
	box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.05);
	&::after {
		position: absolute;
		top: 2.5rem;
		left: -0.5rem;
		width: 1rem;
		height: 1rem;
		content: '';
		background: #fff;
		transform: rotateZ(45deg);
	}
	> ${SImage} {
		position: absolute;
		top: 0;
		left: -7.5rem;
		width: 6rem;
		height: 6rem;
		border-radius: 3rem;
		object-fit: cover;
	}
	> ${SText} {
		&:nth-child(2) {
			position: absolute;
			top: 6.5rem;
			left: -7.5rem;
			width: 6rem;
			color: #546E7A;
			font-weight: 500;
			text-align: center;
		}
	}
`

const Comment = ({ name, description }: IComment) => (
	<SComment>
		<SImage src="/imagens/italo.jpg" alt="" />
		<SText size="small">{name}</SText>
		<SText size="small">{description}</SText>
		<SText as="time" size="small">
			Fas 3 días
		</SText>
	</SComment>
)

interface IComment {
	name: string
	description: string
}

export default Comment

export { SComment }
