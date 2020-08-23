import styled from 'styled-components'
import { SWrapper, SImage, SText } from 'components/Styled'
import { TimeFive } from '@styled-icons/boxicons-regular'
import { Map } from '@styled-icons/boxicons-solid'

const SCmntHead = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  > ${SImage} {
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
  }
  > ${SText} {
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.bluegray[6]};
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5;
  }
  @media (min-width: 600px) {
    display: block;
    margin-bottom: 0;
    > ${SImage} {
      width: 5rem;
      height: 5rem;
      border-radius: 2.5rem;
    }
    > ${SText} {
      margin-top: 0.75rem;
      margin-left: 0;
      font-weight: 400;
      font-size: 0.9rem;
      text-align: center;
    }
  }
  @media (min-width: 1200px) {
    > ${SImage} {
      width: 6rem;
      height: 6rem;
      border-radius: 3rem;
    }
  }
`
const SCmntBody = styled.div`
  position: relative;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.gray[7]};
  background: #fff;
  border-bottom: 1px solid #cfd8dc;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  &::after {
    position: absolute;
    top: -0.5rem;
    left: 1.5rem;
    width: 1rem;
    height: 1rem;
    content: '';
    background: #fff;
    transform: rotateZ(45deg);
  }
  > ${SWrapper} {
    justify-content: space-between;
    margin: 0.75rem -0.5rem -0.25rem;
    color: ${({ theme }) => theme.colors.gray[5]};
    > ${SText} {
      padding: 0.25rem 0.5rem;
    }
  }
  @media (min-width: 600px) {
    margin-left: 1.5rem;
    &::after {
      top: 2rem;
      left: -0.5rem;
    }
  }
  @media (min-width: 800px) {
    padding: 1.25rem;
  }
  @media (min-width: 1200px) {
    padding: 1.5rem;
    &::after {
      top: 2.5rem;
    }
  }
`
const SComment = styled.article`
  @media (min-width: 600px) {
    display: flex;
    align-items: flex-start;
    > ${SCmntHead} {
      flex-shrink: 0;
      width: 5rem;
    }
    > ${SCmntBody} {
      flex-grow: 1;
    }
  }
  @media (min-width: 1200px) {
    > ${SCmntHead} {
      width: 6rem;
    }
  }
`

const Comment: React.FC<CommentProps> = ({ name, description }) => (
  <SComment>
    <SCmntHead>
      <SImage src="/imagens/italo.jpg" alt="" isCover />
      <SText as="h3">{name}</SText>
    </SCmntHead>
    <SCmntBody>
      <SText>{description}</SText>
      <SWrapper as="p" isFlex>
        <SText as="time" size="small">
          <TimeFive />
          Faz 3 días
        </SText>
        <SText as="span" size="small">
          <Map />
          Morador de Porto Meira
        </SText>
      </SWrapper>
    </SCmntBody>
  </SComment>
)

interface CommentProps {
  name: string
  description: string
}

export default Comment
export { SComment, SCmntHead, SCmntBody }
