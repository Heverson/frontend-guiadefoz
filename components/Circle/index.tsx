import styled from 'styled-components'

const SCircle = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 5rem;
  height: 5rem;
  padding: 1rem;
  border-radius: 2.5rem;
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.1);
  > svg {
    width: 3rem;
    height: 3rem;
  }
`

const Circle = ({ children }: ICircle) => <SCircle>{children}</SCircle>

interface ICircle {
  children: any
}

export default Circle
export { SCircle }
