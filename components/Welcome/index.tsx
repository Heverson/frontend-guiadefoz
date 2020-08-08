import styled from 'styled-components'
import { SWrap, SItems, SItem, STitle, SText } from 'components/Blocks'
import Form, { SForm } from 'components/Form'
import Card, { SCard } from 'components/Card'

const fields = [
	{
		name: 'nome',
		label: 'Nome'
	},
	{
		name: 'categoria',
		label: 'Categoria'
	},
	{
		name: 'region',
		label: 'Região'
	}
]

const SWelcome = styled.header`
	> ${SWrap} {
		> ${STitle} {
			margin-bottom: 2rem;
		}
		> ${SText} {
			margin-bottom: 4rem;
			color: #666;
		}
		> ${SForm} {
			margin-bottom: 4rem;
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
	@media (min-width: 800px) {
		> ${SWrap} {
			> ${STitle}, > ${SText} {
				margin-right: 250px;
			}
		}
	}
	@media (min-width: 1000px) {
		> ${SWrap} {
			> ${STitle}, > ${SText} {
				margin-right: 300px;
			}
		}
	}
	@media (min-width: 1200px) {
		> ${SWrap} {
			> ${STitle}, > ${SText} {
				margin-right: 350px;
			}
			> ${SItems} {
				> ${SItem} {
					width: 33.33333%;
				}
			}
		}
	}
	@media (min-width: 1400px) {
		> ${SWrap} {
			> ${STitle}, > ${SText} {
				margin-right: 400px;
			}
		}
	}
`

const Welcome = ({ title, description, cards }: IWelcome) => {
	return (
		<SWelcome>
			<SWrap isCenter spacing="large">
				<STitle size="xlarge">{title}</STitle>
				<SText size="large">{description}</SText>
				<Form fields={fields} />
				<SItems spacing="xlarge">
					{cards.map(card => (
						<SItem key={card.id}>
							<Card title={card.name} rating={5} region="CE" />
						</SItem>
					))}
				</SItems>
			</SWrap>
		</SWelcome>
	)
}

interface IWelcome {
	title: string
	description: string
	cards: any[]
}

export default Welcome
