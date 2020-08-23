import styled from 'styled-components'
import { SImage, SText } from 'components/Blocks'

const SCmntHead = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  > ${SImage} {
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
  }
  > ${SText} {
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.bluegray[6]};
    font-weight: 600;
  }
  @media (min-width: 600px) {
    display: block;
    > ${SImage} {
      width: 5rem;
      height: 5rem;
      border-radius: 2.5rem;
    }
    > ${SText} {
      margin-top: 0.5rem;
      text-align: center;
    }
  }
  @media (min-width: 800px) {
    > ${SImage} {
      width: 5.5rem;
      height: 5.5rem;
      border-radius: 2.75rem;
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
  @media (min-width: 600px) {
    padding: 1rem;
    margin-left: 1.5rem;
  }
  @media (min-width: 800px) {
    padding: 1.25rem;
    &::after {
      top: 2.25rem;
    }
  }
  @media (min-width: 1200px) {
    padding: 1.5rem;
    &::after {
      top: 2.5rem;
    }
  }
`
const SComment = styled.article`
  > ${SCmntHead} {
  }
  > ${SCmntBody} {
  }
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
  @media (min-width: 800px) {
    > ${SCmntHead} {
      width: 5.5rem;
    }
  }
  @media (min-width: 1200px) {
    > ${SCmntHead} {
      width: 6rem;
    }
  }
`

const Comment = ({ name, description }: IComment) => (
  <SComment>
    <SCmntHead>
      <SImage src="/imagens/italo.jpg" alt="" isCover />
      <SText as="h3" size="small">
        {name}
      </SText>
    </SCmntHead>
    <SCmntBody>
      <SText>{description}</SText>
      <SText as="time" size="small">
        Fas 3 días
      </SText>
    </SCmntBody>
  </SComment>
)

interface IComment {
  name: string
  description: string
}

export default Comment
export { SComment, SCmntHead, SCmntBody }
