import styled from 'styled-components'
import { SWrapper, STitle, SText, SButton } from 'components/Blocks'
import Slider from 'components/Slider'
import Link from 'next/link'

const SShowcase = styled.section`
	position: relative;
	> ${SWrapper} {
		> ${STitle} {
			margin-bottom: 2rem;
		}
	}
`

const Showcase = () => (
	<SShowcase>
		<SWrapper spacing="normal" isCenter>
			<STitle size="normal">Categorias mais accesadas</STitle>
			<SText>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, veniam
				quisquam! Dolor, vel provident. Quaerat consequuntur repellendus
				laboriosam corrupti, error nam magni dicta, veniam excepturi ratione,
				necessitatibus expedita doloribus praesentium!
			</SText>
			<Slider />
			<Link href="/empresas" passHref>
				<SButton>Todas as categorias</SButton>
			</Link>
		</SWrapper>
	</SShowcase>
)

export default Showcase
