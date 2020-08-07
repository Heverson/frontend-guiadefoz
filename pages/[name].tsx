import styled from 'styled-components'
import { SWrap, STitle } from 'components/Blocks'

const SCompany = styled.article`
	overflow: hidden;
	position: relative;
`

const Company = () => (
	<SCompany>
		<SWrap spacing="large" isCenter>
			<STitle size="large">Bete Empadinhas</STitle>
		</SWrap>
	</SCompany>
)

export default Company
