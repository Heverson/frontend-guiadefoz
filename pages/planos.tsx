import styled from 'styled-components'
import { SWrapper, SFlex, SFlexItem, STitle } from 'components/Blocks'
import Parallax from 'components/Parallax'

const SPlansItem = styled.article`
  position: relative;
  text-align: center;
  background: #fff;
`
const SPlans = styled.article`
  position: relative;
  color: #455A64;
  background: #ECEFF1;
  > ${SWrapper} {
    > ${SFlex} {
      > ${SFlexItem} {
        width: 33.33333%;
        > ${SPlansItem} {
          
        }
      }
    }
  }
`

const Plans: React.FC<PlansProps> = ({}) => (
  <SPlans>
    <Parallax
      src="/imagens/cupcakes.jpg"
      alt=""
      title="Planos para cada empresa"
    />
    <SWrapper spacing="normal" isCenter>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam numquam
        nulla dolorum harum quis, tenetur reprehenderit est, voluptatum nihil
        labore a veritatis minus debitis eius corrupti? Sit quisquam velit
        maiores?
      </p>
      <SFlex spacing="xlarge">
        <SFlexItem>
          <SPlansItem>
            <STitle size="small">Plano Básico</STitle>
          </SPlansItem>
        </SFlexItem>
        <SFlexItem>
          <SPlansItem>
            <STitle size="small">Plano Avançado</STitle>
          </SPlansItem>
        </SFlexItem>
        <SFlexItem>
          <SPlansItem>
            <STitle size="small">Plano Premium</STitle>
          </SPlansItem>
        </SFlexItem>
      </SFlex>
    </SWrapper>
  </SPlans>
)

interface PlansProps {}

export default Plans
