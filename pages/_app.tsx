import type { AppProps } from 'next/app'

import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from 'components/GlobalStyle'
import { DefaultSeo } from 'next-seo'
import Header from 'components/Header'
import Footer from 'components/Footer'

import SEO from 'config/seo'
import theme from 'config/theme'

const SMain = styled.main`
  overflow: hidden;
  position: relative;
  z-index: 1;
`

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <DefaultSeo {...SEO} />
    <Header />
    <SMain>
      <Component {...pageProps} />
    </SMain>
    <Footer />
  </ThemeProvider>
)

export default App
