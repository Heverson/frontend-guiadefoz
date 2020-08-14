import styled from 'styled-components'
import { STitle, SText, SButton } from 'components/Blocks'
import { CoffeeTogo, Dumbbell } from '@styled-icons/boxicons-regular'
import Circle, { SCircle } from 'components/Circle'

const SDumbbell = styled(Dumbbell)``

const SCategory = styled.article`
  display: block;
  padding: 1.5rem 1rem;
  text-align: center;
  background: #fff;
  border-bottom: 1px solid #eee;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  > ${STitle} {
    margin: 1rem 0 0.25rem;
    color: #222;
  }
  > ${SText} {
    margin: 0.25rem 0 1.5rem;
    color: #555;
    font-weight: 500;
  }
  @media (min-width: 800px) {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    transition: box-shadow 0.25s, transform 0.25s;
    &:hover {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.05);
      transform: translate3d(0, -0.5rem, 0);
    }
    &:active {
      box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.075);
      transform: translate3d(0, -0.375rem, 0);
    }
  }
`

const Category = ({ count, title }: CategoryProps) => (
  <SCategory>
    <Circle>
      <SDumbbell />
    </Circle>
    <STitle size="large">{count}</STitle>
    <SText size="small">{title}</SText>
    <SButton>Ver todos</SButton>
  </SCategory>
)

interface CategoryProps {
  count: number
  title: string
}

export default Category
export { SCategory }
