// 
import type { AppProps } from 'next/app'

// 
import GlobalStyle from 'components/GlobalStyle'

// 
import { ThemeProvider } from 'styled-components'

// 
import { SWrap } from 'components/Blocks'

// 
import Header from 'components/Header'
import Footer from 'components/Footer'

//

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<GlobalStyle />
		<Header />
		<SWrap as="main">
			<Component {...pageProps} />
		</SWrap>
		<Footer />
	</>
)

export default App
