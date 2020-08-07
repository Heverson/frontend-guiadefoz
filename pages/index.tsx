import Welcome from 'components/Welcome'
import Showcase from 'components/Showcase'

const cards = [
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
]

const Home = () => (
	<>
		<Welcome
			title="Guia de empresas, produtos e serviços em Foz do Iguaçu"
			description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos tempore deleniti repudiandae nam vel? Cum recusandae veniam itaque, magni dolor ipsum nobis, corporis eligendi."
			cards={cards}
		/>
		<Showcase />
	</>
)

export default Home
