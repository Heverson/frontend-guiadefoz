import styled from 'styled-components'
import {
  SWrapper,
  SFlex,
  SFlexItem,
  STitle,
  SText,
  SButton
} from 'components/Styled'
import Slider, { SSlider } from 'components/Slider'
import Category from 'components/Category'
import { Dumbbell, Cookie, GlassesAlt } from '@styled-icons/boxicons-regular'
import { Capsule } from '@styled-icons/boxicons-solid'
import Link from 'next/link'

const SShowcase = styled.section`
  position: relative;
  text-align: center;
  > ${SWrapper} {
    > ${STitle} {
      margin-bottom: 2rem;
    }
    > ${SText} {
      margin-bottom: 3rem;
    }
    > ${SSlider} {
      margin: -1rem;
      > ${SFlex} {
        > ${SFlexItem} {
          padding: 1rem;
        }
      }
    }
    > ${SButton} {
      margin-top: 3rem;
    }
  }
`

const Showcase = () => (
  <SShowcase>
    <SWrapper spacing="normal" isCentralized>
      <STitle size="normal">Categorias mais accesadas</STitle>
      <SText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, veniam
        quisquam! Dolor, vel provident. Quaerat consequuntur repellendus
        laboriosam corrupti, error nam magni dicta.
      </SText>
      <Slider
        items={{
          '400': 1,
          '800': 2,
          '1200': 4
        }}
      >
        <Category count={7} title="Academias">
          <Dumbbell />
        </Category>
        <Category count={4} title="Farmácias">
          <Capsule />
        </Category>
        <Category count={12} title="Cafeterias">
          <Cookie />
        </Category>
        <Category count={23} title="Óticas">
          <GlassesAlt />
        </Category>
        <Category count={7} title="Academias">
          <Dumbbell />
        </Category>
        <Category count={4} title="Farmácias">
          <Capsule />
        </Category>
        <Category count={12} title="Cafeterias">
          <Cookie />
        </Category>
        <Category count={23} title="Óticas">
          <GlassesAlt />
        </Category>
      </Slider>
      <Link href="/empresas" passHref>
        <SButton>Todas as categorias</SButton>
      </Link>
    </SWrapper>
  </SShowcase>
)

export default Showcase
