//
import styled from 'styled-components'

//
import { SWrap, SLink, SList, SItem } from 'components/Blocks'

//
import Link from 'next/link'

//
const SHeader = styled(SWrap)`
	background: #eee;
	> ${SWrap} {
		> ${SLink} {
			padding: .5rem;
			margin: -.5rem -.5rem .5rem;
			font-weight: 600;
			font-size: 1.5rem;
		}
		> ${SList} {
			width: 100%;
			> ${SItem} {
				> ${SLink} {
					padding: .5rem;
					margin: -.5em;
					font-weight: 500;
				}
			}
		}
	}
	@media (min-width: 800px) {
		> ${SWrap} {
			padding-top: 2rem !important;
			padding-bottom: 2rem !important;
			> ${SLink} {
				margin-right: auto;
				font-size: 1.75rem;
			}
			> ${SList} {
				width: auto;
			}
		}
	}
	@media (min-width: 1200px) {
		> ${SWrap} {
			> ${SLink} {
				font-size: 2rem;
			}
		}
	}
`

//
const links = [
	{
		href: '/locais',
		label: 'Locais'
	},
	{
		href: '/locais',
		label: 'Locais'
	},
	{
		href: '/locais',
		label: 'Contato'
	}
]

//
const Header = () => (
	<SHeader as="header">
		<SWrap isFlex isCenter spacing="small">
			<Link href="/" passHref>
				<SLink>Guia de Foz</SLink>
			</Link>
			<SList spacing="large">
				{links.map((link, index) => (
					<SItem key={index}>
						<Link href={link.href} passHref>
							<SLink>{link.label}</SLink>
						</Link>
					</SItem>
				))}
			</SList>
		</SWrap>
	</SHeader>
)

//
export default Header
