import styled from 'styled-components'
import { SWrapper, STitle, SText } from 'components/Blocks'

const SSignup = styled.section`
  overflow: hidden;
  position: relative;
`

const Signup = () => (
  <SSignup>
    <SWrapper spacing="large" isCenter>
      <STitle as="h1" size="large">
        Cadastre-se agora
      </STitle>
      <SText size="large">É simples e gratuito!</SText>
    </SWrapper>
  </SSignup>
)

export default Signup
