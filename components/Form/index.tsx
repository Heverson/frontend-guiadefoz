import { useState } from 'react'
import styled from 'styled-components'
import { SItems, SItem, SButton } from 'components/Blocks'
import formik from 'formik'

const SLabel = styled.label`
	display: block;
	pointer-events: none;
`
const SInput = styled.input`
	display: block;
	border: none;
	outline: none;
`
const SFormItem = styled.div`
	display: block;
`
const SForm = styled.form`
	display: flex;
`

const FormItem = () => {
	const [focus, setFocus] = useState(false)
	const [input, setInput] = useState(false)
	return (
		<SFormItem>
			<SLabel htmlFor="nome">Prueba:</SLabel>
			<SInput
				id="nome"
				name="nome"
				onFocus={() => setFocus(true)}
				onInput={() => setInput(true)}
				onBlur={() => setFocus(false)}
			/>
		</SFormItem>
	)
}

interface IFormItem {}

const Form = ({ fields }: IForm ) => {
	return (
		<SForm>
			<SItems spacing="small">
				{console.log(typeof fields)}
				{/* {fields.map((field) => (
					<SItem key={field.id}>
						<FormItem />
					</SItem>
				))} */}
				<SButton type="submit">Enviar</SButton>
			</SItems>
		</SForm>
	)
}

interface IForm {
	fields: object[]
}

export default Form
export { SForm, SFormItem, SLabel, SInput }
