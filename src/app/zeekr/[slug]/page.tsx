import { Car } from '@/src/components/screens/car/Car'
import { CarService } from '@/src/services/service'
import { notFound } from 'next/navigation'

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
	const posts = await CarService.getCarsByBrand('6763037791f4a10ebf42e760')

	return posts.data.map((post: { slug: string }) => ({
		slug: post.slug
	}))
}

export default async function Page({
	params
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	try {
		const car = await CarService.getCarBySlug(slug)
		return <Car {...car.data} />
	} catch {
		notFound()
	}
}
