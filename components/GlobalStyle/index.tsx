//
import { createGlobalStyle } from 'styled-components'

//
const GlobalStyle = createGlobalStyle`
	
	/* Normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
	
	html {
		line-height: 1.15;
		-webkit-text-size-adjust: 100%;
	}
	
	body {
		margin: 0;
	}
	
	main {
		display: block;
	}
	
	h1 {
		font-size: 2em;
		margin: 0.67em 0;
	}
	
	a {
		background-color: transparent;
	}
	
	abbr[title] {
		border-bottom: none;
		text-decoration: underline;
		text-decoration: underline dotted;
	}
	
	b, strong {
		font-weight: bolder;
	}
	
	small {
		font-size: 80%;
	}
	
	sub, sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}
	
	sub {
		bottom: -0.25em;
	}
	
	sup {
		top: -0.5em;
	}
	
	img {
		border-style: none;
	}
	
	button, input, optgroup, select, textarea {
		font-family: inherit;
		font-size: 100%;
		line-height: 1.15;
		margin: 0;
	}
	
	button, input {
		overflow: visible;
	}
	
	button, select {
		text-transform: none;
	}
	
	button, [type="button"], [type="submit"] {
		-webkit-appearance: button;
	}
	
	button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner {
		border-style: none;
		padding: 0;
	}
	
	button:-moz-focusring, [type="button"]:-moz-focusring, [type="submit"]:-moz-focusring {
		outline: 1px dotted ButtonText;
	}
	
	fieldset {
		padding: 0.35em 0.75em 0.625em;
	}
	
	legend {
		box-sizing: border-box;
		color: inherit;
		display: table;
		max-width: 100%;
		padding: 0;
		white-space: normal;
	}
	
	progress {
		vertical-align: baseline;
	}
	
	textarea {
		overflow: auto;
	}
	
	[type="checkbox"], [type="radio"] {
		box-sizing: border-box;
		padding: 0;
	}
	
	[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button {
		height: auto;
	}
	
	[type="search"] {
		-webkit-appearance: textfield;
		outline-offset: -2px;
	}
	
	[type="search"]::-webkit-search-decoration {
		-webkit-appearance: none;
	}
	
	::-webkit-file-upload-button {
		-webkit-appearance: button;
		font: inherit;
	}
	
	details {
		display: block;
	}
	
	summary {
		display: list-item;
	}
	
	template {
		display: none;
	}
	
	[hidden] {
		display: none;
	}
	
	/* Poppins fonts */
	
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
	
	@font-face {
		font-display: swap;
		font-style: normal;
		font-weight: 800;
		font-family: 'Poppins';
		src: local('Poppins ExtraBold'), local('Poppins-ExtraBold'), url('/fonts/Poppins-ExtraBold.ttf') format('truetype'), url(https://fonts.gstatic.com/s/poppins/v12/pxiByp8kv8JHgFVrLDD4Z1xlFQ.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
	
	/* Override */
	
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
	
	button {
		border: none;
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
