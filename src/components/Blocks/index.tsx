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
`

interface ISWrap {
	isFlex?: boolean
	isCentered?: boolean
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

const SText = styled.h1<ISText>`
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

interface ISList {
	spacing?: 'small' | 'normal' | 'large'
}

const SList = styled.h1<ISList>`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	${() => css`
		ul${SList}, ol${SList} {
			padding: 0;
			margin: 0;
			list-style: none;
		}
	`}
`

//

interface ISItem {}

const SItem = styled.h1<ISItem>`
	display: block;
`

//

export { SWrap, STitle, SText, SLink, SButton, SList, SItem }
