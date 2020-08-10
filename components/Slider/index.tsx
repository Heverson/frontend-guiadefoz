import styled from 'styled-components'
import { SFlex, SFlexItem, SImage } from 'components/Blocks'
import { useRef, useEffect } from 'react'
import Swiper from 'swiper'

const SSlider = styled.div`
	overflow: hidden;
	position: relative;
	z-index: 1;
	display: block;
	> ${SFlex} {
		flex-wrap: nowrap;
		width: 100%;
		height: 100%;
		box-sizing: content-box;
		> ${SFlexItem} {
			flex-shrink: 0;
		}
	}
`

const Slider = ({ children }: ISlider) => {
	const container = useRef(null)

	useEffect(() => {
		const swiper = new Swiper(container.current, {
			slidesPerView: 4,
			containerModifierClass: 'is-',
			slideClass: SFlexItem.styledComponentId,
			slideActiveClass: 'is-active',
			wrapperClass: SFlex.styledComponentId
		})
	}, [container])

	return (
		<SSlider ref={container}>
			<SFlex>
				{children.map((child, index) => (
					<SFlexItem key={index}>
						{child}
					</SFlexItem>
				))}
			</SFlex>
		</SSlider>
	)
}

interface ISlider {
	children: any
}

export default Slider
export { SSlider }
