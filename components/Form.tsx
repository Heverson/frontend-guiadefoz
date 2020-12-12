import { FC } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { useFormik } from 'formik'
import { SFlex, SFlexItem, SText, SButton } from 'components/Styled'

const SInput = styled.input`
  display: block;
`

const SForm = styled.form`
  display: block;
  margin: 1rem 0;
  > ${SFlex} {
    > ${SFlexItem} {
      > ${SText} {
        margin-bottom: .5rem;
        font-weight: 600;
      }
    }
  }
`

const Form: FC<IForm> = ({ items }) => {
  
  const initialValues = {}
  
  items.forEach((item) => {
    initialValues[item.name] = ''
  })
  
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values: any) => {
      
      if (values.username && values.password) {
        
        alert(JSON.stringify(values, null, 2))
        
      }
      
    }
  })
  
  return (
    <SForm onSubmit={formik.handleSubmit}>
      <SFlex spacing="normal">
        {items.map((item, index) => (
          <SFlexItem key={index}>
            <SText as="label" htmlFor={item.name}>{item.label}:</SText>
            <SInput id={item.name} name={item.name} type={item.type} value={formik.values[item.name]} onChange={formik.handleChange}/>
          </SFlexItem>
        ))}
      </SFlex>
      <SButton as="button" type="submit">
        Enviar
      </SButton>
    </SForm>
  )
}

interface IForm {
  items: {
    name: string,
    label: string,
    type: 'text' | 'email' | 'password'
  }[]
}

export default Form
export { SForm }