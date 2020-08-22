import styled from 'styled-components'
import { SImage, SText } from 'components/Blocks'

const SHead = styled.header`
  display: flex;
  > ${SImage} {
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
  }
  > ${SText} {
    color: #455a64;
    font-weight: 400;
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

const SBody = styled.div`
  position: relative;
  padding: 3rem 1rem 1rem;
  background: #fff;
  border-bottom: 1px solid #cfd8dc;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  @media (min-width: 600px) {
    padding: 1rem;
    margin-left: 1.5rem;
    &::after {
      position: absolute;
      top: 2rem;
      left: -0.5rem;
      width: 1rem;
      height: 1rem;
      content: '';
      background: #fff;
      transform: rotateZ(45deg);
    }
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
  > ${SHead} {
  }
  > ${SBody} {
  }
  @media (min-width: 600px) {
    display: flex;
    align-items: flex-start;
    > ${SHead} {
      flex-shrink: 0;
      width: 5rem;
    }
    > ${SBody} {
      flex-grow: 1;
    }
  }
  @media (min-width: 800px) {
    > ${SHead} {
      width: 5.5rem;
    }
  }
  @media (min-width: 1200px) {
    > ${SHead} {
      width: 6rem;
    }
  }
`

const Comment = ({ name, description }: IComment) => (
  <SComment>
    <SHead>
      <SImage src="/imagens/italo.jpg" alt="" isCover />
      <SText as="h3" size="small">
        {name}
      </SText>
    </SHead>
    <SBody>
      <SText>{description}</SText>
      <SText as="time" size="small">
        Fas 3 días
      </SText>
    </SBody>
  </SComment>
)

interface IComment {
  name: string
  description: string
}

export default Comment

export { SComment }
