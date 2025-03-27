import { FC } from 'react'
import { Layout } from '@/components/layout/Layout'
import { ICar } from '@/shared/types/car.types'
import { CarPageGallery } from '@/components/sections/carPageGallery'
import { Cta } from '@/components/sections/cta'
import { NewCarHero } from '@/components/sections/newCarHero'
import { NewCarInfo } from '@/components/sections/newCarInfo'
import { NewCarDesc } from '@/components/sections/newCarDesc'
import { prisma } from '@/prisma/prisma-client'
import { BrandCarsGallery } from '@/components/sections/brandCarsGallery'
import { CarGallery } from '@/components/sections/carGallery'
import { Faq } from '@/components/sections/faq'

export const NewCar: FC<ICar> = async car => {
	const cars = await prisma.newCar.findMany({
		where: {
			Brand: car.brand,
			NOT: { id: car.id }
		},
		orderBy: {
			id: 'asc'
		},
		take: 9
	})

	const carsNew = await prisma.car.findMany({
		where: {
			model: {
				contains: car.model.toLowerCase(),
				mode: 'insensitive'
			}
		},
		include: {
			Brand: true
		}
	})

	return (
		<Layout>
			<div className='grid grid-cols-1 2xl:grid-cols-2 mb-10 md:mb-20 lg:mb-40'>
				<NewCarHero data={car.gallery} />
				<NewCarInfo data={car} />
			</div>
			<NewCarDesc description={car.description} />
			<CarPageGallery data={car.gallery} />
			<Cta />
			{carsNew.length > 0 && <BrandCarsGallery cars={carsNew} />}
			{cars.length > 0 && <CarGallery cars={cars} title='похожие авто' />}
			<Faq />
		</Layout>
	)
}
