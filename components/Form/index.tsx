import styled from 'styled-components'
import { SWrap, SItems, SItem, SButton } from 'components/Blocks'

const SForm = styled(SWrap)`
	display: block;
	width: 100%;
	> ${SItems} {
		> ${SItem} {
			width: 100%;
			> input {
				width: 100%;
			}
		}
	}
`

const Form = () => (
	<SForm as="form">
		<SItems as="div">
			<SItem as="div">
				<input type="text" required />
			</SItem>
			<SItem as="div">
				<SButton as="button">Enviar</SButton>
			</SItem>
		</SItems>
	</SForm>
)

export default Form

export { SForm }