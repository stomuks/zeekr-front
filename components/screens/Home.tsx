import { FC } from 'react'
import { Hero } from '@/components/sections//hero'
import heroImage from '@/public/Zeekr/Zeekr001/4.avif'
import { BrandsGallery } from '@/components/sections/brandsGallery'
import { TestDrive } from '@/components/sections/testDrive'
import { LastNews } from '@/components/sections/lastNews'
import { Layout } from '@/components/layout/Layout'
import { prisma } from '@/prisma/prisma-client'
import { Banks } from '@/components/sections/banks'
import { CarGallery } from '@/components/sections/carGallery'
import { Faq } from '@/components/sections/faq'

export const Home: FC = async () => {
	const heroProps = {
		title: 'Новая эра вождения:',
		description: 'тишина, стиль и мощь',
		imageUrl: heroImage.src
	}

	const cars = await prisma.newCar.findMany({
		orderBy: { createdAt: 'asc' },
		take: 9
	})

	const carsTestDrive = await prisma.car.findMany({
		where: { testDrive: true }
	})

	return (
		<Layout>
			<Hero {...heroProps} />
			{cars.length > 0 && <CarGallery cars={cars} title='авто под заказ' />}
			<BrandsGallery />
			{carsTestDrive.length > 0 && (
				<TestDrive cars={{ cars: carsTestDrive }} bgColor='bg-blue' />
			)}
			<Banks />
			<LastNews />
			<Faq />
		</Layout>
	)
}
