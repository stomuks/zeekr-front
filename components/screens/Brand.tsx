import { FC } from 'react'

import { prisma } from '@/prisma/prisma-client'
import { Layout } from '@/components/layout/Layout'
import { Hero } from '@/components/sections//hero'
import { Notes } from '@/components/sections//notes'
import { CarNameGallery } from '@/components/sections//carNameGallery'
import { BrandCarsGallery } from '@/components/sections//brandCarsGallery'
import { ImageText } from '@/components/sections//imageText'
import { TestDrive } from '@/components/sections//testDrive'
import { notFound } from 'next/navigation'
import { BrandsGallery } from '../sections/brandsGallery'
import { CarGallery } from '../sections/carGallery'

export const Brand: FC<{ slug: string }> = async slug => {
	const cars = await prisma.car.findMany({
		where: {
			Brand: { name: { equals: slug.slug, mode: 'insensitive' } }
		},
		include: {
			Brand: true
		}
	})

	if (cars.length === 0) {
		return notFound()
	}
	const newCars = await prisma.newCar.findMany({
		where: {
			brand: { equals: slug.slug, mode: 'insensitive' }
		}
	})

	const heroProps = {
		title: cars[0]?.Brand.name,
		description: cars[0]?.Brand.description,
		imageUrl: cars[0]?.Brand.heroImg
	}

	const notesProps = {
		title: cars[0]?.Brand.name,
		description: cars[0]?.Brand.descriptionNotes,
		imageUrl: cars[0]?.Brand.notesImg
	}

	const carsTestDrive = cars.filter(car => car.testDrive === true)

	const imageText = {
		image: cars[0]?.Brand.heroImg,
		title: cars[0]?.Brand.titleImage,
		description: cars[0]?.Brand.descriptionImage
	}

	return (
		<Layout>
			<Hero {...heroProps} />
			<Notes {...notesProps} />
			{cars[0]?.Brand.id === 1 && <CarNameGallery cars={cars} />}
			<BrandCarsGallery cars={cars} />
			<ImageText data={imageText} />
			{carsTestDrive.length > 0 && (
				<TestDrive cars={{ cars: carsTestDrive }} bgColor='bg-gray' />
			)}
			{newCars.length > 0 && (
				<CarGallery cars={newCars} title='авто под заказ' />
			)}
			<BrandsGallery />
		</Layout>
	)
}
