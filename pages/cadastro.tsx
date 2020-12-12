import styled from 'styled-components'
import { SWrapper, STitle, SText } from 'components/Blocks'
import Form from 'components/Form'

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
      <Form items={[
        {
          name: 'username',
          label: 'Nome de usuário',
          type: 'text'
        },
        {
          name: 'password',
          label: 'Senha',
          type: 'password'
        }
      ]}/>
    </SWrapper>
  </SSignup>
)

export default Signup
