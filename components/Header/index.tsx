import Link from 'next/link'
import styled from 'styled-components'
import { SWrapper, SFlex, SFlexItem, SLink, SButton } from 'components/Blocks'
import { HomeSmile } from '@styled-icons/boxicons-regular'
import {
	Instagram,
	FacebookSquare,
	Discord
} from '@styled-icons/boxicons-logos'

const SNavigation = styled.nav`
	> ${SFlex} {
		> ${SFlexItem} {
			> ${SLink} {
				padding: 0.5rem;
				margin: -0.5rem;
			}
			&:first-child {
				display: none;
			}
		}
	}
	@media (min-width: 600px) {
		> ${SFlex} {
			> ${SFlexItem} {
				&:first-child {
					display: block;
				}
			}
		}
	}
	@media (min-width: 800px) {
		> ${SFlex} {
			> ${SFlexItem} {
				&:first-child {
					display: none;
				}
			}
		}
	}
	@media (min-width: 1000px) {
		> ${SFlex} {
			> ${SFlexItem} {
				&:first-child {
					display: block;
				}
			}
		}
	}
`
const SExtras = styled.div`
	width: calc(100% + 0.25rem);
	margin-top: 1.25rem;
	margin-left: -0.25rem;
	> ${SFlex} {
		flex-wrap: nowrap;
		> ${SFlexItem} {
			> ${SLink} {
				overflow: hidden;
				width: 2rem;
				padding: 0.25rem;
				white-space: nowrap;
				> svg {
					width: 1.5rem;
					height: 1.5rem;
				}
			}
			&:last-child {
				margin-left: auto;
			}
		}
	}
	@media (min-width: 800px) {
		width: auto;
		margin-top: 0;
		> ${SFlex} {
			> ${SFlexItem} {
				&:last-child {
					margin-left: 1rem;
				}
			}
		}
	}
`
const SHeader = styled.header`
	overflow: hidden;
	position: relative;
	z-index: 3;
	background: #fff;
	${SLink} {
		font-weight: 600;
		color: #888;
		&:hover {
			color: #444;
		}
		&:active {
			color: #ff4081;
		}
	}
	> ${SWrapper} {
		> ${SLink} {
			width: 100%;
			padding: 0.5rem;
			margin: -0.5rem -0.5rem 1rem;
			font-weight: 800;
			font-size: 1.5rem;
		}
	}
	@media (min-width: 800px) {
		> ${SWrapper} {
			padding-top: 2rem !important;
			padding-bottom: 2rem !important;
			> ${SLink} {
				font-size: 1.75rem;
			}
			> ${SNavigation} {
				margin-right: auto;
			}
			> ${SExtras} {
			}
		}
	}
	@media (min-width: 1200px) {
		> ${SWrapper} {
			> ${SLink} {
				font-size: 2rem;
			}
			> ${SNavigation} {
			}
			> ${SExtras} {
			}
		}
	}
	@media (min-width: 1400px) {
		> ${SWrapper} {
			> ${SLink} {
				width: auto;
				margin-right: auto;
				margin-bottom: -0.5rem;
			}
			> ${SNavigation} {
				margin-right: 1.75rem;
			}
		}
	}
`

const links = [
	{
		href: '/',
		label: 'Início'
	},
	{
		href: '/empresas',
		label: 'Empresas'
	},
	{
		href: '/noticias',
		label: 'Notícias'
	},
	{
		href: '/sobre-nos',
		label: 'Sobre nos'
	}
]

const Header = () => (
	<SHeader>
		<SWrapper isFlex isCenter spacing="small">
			<Link href="/" passHref>
				<SLink>
					<HomeSmile />
					Guia de Foz
				</SLink>
			</Link>
			<SNavigation as="nav">
				<SFlex isAuto spacing="large">
					{links.map((link, index) => (
						<SFlexItem key={index}>
							<Link href={link.href} passHref>
								<SLink>{link.label}</SLink>
							</Link>
						</SFlexItem>
					))}
				</SFlex>
			</SNavigation>
			<SExtras>
				<SFlex isAuto spacing="small">
					<SFlexItem>
						<SLink href="https://github.com" rel="nofollow">
							<Instagram size="40" title="Instagram" />
							Instagram
						</SLink>
					</SFlexItem>
					<SFlexItem>
						<SLink href="https://github.com" rel="nofollow">
							<FacebookSquare size="40" title="Facebook" />
							Facebook
						</SLink>
					</SFlexItem>
					<SFlexItem>
						<SLink href="https://github.com" rel="nofollow">
							<Discord size="40" title="Discord" />
							Discord
						</SLink>
					</SFlexItem>
					<SFlexItem>
						<Link href="/cadastro" passHref>
							<SButton size="small">Cadastre-se!</SButton>
						</Link>
					</SFlexItem>
				</SFlex>
			</SExtras>
		</SWrapper>
	</SHeader>
)

export default Header
