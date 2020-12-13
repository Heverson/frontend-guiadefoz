import { useEffect, useState, useRef, FormEvent } from 'react'
import { useFormik } from 'formik'
import styled from 'styled-components'
import { SWrapper, SText, SButton } from 'components/Styled'

interface ISFormItem {
  isFocus: boolean
  isInput: boolean
}

const SInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
`
const SFormItem = styled.li<ISFormItem>`
  display: block;
  width: 100%;
  > ${SText} {
    padding-bottom: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    &:last-child {
      padding: 0.5rem 0 0;
      color: red;
    }
  }
  > ${SInput} {
    
  }
`
const SForm = styled.form`
  display: block;
  margin: 1rem 0;
  > ${SWrapper} {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: -0.5rem;
    > ${SFormItem} {
      padding: 0.5rem;
    }
  }
`

const Form: React.FC<IForm> = ({ items }) => {
  const [values, setValues] = useState(null)
  const [errors, setErrors] = useState(null)

  const formOnSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    alert(JSON.stringify(values, null, 2))
  }

  const inputOnFocus = (ev: FormEvent<HTMLInputElement>) => {}

  const inputOnInput = (ev: FormEvent) => {
    const input = ev.target as HTMLInputElement
    setValues(values => ({...values, [input.name]: input.value}))
  }

  const inputOnBlur = () => {
    
  }
  
  useEffect(() => {
    let values = {}
    items.forEach(item => {
      values[item.name] = ''
    })
    setValues(values)
  }, [])
  
  useEffect(() => {
    
  }, [values])

  return (
    <SForm onSubmit={formOnSubmit} noValidate>
      <SWrapper as="ul">
        {items.map((item, index) => (
          <SFormItem key={index} isFocus={true} isInput={false}>
            <SText as="label" htmlFor={item.name}>
              {item.label}:
            </SText>
            <SInput
              id={item.name}
              name={item.name}
              type={item.type ?? 'text'}
              required={item.required}
              onFocus={inputOnFocus}
              onInput={inputOnInput}
              onBlur={inputOnBlur}
            />
          </SFormItem>
        ))}
      </SWrapper>
      <SButton as="button" type="submit">
        Enviar
      </SButton>
    </SForm>
  )
}

interface IFormItem {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'number' | 'url'
  required: boolean
}

interface IForm {
  items: IFormItem[]
}

export default Form
export { SForm }
