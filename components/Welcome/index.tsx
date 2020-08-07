import styled from 'styled-components'
import {
	SWrap,
	SItems,
	SItem,
	STitle,
	SText,
	SLabel,
	SField,
	SButton
} from 'components/Blocks'
import Card, { SCard } from 'components/Card'
import { useFormik } from 'formik'

const SForm = styled.form`
	> ${SItems} {
		> ${SItem} {
			width: 25%;
		}
	}
`
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

const Welcome = ({ title, description, cards }: IWelcome) => {
	const formik = useFormik({
		initialValues: {
			termo: '',
			categoria: '',
			regiao: ''
		},
		onSubmit: values => {
			console.log(JSON.stringify(values, null, 2))
		}
	})
	return (
		<SWelcome>
			<SWrap isCenter spacing="large">
				<STitle size="xlarge">{title}</STitle>
				<SText size="large">{description}</SText>
				<SForm onSubmit={formik.handleSubmit}>
					<SItems spacing="normal">
						<SItem>
							<SLabel htmlFor="termo">Palavra-chave</SLabel>
							<SField
								id="termo"
								name="termo"
								type="text"
								value={formik.values.termo}
								onChange={formik.handleChange}
								required
							/>
						</SItem>
						<SItem>
							<SLabel htmlFor="categoria">Categoria</SLabel>
							<SField id="categoria" name="categoria" type="text" value={formik.values.termo} onChange={formik.handleChange} />
						</SItem>
						<SItem>
							<SLabel htmlFor="regiao">Regiao e bairro</SLabel>
							<SField id="regiao" name="regiao" type="text" />
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
}

interface IWelcome {
	title: string
	description: string
	cards: any[]
}

export default Welcome
