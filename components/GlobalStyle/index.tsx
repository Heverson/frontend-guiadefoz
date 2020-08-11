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
		color: #222;
		font-weight: 600;
	}
	
	a {
		
		color: #0091EA;
		transition: color .25s;
		
		&:hover {
			color: #00B0FF;
		}
		
		&:active {
			color: #40C4FF;
		}
		
	}
	
	h1, h2, h3, h4, h5 {
		margin: 0;
		color: #222;
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
	
	/* Swiper CSS */
	
	.swiper-container {
		position: relative;
		overflow: hidden;
		z-index: 1;
	}
	.swiper-container-vertical > .swiper-wrapper {
		flex-direction: column;
	}
	.swiper-wrapper {
		position: relative;
		z-index: 1;
		display: flex;
		box-sizing: content-box;
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		list-style: none;
		transition-property: transform;
	}
	.swiper-container-android .swiper-slide, .swiper-wrapper {
		transform: translate3d(0px, 0, 0);
	}
	.swiper-slide {
		position: relative;
		flex-shrink: 0;
		width: 100%;
		height: 100%;
		transition-property: transform;
	}
	.swiper-slide-invisible-blank {
		visibility: hidden;
	}
	/* Auto Height */
	.swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {
		height: auto;
	}
	.swiper-container-autoheight .swiper-wrapper {
		align-items: flex-start;
		transition-property: transform, height;
	}
	
	.swiper-button-prev,
	.swiper-button-next {
	position: absolute;
	top: 50%;
	width: calc(var(--swiper-navigation-size) / 44 * 27);
	height: var(--swiper-navigation-size);
	margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
	z-index: 10;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--swiper-navigation-color, var(--swiper-theme-color));
	}
	.swiper-button-prev.swiper-button-disabled,
	.swiper-button-next.swiper-button-disabled {
	opacity: 0.35;
	cursor: auto;
	pointer-events: none;
	}
	.swiper-button-prev:after,
	.swiper-button-next:after {
	font-family: swiper-icons;
	text-transform: none !important;
	letter-spacing: 0;
	text-transform: none;
	font-variant: initial;
	line-height: 1;
	}
	.swiper-button-prev {
	left: 10px;
	right: auto;
	}
	.swiper-button-prev:after {
	content: 'prev';
	}
	.swiper-button-next {
	right: 10px;
	left: auto;
	}
	.swiper-button-next:after {
	content: 'next';
	}
	.swiper-button-prev.swiper-button-white,
	.swiper-button-next.swiper-button-white {
	--swiper-navigation-color: #ffffff;
	}
	.swiper-button-prev.swiper-button-black,
	.swiper-button-next.swiper-button-black {
	--swiper-navigation-color: #000000;
	}
	.swiper-button-lock {
	display: none;
	}

	.swiper-pagination {
	position: absolute;
	text-align: center;
	transition: 300ms opacity;
	transform: translate3d(0, 0, 0);
	z-index: 10;
	}
	.swiper-pagination.swiper-pagination-hidden {
	opacity: 0;
	}
	/* Common Styles */
	.swiper-pagination-fraction,
	.swiper-pagination-custom,
	.swiper-container-horizontal > .swiper-pagination-bullets {
	bottom: 10px;
	left: 0;
	width: 100%;
	}
	/* Bullets */
	.swiper-pagination-bullets-dynamic {
	overflow: hidden;
	font-size: 0;
	}
	.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
	transform: scale(0.33);
	position: relative;
	}
	.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
	transform: scale(1);
	}
	.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
	transform: scale(1);
	}
	.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
	transform: scale(0.66);
	}
	.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
	transform: scale(0.33);
	}
	.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
	transform: scale(0.66);
	}
	.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
	transform: scale(0.33);
	}
	.swiper-pagination-bullet {
	width: 8px;
	height: 8px;
	display: inline-block;
	border-radius: 100%;
	background: #000;
	opacity: 0.2;
	}
	button.swiper-pagination-bullet {
	border: none;
	margin: 0;
	padding: 0;
	box-shadow: none;
	-webkit-appearance: none;
	-moz-appearance: none;
		appearance: none;
	}
	.swiper-pagination-clickable .swiper-pagination-bullet {
	cursor: pointer;
	}
	.swiper-pagination-bullet-active {
	opacity: 1;
	background: var(--swiper-pagination-color, var(--swiper-theme-color));
	}


	.swiper-container-vertical > .swiper-pagination-bullets {
	right: 10px;
	top: 50%;
	transform: translate3d(0px, -50%, 0);
	}
	.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
	margin: 6px 0;
	display: block;
	}
	.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
	top: 50%;
	transform: translateY(-50%);
	width: 8px;
	}
	.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
	display: inline-block;
	transition: 200ms transform, 200ms top;
	}

	.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
	margin: 0 4px;
	}
	.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
	left: 50%;
	transform: translateX(-50%);
	white-space: nowrap;
	}
	.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
	transition: 200ms transform, 200ms left;
	}
	.swiper-container-horizontal.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
	transition: 200ms transform, 200ms right;
	}


	/* Progress */
	.swiper-pagination-progressbar {
	background: rgba(0, 0, 0, 0.25);
	position: absolute;
	}
	.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
	background: var(--swiper-pagination-color, var(--swiper-theme-color));
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	transform: scale(0);
	transform-origin: left top;
	}
	.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
	transform-origin: right top;
	}
	.swiper-container-horizontal > .swiper-pagination-progressbar,
	.swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
	width: 100%;
	height: 4px;
	left: 0;
	top: 0;
	}
	.swiper-container-vertical > .swiper-pagination-progressbar,
	.swiper-container-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
	width: 4px;
	height: 100%;
	left: 0;
	top: 0;
	}
	.swiper-pagination-white {
	--swiper-pagination-color: #ffffff;
	}
	.swiper-pagination-black {
	--swiper-pagination-color: #000000;
	}
	.swiper-pagination-lock {
	display: none;
	}


	/* Scrollbar */
	.swiper-scrollbar {
	border-radius: 10px;
	position: relative;
	-ms-touch-action: none;
	background: rgba(0, 0, 0, 0.1);
	}
	.swiper-container-horizontal > .swiper-scrollbar {
	position: absolute;
	left: 1%;
	bottom: 3px;
	z-index: 50;
	height: 5px;
	width: 98%;
	}
	.swiper-container-vertical > .swiper-scrollbar {
	position: absolute;
	right: 3px;
	top: 1%;
	z-index: 50;
	width: 5px;
	height: 98%;
	}
	.swiper-scrollbar-drag {
	height: 100%;
	width: 100%;
	position: relative;
	background: rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	left: 0;
	top: 0;
	}
	.swiper-scrollbar-cursor-drag {
	cursor: move;
	}
	.swiper-scrollbar-lock {
	display: none;
	}
	.swiper-zoom-container {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	}
	.swiper-zoom-container > img,
	.swiper-zoom-container > svg,
	.swiper-zoom-container > canvas {
	max-width: 100%;
	max-height: 100%;
	object-fit: contain;
	}
	.swiper-slide-zoomed {
	cursor: move;
	}

	/* Fade */
	.swiper-container-fade.swiper-container-free-mode .swiper-slide {
	transition-timing-function: ease-out;
	}
	.swiper-container-fade .swiper-slide {
	pointer-events: none;
	transition-property: opacity;
	}
	.swiper-container-fade .swiper-slide .swiper-slide {
	pointer-events: none;
	}
	.swiper-container-fade .swiper-slide-active,
	.swiper-container-fade .swiper-slide-active .swiper-slide-active {
	pointer-events: auto;
	}
	
`

//
export default GlobalStyle
