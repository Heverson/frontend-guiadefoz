import styled from 'styled-components'
import { SWrap, STitle, SText, SItems, SItem } from 'components/Blocks'
import Card, { SCard } from 'components/Card'

const SWelcome = styled.header`
	> ${SWrap} {
		> ${STitle} {
			margin-bottom: 2rem;
		}
		> ${SText} {
			margin-bottom: 3rem;
			color: #666;
		}
		> ${SItems} {
			align-items: stretch;
			> ${SItem} {
				width: 100%;
				> ${SCard} {
					
				}
			}
		}
	}
	@media (min-width: 600px) {
		> ${SWrap} {
			> ${SItems} {
				> ${SItem} {
					width: 50%;
				}
			}
		}
	}
	@media (min-width: 1200px) {
		> ${SWrap} {
			> ${SItems} {
				> ${SItem} {
					width: 33.33333%;
				}
			}
		}
	}
`

const Welcome = ({ title, description, cards }: IWelcome) => (
	<SWelcome>
		<SWrap isCenter spacing="large">
			<STitle size="xlarge">{title}</STitle>
			<SText size="large">{description}</SText>
			<SItems spacing="large">
				{cards.map(card => (
					<SItem key={card.id}>
						<Card title={card.name} rating={5} region="CE" />
					</SItem>
				))}
			</SItems>
		</SWrap>
	</SWelcome>
)

interface IWelcome {
	title: string
	description: string
	cards: any[]
}

export default Welcome
