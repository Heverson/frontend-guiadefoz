import styled from 'styled-components'
import { SWrap, STitle, SText, SItems, SItem } from 'components/Blocks'
import Form, { SForm } from 'components/Form'
import MCard, { SMCard } from 'components/MCard'

const locals = [
	{
		name: 'Empresa 1'
	},
	{
		name: 'Empresa 2'
	},
	{
		name: 'Empresa 3'
	}
]

const SSection = styled(SWrap)`
	> ${STitle} {
		margin-bottom: 1rem;
		color: #fff;
	}
	@media (min-width: 800px) {
		
	}
`

const SFooter = styled(SWrap)`
	position: relative;
	color: #B0BEC5;
	text-shadow: 0 1px 1px rgba(0, 0, 0, .25);
	background: #263238;
	> ${SWrap} {
		align-items: flex-start;
		> ${SSection} {
			width: 100%;
			margin-bottom: 2rem;
			&:nth-child(1) {
				order: 2;
			}
			&:nth-child(2) {
				order: 3;
			}
			&:nth-child(3) {
				order: 4;
				margin-bottom: 0;
			}
			&:nth-child(4) {
				order: 1;
			}
		}
	}
	@media (min-width: 600px) {
		> ${SWrap} {
			justify-content: space-between;
			> ${SSection} {
				&:nth-child(1), &:nth-child(2) {
					width: calc(50% - 1rem);
				}
			}
		}
	}
	@media (min-width: 1000px) {
		> ${SWrap} {
			> ${SSection} {
				&:nth-child(1), &:nth-child(2), &:nth-child(3) {
					width: calc(33.33333% - 1.33333rem);
					margin-bottom: 0;
				}
				&:nth-child(4) {
					width: 100%;
				}
			}
		}
	}
	@media (min-width: 1400px) {
		> ${SWrap} {
			> ${SSection} {
				order: 0 !important;
				width: calc(25% - 1.5rem) !important;
				margin-bottom: 0 !important;
			}
		}
	}
`

const Footer = () => (
	<SFooter as="footer">
		<SWrap isFlex isCenter spacing="small">
			<SSection as="section">
				<STitle as="h4" size="xsmall">Guia de Foz</STitle>
				<SText size="small">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse nihil
					illum eaque ullam labore praesentium. Expedita explicabo assumenda.
				</SText>
			</SSection>
			<SSection as="section">
				<STitle as="h4" size="xsmall">Informações</STitle>
				<SText size="small">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse nihil
					illum eaque ullam labore praesentium. Expedita explicabo assumenda.
				</SText>
			</SSection>
			<SSection as="section">
				<STitle as="h4" size="xsmall">Últimas empresas</STitle>
				<SItems spacing="small">
					{locals.map((local, index) => (
						<SItem key={index}>
							<MCard />
						</SItem>
					))}
				</SItems>
			</SSection>
			<SSection as="section">
				<STitle as="h4" size="xsmall">Boletim de notícias</STitle>
				<Form />
			</SSection>
		</SWrap>
	</SFooter>
)

export default Footer
