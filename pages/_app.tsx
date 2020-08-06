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

//

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<GlobalStyle />
		<Header />
		<SWrap as="main">
			<Component {...pageProps} />
		</SWrap>
	</>
)

export default App
