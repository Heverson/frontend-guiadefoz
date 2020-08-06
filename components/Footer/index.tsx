import Link from 'next/link'
import styled from 'styled-components'
import { FacebookSquare } from '@styled-icons/boxicons-logos'
import { SWrap, SItems, SItem, STitle, SText, SLink } from 'components/Blocks'
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

const SSection = styled.section`
	> ${STitle} {
		margin-bottom: 1rem;
	}
	@media (min-width: 800px) {
	}
`

const SFooter = styled.footer`
	position: relative;
	color: #b0bec5;
	text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
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
				&:nth-child(1),
				&:nth-child(2) {
					width: calc(50% - 1rem);
				}
			}
		}
	}
	@media (min-width: 1000px) {
		> ${SWrap} {
			> ${SSection} {
				&:nth-child(1),
				&:nth-child(2),
				&:nth-child(3) {
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
	${STitle} {
		color: #fff;
	}
`

const Footer = () => (
	<SFooter>
		<SWrap isFlex isCenter spacing="small">
			<SSection>
				<STitle as="h4" size="xsmall">
					Guia de Foz
				</STitle>
				<SText size="small">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse nihil
					illum eaque ullam labore praesentium. Expedita explicabo assumenda.
				</SText>
				<SItems spacing="minimal">
					<SItem>
						<SLink href="#">
							<FacebookSquare />
							Facebook
						</SLink>
					</SItem>
				</SItems>
			</SSection>
			<SSection>
				<STitle as="h4" size="xsmall">
					Informações
				</STitle>
				<SItems spacing="small">
					<SItem>
						<Link href="/" passHref>
							<SLink>Sobre nós</SLink>
						</Link>
					</SItem>
					<SItem>
						<Link href="/" passHref>
							<SLink>Sobre nós</SLink>
						</Link>
					</SItem>
					<SItem>
						<Link href="/" passHref>
							<SLink>Sobre nós</SLink>
						</Link>
					</SItem>
					<SItem>
						<Link href="/" passHref>
							<SLink>Sobre nós</SLink>
						</Link>
					</SItem>
				</SItems>
			</SSection>
			<SSection>
				<STitle as="h4" size="xsmall">
					Últimas empresas
				</STitle>
				<SItems spacing="small">
					{locals.map((local, index) => (
						<SItem key={index}>
							<MCard tag="h5" title={local.name} />
						</SItem>
					))}
				</SItems>
			</SSection>
			<SSection>
				<STitle as="h4" size="xsmall">
					Boletim de notícias
				</STitle>
				<Form />
			</SSection>
		</SWrap>
	</SFooter>
)

export default Footer
