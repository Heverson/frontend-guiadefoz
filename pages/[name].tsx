import styled from 'styled-components'
import { SWrapper, STitle } from 'components/Blocks'

const SCompany = styled.article`
	overflow: hidden;
	position: relative;
`

const Company = () => (
	<SCompany>
		<SWrapper spacing="large" isCenter>
			<STitle size="large">Bete Empadinhas</STitle>
		</SWrapper>
	</SCompany>
)

export default Company
