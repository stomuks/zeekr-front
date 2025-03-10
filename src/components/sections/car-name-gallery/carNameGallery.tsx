import Link from 'next/link'
import { FC } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem
} from '../../ui/carousel/carousel'
import { ICars } from '@/src/shared/types/cars.types'
import { cn } from '@/src/lib/utils'

export const CarNameGallery: FC<ICars> = async cars => {
	const carLength = cars.cars.length
	let galleryBasis = ''
	if (carLength > 5) {
		galleryBasis = 'basis-1/5'
	} else {
		galleryBasis = 'basis-1/' + carLength
	}
	return (
		<section className='py-14 bg-blue-400'>
			<div className='container'>
				<Carousel>
					<CarouselContent className='-ml-11 justify-center'>
						{cars.cars.map((car, index) => (
							<CarouselItem
								key={index}
								className={cn('pl-11 flex justify-center', galleryBasis)}
							>
								<Link key={car._id} href={`/${car.name}/${car.slug}`}>
									<h3 className='w-[258px] aspect-square bg-gray-100 rounded-[45px] flex justify-center items-center text-[96px] font-extrabold leading-[33px]'>
										{car.model}
									</h3>
								</Link>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	)
}
