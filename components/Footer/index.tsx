import Link from 'next/link'
import styled from 'styled-components'
import { SIcon, SFacebook, SInstagram, SDiscord } from 'components/Icons'
import { SWrapper, SFlex, SFlexItem, STitle, SText, SButton, SLink } from 'components/Blocks'
import MiniCard, { SMiniCard } from 'components/MiniCard'

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
		margin-bottom: 1.5rem;
	}
	@media (min-width: 800px) {
	}
	${SMiniCard} {
		> ${SText} {
			color: #fff;
		}
	}
`
const SSections = styled(SWrapper)`
	align-items: flex-start;
	${STitle} {
		color: #fff;
	}
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
	@media (min-width: 600px) {
		justify-content: space-between;
		> ${SSection} {
			&:nth-child(1),
			&:nth-child(2) {
				width: calc(50% - 1rem);
			}
		}
	}
	@media (min-width: 1000px) {
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
	@media (min-width: 1400px) {
		> ${SSection} {
			order: 0 !important;
			width: calc(25% - 1.5rem) !important;
			margin-bottom: 0 !important;
		}
	}
`
const SBottom = styled(SWrapper)`
	position: relative;
	color: #ECEFF1;
	background: #455A64;
	@media (min-width: 800px) {
		justify-content: space-between;
		padding-top: 2rem !important;
		padding-bottom: 2rem !important;
		> * {
			position: relative;
			z-index: 2;
		}
		&::after {
			content: '';
			position: absolute;
			top: 0;
			right: -999px;
			bottom: 0;
			left: -999px;
			z-index: 1;
			background: #455A64;
		}
	}
`
const SFooter = styled.footer`
	overflow: hidden;
	position: relative;
	color: #B0BEC5;
	text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
	background: #263238;
`

const Footer = () => (
	<SFooter>
		<SSections isFlex isCenter spacing="small">
			<SSection>
				<STitle as="h4" size="xsmall">
					Guia de Foz
				</STitle>
				<SText size="small">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse nihil
					illum eaque ullam labore praesentium. Expedita explicabo assumenda.
				</SText>
				<SFlex isAuto spacing="xsmall">
					<SFlexItem>
						<SButton href="#" target="_blank" type="empty" hasIcon>
							<SFacebook />
							Facebook
						</SButton>
					</SFlexItem>
					<SFlexItem>
						<SButton href="#" target="_blank" type="empty" hasIcon>
							<SInstagram />
							Instagram
						</SButton>
					</SFlexItem>
					<SFlexItem>
						<SButton href="#" target="_blank" type="empty" hasIcon>
							<SDiscord />
							Discord
						</SButton>
					</SFlexItem>
				</SFlex>
			</SSection>
			<SSection>
				<STitle as="h4" size="xsmall">
					Informações
				</STitle>
				<SFlex spacing="normal">
					<SFlexItem>
						<Link href="/" passHref>
							<SLink>Sobre nós</SLink>
						</Link>
					</SFlexItem>
					<SFlexItem>
						<Link href="/" passHref>
							<SLink>Sobre nós</SLink>
						</Link>
					</SFlexItem>
					<SFlexItem>
						<Link href="/" passHref>
							<SLink>Sobre nós</SLink>
						</Link>
					</SFlexItem>
					<SFlexItem>
						<Link href="/" passHref>
							<SLink>Sobre nós</SLink>
						</Link>
					</SFlexItem>
				</SFlex>
			</SSection>
			<SSection>
				<STitle as="h4" size="xsmall">
					Últimas empresas
				</STitle>
				<SFlex spacing="small">
					{locals.map((local, index) => (
						<SFlexItem key={index}>
							<MiniCard tag="h5" title={local.name} />
						</SFlexItem>
					))}
				</SFlex>
			</SSection>
			<SSection>
				<STitle as="h4" size="xsmall">
					Boletim de notícias
				</STitle>
			</SSection>
		</SSections>
		<SBottom isFlex isCenter spacing="small">
			<SText as="small" size="small">CopyRight!</SText>
			<SFlex isAuto spacing="normal">
				<SFlexItem>
					<Link href="/" passHref>
						<SLink>Início</SLink>
					</Link>
				</SFlexItem>
				<SFlexItem>
					<Link href="/" passHref>
						<SLink>Início</SLink>
					</Link>
				</SFlexItem>
				<SFlexItem>
					<Link href="/" passHref>
						<SLink>Início</SLink>
					</Link>
				</SFlexItem>
				<SFlexItem>
					<Link href="/" passHref>
						<SLink>Início</SLink>
					</Link>
				</SFlexItem>
				<SFlexItem>
					<Link href="/" passHref>
						<SLink>Início</SLink>
					</Link>
				</SFlexItem>
				<SFlexItem>
					<Link href="/" passHref>
						<SLink>Início</SLink>
					</Link>
				</SFlexItem>
			</SFlex>
		</SBottom>
	</SFooter>
)

export default Footer
