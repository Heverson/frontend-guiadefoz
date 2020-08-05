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

interface ISTitle {
	size?: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge'
}

const STitle = styled.h1<ISTitle>`
	display: block;
	${({ size }) => {
		if (!size) size = 'normal'
		return {
			xsmall: css``,
			small: css``,
			normal: css``,
			large: css``,
			xlarge: css`
				@media (min-width: 800px) {
				}
				@media (min-width: 1200px) {
				}
			`
		}[size]
	}}
`

//

interface ISText {
	size?: 'small' | 'normal' | 'large'
}

const SText = styled.p<ISText>`
	display: block;
	${({ size }) => {
		if (!size) size = 'normal'
		return {
			small: css``,
			normal: css``,
			large: css``
		}[size]
	}}
`

//

interface ISLink {}

const SLink = styled.a<ISLink>`
	display: block;
	text-decoration: none;
`

//

interface ISButton {}

const SButton = styled.a<ISButton>`
	display: inline-block;
	vertical-align: top;
	text-decoration: none;
`

//

interface ISItem {}

const SItem = styled.li<ISItem>`
	display: block;
`

//

interface ISList {
	spacing?: 'small' | 'normal' | 'large'
}

const SList = styled.ul<ISList>`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding: 0;
	margin: 0;
	list-style: none;
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

export { SWrap, STitle, SText, SLink, SButton, SList, SItem }
