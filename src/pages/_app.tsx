// 
import type { AppProps } from 'next/app'

// 
import GlobalStyle from 'components/GlobalStyle'

// 

import Header from 'components/Header'

// 

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<GlobalStyle />
		<Header />
		<Component {...pageProps} />
	</>
)

export default App
