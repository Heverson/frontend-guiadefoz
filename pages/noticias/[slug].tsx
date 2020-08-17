import styled from 'styled-components'
import { useRouter } from 'next/router'
import { SWrapper, SFlex, SFlexItem, SImage, STitle, SText } from 'components/Blocks'
import Posty from 'components/Posty'

const SPostSidebar = styled.aside`
  position: absolute;
`
const SPostRelated = styled.section`
  position: relative;
  > ${SFlex} {
    > ${SFlexItem} {
      width: 33.33333%;
    }
  }
`
const SPost = styled.article`
  position: relative;
  overflow: hidden;
  display: block;
  > ${SWrapper} {
    > ${SImage} {
      height: 400px;
      margin-bottom: 2rem;
    }
    > p {
      margin: 1.5rem 0;
    }
  }
  @media (min-width: 1000px) {
    > ${SWrapper} {
      padding-right: 300px;
      > ${SImage} {
        height: 400px;
      }
    }
  }
  @media (min-width: 1200px) {
    > ${SWrapper} {
      padding-right: 350px;
      > ${SImage} {
        height: 450px;
      }
    }
  }
  @media (min-width: 1400px) {
    > ${SWrapper} {
      padding-right: 400px;
      > ${SImage} {
        height: 500px;
      }
    }
  }
`

const Post = () => {
  const router = useRouter()

  return (
    <SPost>
      <SWrapper spacing="small" isCenter>
        <SImage src="/imagens/coffee.jpg" alt="" isCover />
        <STitle size="large">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </STitle>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ad
          distinctio ducimus expedita harum alias blanditiis recusandae, sit
          esse architecto officia fugit. Dolore, delectus aliquam! Expedita
          aliquam rerum error eum!
        </p>
        <blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut est, nobis
          culpa facere distinctio numquam natus rerum eveniet ea eos sequi.
        </blockquote>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          asperiores. Doloremque, excepturi! Obcaecati eaque rem delectus!
          Adipisci cum ab illum animi, ducimus quo necessitatibus error
          voluptatum fugiat. A, rem sed.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugit
          animi officiis hic ipsum similique, ipsa aperiam, nisi suscipit sit
          dolorum reprehenderit neque? Maiores repudiandae magni perferendis
          asperiores cumque nostrum?
        </p>
        <SPostRelated>
          <STitle size="small">Artigos relacionados</STitle>
          <SFlex>
            <SFlexItem>
              <Posty title="Maiores repudiandae magni perferendis asperiores" />
            </SFlexItem>
          </SFlex>
        </SPostRelated>
      </SWrapper>
    </SPost>
  )
}

export default Post
export { SPost }
