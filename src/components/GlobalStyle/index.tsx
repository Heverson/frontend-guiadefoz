// 
import {createGlobalStyle } from 'styled-components'

// 
const GlobalStyle = createGlobalStyle`
	
	html {
		margin: 0;
		font-size: 16px;
	}
	
	body {
		margin: 0;
		font-family: 'Poppins', Arial, Helvetica, sans-serif;
	}
	
	@media (min-width: 800px) {
		font-size: 17px;
	}
	
	@media (min-width: 1200px) {
		font-size: 18px;
	}
	
`

// 
export default GlobalStyle