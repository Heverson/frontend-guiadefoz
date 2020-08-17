import styled from 'styled-components'
import Link from 'next/link'
import { SImage, STitle, SText, SLink } from 'components/Blocks'
import { Calendar } from '@styled-icons/boxicons-regular'

const SPosty = styled.article`
  position: relative;
  > ${SText} {
    display: flex;
    align-items: center;
  }
`

const Posty: React.FC<PostyProps> = ({ title }) => (
  <SPosty>
    <SImage src="/imagens/coffee.jpg" alt="" />
    <STitle size="xsmall">
      <Link href="/noticias/post-01" passHref>
        <SLink>{title}</SLink>
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
}

export default Posty
export { SPosty }
