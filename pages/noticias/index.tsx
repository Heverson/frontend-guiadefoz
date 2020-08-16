import styled from 'styled-components'
import {
  SWrapper,
  SFlex,
  SFlexItem,
  SImage,
  STitle,
  SText
} from 'components/Blocks'
import Parallax from 'components/Parallax'
import Article from 'components/Article'

const SNews = styled.section`
  overflow: hidden;
  position: relative;
  > ${SWrapper} {
    > ${STitle} {
      margin-bottom: 2rem;
    }
  }
  @media (min-width: 1000px) {
    > ${SWrapper} {
      padding-right: 300px;
    }
  }
  @media (min-width: 1200px) {
    > ${SWrapper} {
      padding-right: 350px;
    }
  }
  @media (min-width: 1400px) {
    > ${SWrapper} {
      padding-right: 400px;
    }
  }
`

const News = () => (
  <SNews>
    <Parallax title="Notícias de Foz do Iguaçu" description="asdfasd" src="/imagens/birds.jpg" alt="" />
    <SWrapper spacing="small" isCenter>
      <SFlex spacing="xlarge">
        <SFlexItem>
          <Article
            src="/imagens/coffee.jpg"
            alt=""
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            intro="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi, iusto explicabo laboriosam sunt illum quibusdam eos laborum amet odio inventore, beatae aliquid incidunt vero illo doloribus ex nam accusamus."
          />
        </SFlexItem>
        <SFlexItem>
          <Article
            src="/imagens/coffee.jpg"
            alt=""
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            intro="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi, iusto explicabo laboriosam sunt illum quibusdam eos laborum amet odio inventore, beatae aliquid incidunt vero illo doloribus ex nam accusamus."
          />
        </SFlexItem>
        <SFlexItem>
          <Article
            src="/imagens/coffee.jpg"
            alt=""
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            intro="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi, iusto explicabo laboriosam sunt illum quibusdam eos laborum amet odio inventore, beatae aliquid incidunt vero illo doloribus ex nam accusamus."
          />
        </SFlexItem>
      </SFlex>
    </SWrapper>
  </SNews>
)

export default News
