//
import styled from 'styled-components'

//
import { SWrap, SLink, SButton, SItems, SItem } from 'components/Blocks'

//
import Link from 'next/link'

//
import {
	Instagram,
	FacebookSquare,
	Discord
} from '@styled-icons/boxicons-logos'

import { HomeSmile } from '@styled-icons/boxicons-regular'

// 
const SHMenu = styled(SWrap)`
	> ${SItems} {
		> ${SItem} {
			> ${SLink} {
				padding: .5rem;
				margin: -.5rem;
			}
		}
	}
	@media (min-width: 800px) {
		> ${SItems} {
			> ${SItem} {
				&:first-child {
					display: none;
				}
			}
		}
	}
	@media (min-width: 1000px) {
		> ${SItems} {
			> ${SItem} {
				&:first-child {
					display: block;
				}
			}
		}
	}
`

// 
const SHExtras = styled(SWrap)`
	width: calc(100% + .25rem);
	margin-top: 1.25rem;
	margin-left: -.25rem;
	> ${SItems} {
		flex-wrap: nowrap;
		> ${SItem} {
			> ${SLink} {
				overflow: hidden;
				width: 2rem;
				padding: .25rem;
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
		> ${SItems} {
			> ${SItem} {
				&:last-child {
					margin-left: 1rem;
				}
			}
		}
	}
`

//
const SHeader = styled(SWrap)`
	background: #eee;
	${SLink} {
		font-weight: 600;
		color: #888;
		&:hover {
			color: #444;
		}
		&:active {
			color: #FF4081;
		}
	}
	> ${SWrap} {
		> ${SLink} {
			width: 100%;
			padding: 0.5rem;
			margin: -0.5rem -0.5rem 1rem;
			font-weight: 800;
			font-size: 1.5rem;
		}
	}
	@media (min-width: 800px) {
		> ${SWrap} {
			padding-top: 2rem !important;
			padding-bottom: 2rem !important;
			> ${SLink} {
				font-size: 1.75rem;
			}
			> ${SHMenu} {
				margin-right: auto;
			}
			> ${SHExtras} {
				
			}
		}
	}
	@media (min-width: 1200px) {
		> ${SWrap} {
			> ${SLink} {
				font-size: 2rem;
			}
			> ${SHMenu} {
				
			}
			> ${SHExtras} {
				
			}
		}
	}
	@media (min-width: 1400px) {
		> ${SWrap} {
			> ${SLink} {
				width: auto;
				margin-right: auto;
				margin-bottom: -.5rem;
			}
			> ${SHMenu} {
				margin-right: 1.75rem;
			}
		}
	}
`

//
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

//
const Header = () => (
	<SHeader as="header">
		<SWrap isFlex isCenter spacing="small">
			<Link href="/" passHref>
				<SLink>
					<HomeSmile />
					Guia de Foz
				</SLink>
			</Link>
			<SHMenu as="nav">
				<SItems spacing="large">
					{links.map((link, index) => (
						<SItem key={index}>
							<Link href={link.href} passHref>
								<SLink>{link.label}</SLink>
							</Link>
						</SItem>
					))}
				</SItems>
			</SHMenu>
			<SHExtras>
				<SItems spacing="small">
					<SItem>
						<SLink href="https://github.com" rel="nofollow">
							<Instagram size="40" title="Instagram" />
							Instagram
						</SLink>
					</SItem>
					<SItem>
						<SLink href="https://github.com" rel="nofollow">
							<FacebookSquare size="40" title="Facebook" />
							Facebook
						</SLink>
					</SItem>
					<SItem>
						<SLink href="https://github.com" rel="nofollow">
							<Discord size="40" title="Discord" />
							Discord
						</SLink>
					</SItem>
					<SItem>
						<Link href="/cadastro" passHref>
							<SButton size="small">Cadastre-se!</SButton>
						</Link>
					</SItem>
				</SItems>
			</SHExtras>
		</SWrap>
	</SHeader>
)

//
export default Header
