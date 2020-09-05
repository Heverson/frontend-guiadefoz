import styled from 'styled-components'
import { SWrapper, SFlex, SFlexItem, STitle, SText } from 'components/Styled'
import Form, { SForm } from 'components/Form'
import Card, { SCard } from 'components/Card'

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
  > ${SWrapper} {
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
    > ${SWrapper} {
      > ${SFlex} {
        > ${SFlexItem} {
          width: 50%;
        }
      }
    }
  }
  @media (min-width: 800px) {
    > ${SWrapper} {
      > ${STitle}, > ${SText} {
        margin-right: 250px;
      }
    }
  }
  @media (min-width: 1000px) {
    > ${SWrapper} {
      > ${STitle}, > ${SText} {
        margin-right: 300px;
      }
    }
  }
  @media (min-width: 1200px) {
    > ${SWrapper} {
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
    > ${SWrapper} {
      > ${STitle}, > ${SText} {
        margin-right: 400px;
      }
    }
  }
`

const Welcome = ({ title, description, cards }: IWelcome) => {
  return (
    <SWelcome>
      <SWrapper spacing="large" isCentralized>
        <STitle size="xlarge">{title}</STitle>
        <SText size="large">{description}</SText>
        <Form fields={fields} />
        {cards ? (
          <SFlex spacing="xlarge">
            {cards?.map(card => (
              <SFlexItem key={card.id}>
                <Card
                  title={card.name}
                  rating={5}
                  region="CE"
                  whatsapp={card.whatsapp}
                  email={card.email}
                />
              </SFlexItem>
            ))}
          </SFlex>
        ) : (
          <SText>Carregando...</SText>
        )}
      </SWrapper>
    </SWelcome>
  )
}

interface IWelcome {
  title: string
  description: string
  cards: any[]
}

export default Welcome
