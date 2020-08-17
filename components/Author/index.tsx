import styled, { css } from 'styled-components'
import { SFlex, SFlexItem, SImage, STitle, SText } from 'components/Blocks'

const shadowCSS = css`
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
`

const SAuthor = styled.section`
  position: relative;
  overflow: hidden;
  padding: 1rem;
  background: #fff;
  border-radius: .5rem;
  ${shadowCSS}
  > ${SFlex} {
    > ${SFlexItem} {
      width: 25%;
    }
  }
  @media (min-width: 800px) {
    padding: 1.25rem;
  }
  @media (min-width: 1000px) {
    text-align: center;
  }
  @media (min-width: 1200px) {
    padding: 1.5rem;
  }
`

const Author: React.FC<AuthorProps> = ({ name, bio }) => (
  <SAuthor>
    <STitle size="xsmall">{name}</STitle>
    <SImage src="" alt="" />
    <SText size="small">{bio}</SText>
    <SFlex spacing="small">
      <SFlexItem>Facebook</SFlexItem>
      <SFlexItem>Twitter</SFlexItem>
      <SFlexItem>YouTube</SFlexItem>
      <SFlexItem>Instagram</SFlexItem>
    </SFlex>
  </SAuthor>
)

interface AuthorProps {
  name: string
  bio: string
}

export default Author
export { SAuthor }
