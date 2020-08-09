import styled from 'styled-components'
import { SWrap, SFlex, SFlexItem, STitle, SText } from 'components/Blocks'
import Form, { SForm } from 'components/Form'
import Card, { SCard } from 'components/Card'
import { useFormik } from 'formik'

const fields = [
	{
		type: 'text',
		name: 'keyword',
		label: 'Palavras-chave'
	},
	{
		name: 'category',
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
		> ${SFlex} {
			align-items: stretch;
			> ${SFlexItem} {
				width: 100%;
				> ${SCard} {
				}
			}
		}
	}
	@media (min-width: 600px) {
		> ${SWrap} {
			> ${SFlex} {
				> ${SFlexItem} {
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
			> ${SFlex} {
				> ${SFlexItem} {
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
				<SFlex spacing="xlarge">
					{cards.map(card => (
						<SFlexItem key={card.id}>
							<Card title={card.name} rating={5} region="CE" />
						</SFlexItem>
					))}
				</SFlex>
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
