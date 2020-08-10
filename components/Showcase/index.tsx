import styled from 'styled-components'
import {
	SWrapper,
	SFlex,
	SFlexItem,
	STitle,
	SText,
	SButton
} from 'components/Blocks'
import Slider, { SSlider } from 'components/Slider'
import Category from 'components/Category'
import Link from 'next/link'

const SShowcase = styled.section`
	position: relative;
	text-align: center;
	> ${SWrapper} {
		> ${STitle} {
			margin-bottom: 2rem;
		}
		> ${SText} {
			margin-bottom: 3rem;
		}
		> ${SSlider} {
			margin: -1rem;
			> ${SFlex} {
				> ${SFlexItem} {
					padding: 1rem;
				}
			}
		}
		> ${SButton} {
			margin-top: 3rem;
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
				laboriosam corrupti, error nam magni dicta.
			</SText>
			<Slider>
				<Category count={7} title="Academias" />
				<Category count={3} title="Restaurantes" />
				<Category count={12} title="Cafeterias" />
				<Category count={23} title="Comida rápida" />
			</Slider>
			<Link href="/empresas" passHref>
				<SButton>Todas as categorias</SButton>
			</Link>
		</SWrapper>
	</SShowcase>
)

export default Showcase
