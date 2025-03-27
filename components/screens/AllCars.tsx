import { FC } from 'react'
import { TestDrive } from '@/components/sections/testDrive'
import { Layout } from '@/components/layout/Layout'
import { HeroSmall } from '@/components/sections/heroSmall'
import { CarsGrid } from '@/components/sections/carsGrid'
import { prisma } from '@/prisma/prisma-client'
import { ICar } from '@/shared/types/car.types'
import { Faq } from '@/components/sections/faq'

export const AllCars: FC = async () => {
	const heroProps = {
		title: 'Все авто',
		imageUrl: '/default/water.png'
	}

	const cars: ICar[] = await prisma.newCar.findMany({
		orderBy: {
			id: 'asc'
		}
	})

	const carsTestDrive = await prisma.car.findMany({
		where: { testDrive: true }
	})

	return (
		<Layout>
			<HeroSmall {...heroProps} />
			{cars.length > 0 && <CarsGrid cars={cars} />}
			{carsTestDrive.length > 0 && (
				<TestDrive cars={{ cars: carsTestDrive }} bgColor='bg-gray' />
			)}
			<Faq />
		</Layout>
	)
}
