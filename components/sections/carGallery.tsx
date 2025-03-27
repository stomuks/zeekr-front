import { FC } from 'react'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { ICar } from '@/shared/types/car.types'
import { CarItem } from '@/components/sections/CarItem'
import { Title } from '@/components/ui/title'

export const CarGallery: FC<{ cars: ICar[]; title: string }> = async ({
	cars,
	title
}) => {
	return (
		<section className='container'>
			<Carousel className='py-6 sm:py-10 md:py-20 xl:py-40 flex flex-col gap-11'>
				<div className='flex justify-between gap-3 items-center'>
					<Title h='h2'>{title}</Title>
					<div className='flex gap-3'>
						<CarouselPrevious className='relative left-0 top-0 right-0 translate-y-0 bg-gray-100 w-12 h-12 sm:w-16 sm:h-16 carousel__navigation-button' />
						<CarouselNext className='relative left-0 right-0 top-0 translate-y-0 bg-gray-100 w-12 h-12 sm:w-16 sm:h-16 carousel__navigation-button' />
					</div>
				</div>
				<CarouselContent className='-ml-11'>
					{cars.map(car => (
						<CarouselItem
							className='basis-full lg:basis-1/2 xl:basis-1/3 pl-11'
							key={car.id}
						>
							<CarItem {...car} />
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	)
}
