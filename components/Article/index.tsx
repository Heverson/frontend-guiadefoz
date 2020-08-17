import styled from 'styled-components'
import {
  SFlex,
  SFlexItem,
  SImage,
  STitle,
  SText,
  SLink
} from 'components/Blocks'
import Link from 'next/link'
import { Calendar, CommentDetail } from '@styled-icons/boxicons-regular'

const SArticle = styled.article`
  overflow: hidden;
  position: relative;
  padding: 1.5rem;
  color: #777;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  > ${SImage} {
    width: calc(100% + 3rem);
    height: 300px;
    margin: -1.5rem -1.5rem 1.5rem;
  }
  > ${STitle} {
    margin-bottom: 1.5rem;
    color: #222;
    font-weight: 600;
  }
  > ${SFlex} {
    justify-content: space-between;
    margin-top: 1.5rem;
    > ${SFlexItem} {
      display: flex;
      width: auto;
      color: #555;
      font-weight: 600;
      > svg {
        width: 1em;
        width: 1em;
        margin-right: 0.5em;
      }
    }
  }
  @media (min-width: 800px) {
    padding: 1.75rem;
    > ${SImage} {
      width: calc(100% + 3.5rem);
      height: 350px;
      margin: -1.75rem -1.75rem 1.75rem;
    }
  }
  @media (min-width: 1200px) {
    padding: 2rem;
    > ${SImage} {
      width: calc(100% + 4rem);
      height: 400px;
      margin: -2rem -2rem 2rem;
    }
  }
`

const Article = ({ src, alt, title, intro, slug }: ArticleProps) => (
  <SArticle>
    {src && <SImage src={src} alt={alt} isCover />}
    <STitle size="small">
      <Link href={`/noticias/${slug}`} passHref>
        <SLink>{title}</SLink>
      </Link>
    </STitle>
    <SText>{intro}</SText>
    <SFlex as="p">
      <SFlexItem as="span">
        <Calendar />
        06 Julho 20
      </SFlexItem>
      <SFlexItem as="span">
        <CommentDetail />5 comentários
      </SFlexItem>
    </SFlex>
  </SArticle>
)

interface ArticleProps {
  src?: string
  alt?: string | ''
  title: string
  intro: string
  slug: string
}

export default Article
export { SArticle }
