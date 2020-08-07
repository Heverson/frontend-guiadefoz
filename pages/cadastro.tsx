import styled from 'styled-components'
import { SWrap, STitle, SText } from 'components/Blocks'

const SSignup = styled.section`
	overflow: hidden;
	position: relative;
`

const Signup = () => (
	<SSignup>
		<SWrap spacing="large" isCenter>
			<STitle as="h1" size="large">
				Cadastre-se agora
			</STitle>
			<SText size="large">É simples e gratuito!</SText>
		</SWrap>
	</SSignup>
)

export default Signup
