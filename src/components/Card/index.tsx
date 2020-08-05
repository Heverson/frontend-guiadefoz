//
import { SWrap, STitle, SButton, SImg } from 'components/Blocks'

//
import styled from 'styled-components'

//
const SCard = styled(SWrap)`
	padding: 1rem;
	background: #fff;
`

//
const Card = ({ title }: ICard) => (
	<SCard>
		<STitle>{title}</STitle>
		
	</SCard>
)

interface ICard {
	title: string
	rating: number
	region: 'CE' | 'VA' | 'VB'
}
