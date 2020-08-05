//
import { SWrap, STitle, SText } from 'components/Blocks'

//
import styled from 'styled-components'

//
const SWelcome = styled(SWrap)`
	> ${SWrap} {
		> ${SText} {
			color: #666;
		}
	}
`

//
interface IWelcome {
	title: string
	description: string
	cards: any[]
}

const Welcome = ({ title, description, cards }: IWelcome) => (
	<SWelcome>
		<SWrap isCenter spacing="large">
			<STitle size="xlarge">{title}</STitle>
			<SText>{description}</SText>
		</SWrap>
	</SWelcome>
)

//
export default Welcome
