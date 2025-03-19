import { FC } from 'react'
import { TestDrive } from '../../sections/testDrive/testDrive'
import { Layout } from '../../layout/Layout'
import { CarService } from '@/services/service'
import { HeroSmall } from '../../sections/hero/heroSmall'
import { Faq } from '../../sections/faq/faq'
import { CarsGrid } from '../../sections/car/carsGrid/carsGrid'

export const AllCars: FC = async () => {
	const heroProps = {
		title: 'Все авто',
		imageUrl: '/uploads/default/water.png'
	}

	const carsTestDrive = await CarService.getCarsByBrandAndTestDrive(
		'6763037791f4a10ebf42e760'
	)

	const cars = (await CarService.getCars()).data

	console.log(cars)

	return (
		<Layout>
			<HeroSmall {...heroProps} />
			<CarsGrid cars={cars} />
			<TestDrive cars={{ cars: carsTestDrive.data }} bgColor='bg-gray' />
			<Faq />
		</Layout>
	)
}
