import styled, { css } from 'styled-components'

// Componentes com estilos como blocos de construção

// Componente com estilos para "embrulhos" (wrappers)
// Úteis para "embrulhar" outros componentes e dar uma forma geral
// É utilizado também geralmente como base de outros componentes mais personalizados

const SWrap = styled.div<ISWrap>`
	${({ isFlex }) =>
		isFlex
			? css`
					display: flex;
					flex-wrap: wrap;
					align-items: center;
			  `
			: css`
					display: block;
			  `}
	${({ isCenter }) =>
		isCenter &&
		css`
			@media (min-width: 800px) {
				width: 750px;
				margin: 0 auto;
			}
			@media (min-width: 1000px) {
				width: 900px;
			}
			@media (min-width: 1200px) {
				width: 1050px;
			}
			@media (min-width: 1400px) {
				width: 1200px;
			}
		`}
	${({ spacing }) =>
		spacing &&
		{
			small: css`
				padding: 2em;
				@media (min-width: 800px) {
					padding: 3em 1.5em;
				}
				@media (min-width: 1200px) {
					padding: 4em 1em;
				}
			`,
			normal: css`
				padding: 3em 2em;
				@media (min-width: 800px) {
					padding: 4em 1.5em;
				}
				@media (min-width: 1200px) {
					padding: 5em 1em;
				}
			`,
			large: css`
				padding: 4em 2em;
				@media (min-width: 800px) {
					padding: 5em 1.5em;
				}
				@media (min-width: 1200px) {
					padding: 6em 1em;
				}
			`
		}[spacing]}
`

interface ISWrap {
	isFlex?: boolean
	isCenter?: boolean
	spacing?: 'small' | 'normal' | 'large'
}

//

const SImg = styled.img<ISImg>`
	display: block;
	width: 100%;
	height: auto;
	background: #eee;
	object-fit: contain;
	${({ isCover }) =>
		isCover &&
		css`
			object-fit: cover;
			height: 100%;
		`}
`

interface ISImg {
	isCover?: boolean
}

//

interface ISTitle {
	size?: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge'
}

const STitle = styled.h1<ISTitle>`
	display: block;
	font-weight: 700;
	${({ size }) => {
		if (!size) size = 'normal'
		return {
			xsmall: css`
				font-size: 1.05rem;
				line-height: 1.45;
				@media (min-width: 800px) {
					font-size: 1.15rem;
					line-height: 1.425;
				}
				@media (min-width: 1200px) {
					font-size: 1.25rem;
					line-height: 1.4;
				}
			`,
			small: css`
				font-size: 1.25rem;
				line-height: 1.4;
				@media (min-width: 800px) {
					font-size: 1.375rem;
					line-height: 1.375;
				}
				@media (min-width: 1200px) {
					font-size: 1.5rem;
					line-height: 1.35;
				}
			`,
			normal: css`
				font-size: 1.5rem;
				line-height: 1.35;
				@media (min-width: 800px) {
					font-size: 1.75rem;
					line-height: 1.3;
				}
				@media (min-width: 1200px) {
					font-size: 2rem;
					line-height: 1.25;
				}
			`,
			large: css`
				font-size: 2rem;
				line-height: 1.25;
				@media (min-width: 800px) {
					font-size: 2.25rem;
					line-height: 1.2;
				}
				@media (min-width: 1200px) {
					font-size: 2.5rem;
					line-height: 1.15;
				}
			`,
			xlarge: css`
				font-size: 2.5rem;
				line-height: 1.15;
				@media (min-width: 800px) {
					font-size: 3rem;
					line-height: 1.125;
				}
				@media (min-width: 1200px) {
					font-size: 3.5rem;
					line-height: 1.1;
				}
			`
		}[size]
	}}
`

//

interface ISText {
	size?: 'small' | 'large'
}

const SText = styled.p<ISText>`
	display: block;
	${({ size }) => {
		return {
			small: css`
				font-size: 0.8rem;
				@media (min-width: 800px) {
					font-size: 0.85rem;
				}
				@media (min-width: 1200px) {
					font-size: 0.9rem;
				}
			`,
			large: css`
				font-size: 1.1rem;
				@media (min-width: 800px) {
					font-size: 1.15rem;
				}
				@media (min-width: 1200px) {
					font-size: 1.2rem;
				}
			`
		}[size]
	}}
`

//

interface ISLink {
	
}

const SLink = styled.a<ISLink>`
	display: block;
	text-decoration: none;
	> svg {
		display: inline-block;
		vertical-align: top;
		width: 1em;
		height: 1em;
		margin-right: 0.5rem;
	}
`

//

const SButton = styled.a<ISButton>`
	display: inline-block;
	vertical-align: top;
	padding: 0.5rem 1em;
	color: #fff;
	font-weight: 600;
	font-size: 1rem;
	line-height: 1.5;
	text-decoration: none;
	background: #d81b60;
	border-radius: 0.5rem;
	transition: color 0.25s, background-color 0.25s;
	&:hover {
		color: #fff;
		background-color: #c2185b;
	}
	&:active {
		color: #fff;
		background-color: #ad1457;
	}
	${({ size }) =>
		size &&
		{
			small: css`
				padding: 0.4rem 0.9em;
				font-size: 0.9rem;
			`,
			large: css`
				padding: .6rem 1.1rem;
				font-size: 1.1rem;
			`
		}[size]}
`

interface ISButton {
	type?: 'empty'
	size?: 'small' | 'large'
}

//

interface ISItem {}

const SItem = styled.li<ISItem>`
	display: block;
`

//

interface ISItems {
	spacing?: 'small' | 'normal' | 'large'
}

const SItems = styled.ul<ISItems>`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding: 0;
	margin: 0;
	list-style: none;
	line-height: 1;
	${({ spacing }) =>
		spacing &&
		{
			small: css`
				padding: 0.25rem;
				margin: -0.5rem;
				> ${SItem} {
					padding: 0.25rem;
				}
			`,
			normal: css`
				padding: 0.5rem;
				margin: -1rem;
				> ${SItem} {
					padding: 0.5rem;
				}
			`,
			large: css`
				padding: 0.75rem;
				margin: -1.5rem;
				> ${SItem} {
					padding: 0.75rem;
				}
			`
		}[spacing]}
`

//

export { SWrap, SImg, STitle, SText, SLink, SButton, SItems, SItem }
