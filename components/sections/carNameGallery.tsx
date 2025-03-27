import { FC } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem
} from '@/components/ui/carousel'
import { ICarsOld } from '@/shared/types/cars.types'
import { cn } from '@/lib/utils'
import CustomLink from '@/components/sections/customLink'

export const CarNameGallery: FC<ICarsOld> = async cars => {
	return (
		<section className='py-14 bg-blue-400'>
			<div className='container'>
				<Carousel>
					<CarouselContent className='flex justify-start'>
						{cars.cars.map((car, index) => (
							<CarouselItem
								key={index}
								className={cn('basis-1/3 sm:basis-1/5 xl:basis-1/6')}
							>
								<CustomLink
									key={car.id}
									href={`/${car.Brand?.url}/${car.slug}`}
								>
									<h3 className='aspect-square text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gray-100 rounded-2xl lg:rounded-[45px] flex justify-center items-center 2xl:text-8xl font-extrabold 2xl:leading-[33px]'>
										{car.model}
									</h3>
								</CustomLink>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	)
}
