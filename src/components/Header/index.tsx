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
			margin-right: auto;
		}
	}
`

// 
const Header = () => (
	<SHeader as="header">
		<SWrap isFlex isCentered>
			<Link href="/" passHref>
				<SLink>Guia de Foz</SLink>
			</Link>
			<SList>
				<SItem>
					<Link href="/" passHref>
						<SLink>Locais</SLink>
					</Link>
				</SItem>
				<SItem>
					<Link href="/" passHref>
						<SLink>Locais</SLink>
					</Link>
				</SItem>
				<SItem>
					<Link href="/" passHref>
						<SLink>Locais</SLink>
					</Link>
				</SItem>
				<SItem>
					<Link href="/" passHref>
						<SLink>Locais</SLink>
					</Link>
				</SItem>
			</SList>
		</SWrap>
	</SHeader>
)

// 
export default Header
