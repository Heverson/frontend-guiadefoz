import type { AppProps } from 'next/app'
import GlobalStyle from 'components/GlobalStyle'
import styled, { ThemeProvider } from 'styled-components'
import Header from 'components/Header'
import Footer from 'components/Footer'

const SMain = styled.main`
	overflow: hidden;
	position: relative;
	z-index: 1;
`

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<GlobalStyle />
		<Header />
		<SMain>
			<Component {...pageProps} />
		</SMain>
		<Footer />
	</>
)

export default App
