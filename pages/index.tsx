import Welcome from 'components/Welcome'
import Showcase from 'components/Showcase'

const Home = ({ cards }) => (
	<>
		<Welcome
			title="Guia de empresas, produtos e serviços em Foz do Iguaçu"
			description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos tempore deleniti repudiandae nam vel? Cum recusandae veniam itaque, magni dolor ipsum nobis, corporis eligendi."
			cards={cards}
		/>
		<Showcase />
	</>
)

const getStaticProps = async () => {
	return {
		props: {
			cards: [
				{
					id: 1,
					name: 'Bete Empadinhas'
				},
				{
					id: 2,
					name: 'Bordando Cores'
				},
				{
					id: 3,
					name: 'Geladinhos Gourmet'
				},
				{
					id: 4,
					name: 'Bete Empadinhas'
				},
				{
					id: 5,
					name: 'Bordando Cores'
				},
				{
					id: 6,
					name: 'Geladinhos Gourmet'
				}
			],
			fields: []
		}
	}
}

export default Home

export { getStaticProps }
