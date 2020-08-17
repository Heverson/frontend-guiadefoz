import styled from 'styled-components'
import { useRouter } from 'next/router'
import {
  SWrapper,
  SFlex,
  SFlexItem,
  SImage,
  STitle,
  SText
} from 'components/Blocks'
import Posty from 'components/Posty'
import Author from 'components/Author'

const SPostContent = styled.div`
  position: relative;
  > ${SImage} {
    height: 400px;
    margin-bottom: 2rem;
  }
  > p {
    margin: 1.5rem 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1000px) {
    > ${SImage} {
      height: 400px;
    }
  }
  @media (min-width: 1200px) {
    > ${SImage} {
      height: 450px;
    }
  }
  @media (min-width: 1400px) {
    > ${SImage} {
      height: 500px;
    }
  }
`
const SPostSection = styled.section`
  position: relative;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #ccc;
  > ${STitle} {
    margin-bottom: 1.5rem;
  }
  > ${SFlex} {
    align-items: flex-start;
    > ${SFlexItem} {
      width: 33.33333%;
    }
  }
`
const SPostSidebar = styled.aside`
  @media (min-width: 1000px) {
    position: absolute;
    top: 4rem;
    right: 1.5rem;
    width: calc(300px - 5rem);
  }
  @media (min-width: 1200px) {
    top: 5rem;
    right: 1rem;
    width: calc(350px - 5rem);
  }
  @media (min-width: 1400px) {
    width: calc(400px - 5rem);
  }
`
const SPost = styled.article`
  position: relative;
  overflow: hidden;
  display: block;
  @media (min-width: 1000px) {
    > ${SWrapper} {
      position: relative;
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

const Post = () => {
  const router = useRouter()

  return (
    <SPost>
      <SWrapper spacing="normal" isCenter>
        <SPostContent>
          <SImage src="/imagens/coffee.jpg" alt="" isCover />
          <SText size="small">6 de Julho 2020</SText>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut est,
            nobis culpa facere distinctio numquam natus rerum eveniet ea eos
            sequi.
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
        </SPostContent>
        <SPostSection>
          <STitle size="small" hasColon>Artigos relacionados</STitle>
          <SFlex spacing="normal">
            <SFlexItem>
              <Posty
                title="Maiores repudiandae magni perferendis asperiores"
                slug="post-01"
              />
            </SFlexItem>
            <SFlexItem>
              <Posty
                title="Maiores repudiandae magni perferendis asperiores"
                slug="post-01"
              />
            </SFlexItem>
            <SFlexItem>
              <Posty
                title="Maiores repudiandae magni perferendis asperiores"
                slug="post-01"
              />
            </SFlexItem>
          </SFlex>
        </SPostSection>
        <SPostSection>
          <STitle size="small" hasColon>Comentários</STitle>
          
        </SPostSection>
        <SPostSidebar>
          <Author
            name="Heverson Damasceno"
            bio="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugit
            animi officiis hic ipsum similique"
          />
        </SPostSidebar>
      </SWrapper>
    </SPost>
  )
}

export default Post
export { SPost }
