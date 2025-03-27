import { NewCar } from '@/components/screens/newcar'
import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'

export default async function Page({
	params
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const car = await prisma.newCar.findFirst({
		where: { slug: slug }
	})

	if (!car) {
		return notFound()
	}

	return <NewCar {...car} />
}
