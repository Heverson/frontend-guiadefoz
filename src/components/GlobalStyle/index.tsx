//
import { createGlobalStyle } from 'styled-components'

//
const GlobalStyle = createGlobalStyle`
	
	* {
		box-sizing: border-box;
	}
	
	html {
		font-size: 16px;
	}
	
	body {
		margin: 0;
		color: #333;
		font: 400 1em/1 'Poppins', Arial, Helvetica, sans-serif;
		background: #f5f5f5;
	}
	
	b, strong {
		font-weight: 600;
	}
	
	a {
		
		color: #C51162;
		background-color: transparent;
		
		&:hover {
			color: #F50057;
		}
		
		&:active {
			color: #FF4081;
		}
		
	}
	
	h1, h2, h3, h4 {
		margin: 0;
		color: #AD1457;
	}
	
	@media (min-width: 800px) {
		
		html {
			font-size: 17px;
		}
		
	}
	
	@media (min-width: 1200px) {
		
		html {
			font-size: 18px;
		}
		
	}
	
`

//
export default GlobalStyle
