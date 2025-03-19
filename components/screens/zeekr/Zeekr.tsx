import { FC } from 'react'
import { Hero } from '../../sections/hero/hero'

import heroImage from '@/public/heroZeekr.png'
import notesImage from '@/public/zeekr8.png'
import { TestDrive } from '../../sections/testDrive/testDrive'
import { Layout } from '../../layout/Layout'
import { Notes } from '../../sections/notes/notes'
import { CarService } from '@/services/service'
import { BrandCarsGallery } from '../../sections/brand-cars-gallery/brandCarsGallery'
import { CarNameGallery } from '../../sections/car-name-gallery/carNameGallery'
import { ImageText } from '../../sections/image-text/imageText'

export const Zeekr: FC = async () => {
	const heroProps = {
		title: 'zeekr',
		description: 'революция в транспорте',
		imageUrl: heroImage.src
	}

	const notesProps = {
		title: 'zeekr',
		description:
			'идеальный баланс и гармония между человеком и машиной, технологией и природой.',
		imageUrl: notesImage.src
	}

	const carsTestDrive = await CarService.getCarsByBrandAndTestDrive(
		'6763037791f4a10ebf42e760'
	)

	const cars = await CarService.getCarsByBrand('6763037791f4a10ebf42e760')

	const imageText = {
		image: heroImage.src,
		title: 'Откройте для себя Zeekr: Ваш идеальный электромобиль будущего!',
		description: [
			'Каждая модель Zeekr создается с использованием новейших технологий, предлагая вам мощные электродвигатели, расширенный запас хода и быстрозарядные аккумуляторы. Вы сможете проехать до 700 км на одной зарядке, что делает каждую поездку комфортной и удобной!',
			'Независимо от того, ищете ли вы мощный кроссовер или стильный седан — у Zeekr есть идеальная модель для каждого!'
		]
	}

	return (
		<Layout>
			<Hero {...heroProps} />
			<Notes {...notesProps} />
			<BrandCarsGallery cars={carsTestDrive.data} />
			<CarNameGallery cars={cars.data} />
			<ImageText data={imageText} />
			<TestDrive cars={{ cars: carsTestDrive.data }} bgColor='bg-gray' />
		</Layout>
	)
}
