import styled, { css, ThemeProps } from 'styled-components'

// 

const SWrapper = styled.div<ISWrapper>`
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
        @media (min-width: 400px) {
          padding: 2em 2.5em;
        }
        @media (min-width: 600px) {
          padding: 2em 3em;
        }
        @media (min-width: 800px) {
          padding: 3em 1.5em;
        }
        @media (min-width: 1200px) {
          padding: 4em 1em;
        }
      `,
      normal: css`
        padding: 3em 2em;
        @media (min-width: 400px) {
          padding: 3em 2.5em;
        }
        @media (min-width: 600px) {
          padding: 3em;
        }
        @media (min-width: 800px) {
          padding: 4em 1.5em;
        }
        @media (min-width: 1200px) {
          padding: 5em 1em;
        }
      `,
      large: css`
        padding: 4em 2em;
        @media (min-width: 400px) {
          padding: 4em 2.5em;
        }
        @media (min-width: 600px) {
          padding: 4em 3em;
        }
        @media (min-width: 800px) {
          padding: 5em 1.5em;
        }
        @media (min-width: 1200px) {
          padding: 6em 1em;
        }
      `
    }[spacing]}
`

interface ISWrapper {
  isFlex?: boolean
  isCenter?: boolean
  spacing?: 'small' | 'normal' | 'large'
}

// 

const SImage = styled.img<ISImage>`
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

interface ISImage {
  isCover?: boolean
}

// 

const STitle = styled.h1<STitleProps>`
  display: block;
  color: #1e88e5;
  font-weight: 700;
  letter-spacing: 0.1rem;
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
        font-weight: 800;
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
  ${({ hasColon }) =>
    hasColon &&
    css`
      &::after {
        content: ':';
      }
    `}
`

interface STitleProps {
  size?: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge'
  hasColon?: boolean
}

// 

const SText = styled.p<ISText>`
  display: block;
  > svg {
    display: inline-block;
    vertical-align: middle;
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
  }
  ${({ size }) => {
    return {
      small: css`
        font-size: 0.85rem;
        line-height: 1.55;
        @media (min-width: 800px) {
          font-size: 0.875rem;
        }
        @media (min-width: 1200px) {
          font-size: 0.9rem;
        }
      `,
      large: css`
        font-size: 1.05rem;
        line-height: 1.45;
        @media (min-width: 800px) {
          font-size: 1.075rem;
        }
        @media (min-width: 1200px) {
          font-size: 1.1rem;
        }
      `
    }[size]
  }}
`

interface ISText {
  for?: string
  size?: 'small' | 'large'
}

// 

const SLink = styled.a<SLinkProps>`
  display: block;
  text-decoration: none;
  > svg {
    display: inline-block;
    vertical-align: top;
    width: 1em;
    height: 1em;
    margin-right: 0.5rem;
  }
  ${({ hasPseudo }) =>
    hasPseudo &&
    css`
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        pointer-events: auto;
      }
    `}
`

interface SLinkProps {
  hasPseudo?: boolean
}

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
	letter-spacing: .1rem;
	background: #0288D1;
	border-radius: 0.25rem;
	cursor: pointer;
	transition: color 0.25s, background-color 0.25s;
	&:hover {
		color: #fff;
		background-color: #0277BD;
	}
	&:active {
		color: #fff;
		background-color: #01579B;
	}
	${({ hasIcon }) =>
    hasIcon &&
    css`
      overflow: hidden;
      white-space: nowrap;
    `}
	${({ size }) =>
    size &&
    {
      small: css`
        padding: 0.4rem 0.9em;
        font-size: 0.9rem;
      `,
      large: css`
        padding: 0.6rem 1.1rem;
        font-size: 1.1rem;
      `
    }[size]}
	${({ type }) =>
    type &&
    {
      empty: css`
        background: transparent;
        &:hover {
          background-color: transparent;
        }
        &:active {
          background-color: transparent;
        }
      `
    }[type]}
`

interface ISButton {
  size?: 'small' | 'large'
  type?: 'empty' | 'submit' | 'button'
  hasIcon?: boolean
}

// 

const SFlexItem = styled.li<ISFlexItem>`
  display: block;
  width: 100%;
`

interface ISFlexItem {}

// 

const SFlex = styled.ul<SFlexProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  line-height: 1;
  ${({ isAuto }) =>
    isAuto &&
    css`
      > ${SFlexItem} {
        width: auto;
      }
    `}
  ${({ spacing }) =>
    spacing &&
    {
      xsmall: css`
        margin: -0.125rem;
        > ${SFlexItem} {
          padding: 0.125rem;
        }
      `,
      small: css`
        margin: -0.25rem;
        > ${SFlexItem} {
          padding: 0.25rem;
        }
      `,
      normal: css`
        margin: -0.5rem;
        > ${SFlexItem} {
          padding: 0.5rem;
        }
      `,
      large: css`
        margin: -0.75rem;
        > ${SFlexItem} {
          padding: 0.75rem;
        }
      `,
      xlarge: css`
        margin: -1rem;
        > ${SFlexItem} {
          padding: 1rem;
        }
      `
    }[spacing]}
`

interface SFlexProps {
  spacing?: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge'
  isAuto?: boolean
}

// 

export { SWrapper, SFlex, SFlexItem, STitle, SText, SImage, SLink, SButton }
