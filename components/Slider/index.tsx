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

const Slider = ({}: ISlider) => {
	const container = useRef(null)
	
	useEffect(() => {
		const swiper = new Swiper(container.current, {
			containerModifierClass: 'is-',
			slideClass: SFlexItem.styledComponentId,
			slideActiveClass: 'is-active',
			wrapperClass: SFlex.styledComponentId,
		})
	}, [])

	return (
		<SSlider ref={container}>
			<SFlex>
				<SFlexItem>
					<SImage src="/imagens/cupcakes.jpg" alt="" />
				</SFlexItem>
				<SFlexItem>
					<SImage src="/imagens/cupcakes.jpg" alt="" />
				</SFlexItem>
				<SFlexItem>
					<SImage src="/imagens/cupcakes.jpg" alt="" />
				</SFlexItem>
			</SFlex>
		</SSlider>
	)
}

interface ISlider {
	
}

export default Slider
