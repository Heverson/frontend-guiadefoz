import styled from 'styled-components'
import {
	SWrap,
	SItems,
	SItem,
	STitle,
	SText,
	SField,
	SButton
} from 'components/Blocks'
import Card, { SCard } from 'components/Card'

const SForm = styled.form``
const SWelcome = styled.header`
	> ${SWrap} {
		> ${STitle} {
			margin-bottom: 2rem;
		}
		> ${SText} {
			margin-bottom: 4rem;
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
			<SForm>
				<SItems spacing="normal">
					<SItem>
						<SText as="label" for="this">Palavra-chave</SText>
						<SField type="text" required />
					</SItem>
					<SItem>
						<SText as="label" for="this">Categoria</SText>
						<SField type="text" />
					</SItem>
					<SItem>
						<SText as="label" for="this">Regiao e bairro</SText>
						<SField type="text" />
					</SItem>
					<SItem>
						<SButton as="button" type="submit">
							Buscar
						</SButton>
					</SItem>
				</SItems>
			</SForm>
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

interface IWelcome {
	title: string
	description: string
	cards: any[]
}

export default Welcome
