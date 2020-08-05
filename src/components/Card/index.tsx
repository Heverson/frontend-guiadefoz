//
import { SWrap, SImg, STitle, SLink } from 'components/Blocks'
import styled from 'styled-components'
import Link from 'next/link'

//
const SCard = styled(SWrap)`
	overflow: hidden;
	position: relative;
	padding: 1rem;
	background: #fff;
	border-radius: .5rem;
	box-shadow: 0 .25rem .5rem rgba(0, 0, 0, .1);
	> ${SImg} {
		width: calc(100% + 2rem);
		height: 12rem;
		margin: -1rem -1rem 1rem;
		object-fit: cover;
	}
`

//
const Card = ({ title }: ICard) => (
	<SCard as="article">
		<SImg src="/imagens/cupcakes.jpg" alt=""/>
		<STitle as="h2" size="xsmall">
			<Link href="/bete-empadinhas" passHref>
				<SLink>{title}</SLink>
			</Link>
		</STitle>
	</SCard>
)

interface ICard {
	title: string
	rating: number
	region: 'CE' | 'VA' | 'VB'
}

export default Card

export { SCard }