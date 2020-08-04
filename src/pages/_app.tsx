// 
import type { AppProps } from 'next/app'

// 

import Header from 'components/Header'

// 

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<Header />
		<Component {...pageProps} />
	</>
)

export default App
