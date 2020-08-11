import styled from 'styled-components'
import { STitle, SText } from 'components/Blocks'

const SComment = styled.article`
	background: #fff;
`

const Comment = ({ name, description }: IComment) => (
	<SComment>
		<STitle size="xsmall">{name}</STitle>
		<SText size="small">{description}</SText>
	</SComment>
)

interface IComment {
	name: string
	description: string
}

export default Comment

export { SComment }
