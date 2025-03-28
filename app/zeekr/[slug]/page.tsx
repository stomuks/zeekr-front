import { Car } from '@/components/screens/Car'
import { prisma } from '@/prisma/prisma-client'
import {
	ICarExteriorColor,
	ICarImageText,
	ICarInteriorColor,
	ICarOldWith
} from '@/shared/types/car.types'
import { notFound } from 'next/navigation'

export default async function Page({
	params
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params

	const car = await prisma.car.findFirst({
		where: { slug: slug, brandId: 1 },
		include: { Brand: true }
	})

	if (!car) {
		return notFound()
	}

	const parseJson = (data: any) => {
		if (typeof data === 'string') {
			return JSON.parse(data)
		}
		return data
	}

	const carWithExterior: ICarOldWith = {
		...car,
		exterior: parseJson(car.exterior) as ICarExteriorColor[],
		interior: parseJson(car.interior) as ICarInteriorColor[],
		content: parseJson(car.content) as ICarImageText[]
	}

	return <Car {...carWithExterior} />
}
