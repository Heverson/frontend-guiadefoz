//
import { createGlobalStyle } from 'styled-components'

//
const GlobalStyle = createGlobalStyle`
	
	@font-face {
		font-family: 'Poppins';
		font-style: italic;
		font-weight: 400;
		font-display: swap;
		src: local('Poppins Italic'), local('Poppins-Italic'), url('/fonts/Poppins-Italic.ttf') format('truetype'), url(https://fonts.gstatic.com/s/poppins/v12/pxiGyp8kv8JHgFVrJJLucHtA.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
	
	@font-face {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: local('Poppins Regular'), local('Poppins-Regular'), url('/fonts/Poppins-Regular.ttf') format('truetype'), url(https://fonts.gstatic.com/s/poppins/v12/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
	
	@font-face {
		font-display: swap;
		font-style: normal;
		font-weight: 500;
		font-family: 'Poppins';
		src: local('Poppins Medium'), local('Poppins-Medium'), url('/fonts/Poppins-Medium.ttf') format('truetype'), url(https://fonts.gstatic.com/s/poppins/v12/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
	
	@font-face {
		font-display: swap;
		font-style: normal;
		font-weight: 600;
		font-family: 'Poppins';
		src: local('Poppins SemiBold'), local('Poppins-SemiBold'), url('/fonts/Poppins-SemiBold.ttf') format('truetype'), url(https://fonts.gstatic.com/s/poppins/v12/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
	
	@font-face {
		font-display: swap;
		font-style: normal;
		font-weight: 700;
		font-family: 'Poppins';
		src: local('Poppins Bold'), local('Poppins-Bold'), url('/fonts/Poppins-Bold.ttf') format('truetype'), url(https://fonts.gstatic.com/s/poppins/v12/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
	
	* {
		box-sizing: border-box;
	}
	
	*::before, *::after {
		pointer-events: none;
	}
	
	html {
		font-size: 16px;
	}
	
	body {
		min-width: 320px;
		margin: 0;
		color: #333;
		font: 400 1em/1 'Poppins', Arial, Helvetica, sans-serif;
		letter-spacing: .05rem;
		background: #f5f5f5;
		
	}
	
	p, ul, ol {
		margin: 0;
		line-height: 1.5;
	}
	
	b, strong {
		font-weight: 600;
	}
	
	a {
		
		color: #C51162;
		background-color: transparent;
		transition: color .25s;
		
		&:hover {
			color: #F50057;
		}
		
		&:active {
			color: #FF4081;
		}
		
	}
	
	h1, h2, h3, h4 {
		margin: 0;
		color: #1976D2;
		letter-spacing: .1rem;
	}
	
	img {
		border-style: none;
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
