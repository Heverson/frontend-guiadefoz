import { useState } from 'react'
import styled, { css } from 'styled-components'
import { SFlex, SFlexItem, SButton } from 'components/Blocks'
import { useFormik } from 'formik'

const SLabel = styled.label`
	position: absolute;
	top: 1rem;
	left: 1rem;
	display: block;
	pointer-events: none;
	color: #999;
	line-height: 1;
	letter-spacing: 0.05rem;
	transition: opacity 0.25s;
`

const SInput = styled.input`
	overflow: hidden;
	display: block;
	height: 3rem;
	padding: 1rem;
	line-height: 1;
	letter-spacing: 0.05rem;
	border: none;
	outline: none;
	border-radius: 0.5rem;
	box-shadow: inset 0 0 0 1px #eee;
	transition: box-shadow 0.25s;
`

const SFormItem = styled.div<ISFormItem>`
	position: relative;
	display: block;
	&:hover {
		> ${SLabel} {
			opacity: 0.75;
		}
		> ${SInput} {
			box-shadow: inset 0 0 0 1px #ddd;
		}
	}
	${({ isFocus }) =>
		isFocus &&
		css`
			> ${SLabel} {
				opacity: 0.5 !important;
			}
			> ${SInput} {
				box-shadow: inset 0 0 0 1px #ccc !important;
			}
		`}
	${({ isInput }) =>
		isInput &&
		css`
			> ${SLabel} {
				opacity: 0 !important;
			}
			> ${SInput} {
				box-shadow: inset 0 0 0 1px #1e88e5 !important;
			}
		`}
`

interface ISFormItem {
	isFocus: boolean
	isInput: boolean
}

const SForm = styled.form<ISForm>`
	display: flex;
`

interface ISForm {
	onSubmit?: object
}

const FormItem = ({ name, label, value, onChange }: IFormItem) => {
	const [isFocus, isFocusState] = useState(false)
	const [isInput, isInputState] = useState(false)
	return (
		<SFormItem isFocus={isFocus} isInput={isInput}>
			<SLabel htmlFor={name}>{label}</SLabel>
			<SInput
				id={name}
				name={name}
				value={value}
				onFocus={() => isFocusState(true)}
				onInput={(ev: React.ChangeEvent<HTMLInputElement>) => {
					isInputState(ev.target.value !== '')
					onChange()
				}}
				onBlur={() => isFocusState(false)}
			/>
		</SFormItem>
	)
}

interface IFormItem {
	name: string
	label: string
	value?: string
	onChange?: any
}

const Form = ({ fields }: IForm) => {
	console.log(fields)
	const formik = useFormik({
		initialValues: {
			keyword: '',
			category: '',
			region: ''
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
		}
	})
	return (
		<SForm onSubmit={formik.handleSubmit}>
			
			{fields && fields.map(({ name, label }) => (
				<input
					id={name}
					name={name}
					type="text"
					value={formik.values[name]}
					onChange={formik.handleChange}
					required
				/>
			))}
			<button type="submit">Enviar</button>
			{/* <SItems spacing="normal" isAuto>
				{fields &&
					fields.map(({ name, label }: IFormItem, index) => (
						<SItem key={index}>
							<input id={name} name={name} type="text" value={formik.values[name]} onChange={formik.handleChange} />
						</SItem>
					))}
			</SItems>
			<SButton type="submit">Enviar</SButton> */}
		</SForm>
	)
}

interface IForm {
	fields: IFormItem[]
}

export default Form
export { SForm, SFormItem, SLabel, SInput }
