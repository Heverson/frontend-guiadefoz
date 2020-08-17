import styled from 'styled-components'
import Link from 'next/link'
import { SImage, STitle, SText, SLink } from 'components/Blocks'
import { Calendar } from '@styled-icons/boxicons-regular'

const SPosty = styled.article`
  position: relative;
  > ${SImage} {
    height: 200px;
    border-radius: .25rem;
  }
  > ${STitle} {
    margin: 1rem 0 .75rem;
    font-size: 1rem;
    line-height: 1.4;
    > ${SLink} {
      
    }
  }
  > ${SText} {
    display: flex;
    align-items: center;
  }
  @media (min-width: 1200px) {
    > ${SImage} {
      height: 160px;
    }
  }
  @media (min-width: 1400px) {
    > ${SImage} {
      height: 180px;
    }
  }
`

const Posty: React.FC<PostyProps> = ({ title, slug }) => (
  <SPosty>
    <SImage src="/imagens/coffee.jpg" alt="" isCover />
    <STitle size="xsmall">
      <Link href={`/noticias/${slug}`} passHref>
        <SLink hasPseudo>{title}</SLink>
      </Link>
    </STitle>
    <SText size="small">
      <Calendar />
      06 Julho 2020 | Heverson Damasceno
    </SText>
  </SPosty>
)

interface PostyProps {
  title: string
  slug: string
}

export default Posty
export { SPosty }
