import { FC } from 'react'
import { Hero } from '../../sections/hero/hero'

import heroImage from '@/public/heroMain.png'
import { CarGallery } from '../../sections/car/carGallery/carGallery'
import { BrandsGallery } from '../../sections/brands/brandsGallery'
import { TestDrive } from '../../sections/testDrive/testDrive'
import { Banks } from '../../sections/banks/banks'
import { Faq } from '../../sections/faq/faq'
import { LastNews } from '../../sections/last-news/lastNews'
import { Layout } from '../../layout/Layout'
import { CarService } from '@/services/service'

export const Home: FC = async () => {
	const heroProps = {
		title: 'Новая эра вождения:',
		description: 'тишина, стиль и мощь',
		imageUrl: heroImage.src
	}

	const carsTestDrive = await CarService.getCarsTestDrive()

	return (
		<Layout>
			<Hero {...heroProps} />
			<CarGallery />
			<BrandsGallery />
			<TestDrive cars={{ cars: carsTestDrive.data }} bgColor='bg-blue' />
			<Banks />
			<LastNews />
			<Faq />
		</Layout>
	)
}
