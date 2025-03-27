import { FC } from 'react'
import { Layout } from '@/components/layout/Layout'
import { HeroSmall } from '@/components/sections/heroSmall'
import { ICarImageText, ICarOldWith } from '@/shared/types/car.types'
import { ImageText } from '@/components/sections/imageText'
import { CarColor } from '@/components/sections/carColor'
import { CarInterior } from '@/components/sections/CarInterior'
import { CarPageGallery } from '@/components/sections/carPageGallery'
import { Cta } from '@/components/sections/cta'
import { IImageText } from '@/shared/types/imageText.types'
import { prisma } from '@/prisma/prisma-client'
import { CarGallery } from '@/components/sections/carGallery'
import { CarNameGallery } from '@/components/sections/carNameGallery'

export const Car: FC<ICarOldWith> = async car => {
	const heroProps = {
		title: car.name + ' ' + car.model,
		imageUrl: car.heroImage
	}

	const content: Array<IImageText> = []

	car.content.map((item: IImageText) => {
		content.push(item)
	})

	const cars = await prisma.newCar.findMany({
		where: {
			brand: car.Brand?.name,
			model: {
				contains: car.model.toLowerCase(),
				mode: 'insensitive'
			}
		},
		orderBy: { id: 'asc' },
		take: 9
	})

	const carsModel = await prisma.car.findMany({
		where: {
			brandId: car?.Brand?.id,
			NOT: { id: car.id }
		},
		include: { Brand: true },
		take: 9
	})

	return (
		<Layout>
			<HeroSmall {...heroProps} />
			<CarColor data={car.exterior} title={car.exteriorTitle} />
			<div className='pb-20 xl:pb-[188px]'>
				{content.map((item: ICarImageText, index) => {
					return <ImageText key={index} data={item} index={index} />
				})}
			</div>
			{car.interior.length > 0 && <CarInterior data={car.interior} />}
			<CarPageGallery data={car.gallery} />
			{cars.length > 0 && <CarGallery cars={cars} title='авто в наличии' />}
			{carsModel.length > 0 && <CarNameGallery cars={carsModel} />}
			<Cta />
		</Layout>
	)
}
