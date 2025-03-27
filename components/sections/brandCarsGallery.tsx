import { ICars, ICarsOld } from '@/shared/types/cars.types'
import { FC } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { BrandCarsGalleryItem } from './brandCarsGalleryItem'

export const BrandCarsGallery: FC<ICarsOld> = ({ cars }) => {
	return (
		<section className='brandCarsGallery flex items-center'>
			{cars && (
				<Carousel className='w-full'>
					<CarouselContent>
						{cars.map(car => (
							<CarouselItem key={car.id}>
								<BrandCarsGalleryItem {...car} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className='left-4 md:left-10  bg-gray-100 size-12 md:size-16 carousel__navigation-button' />
					<CarouselNext className='right-4 md:right-10 bg-gray-100 size-12 md:size-16 carousel__navigation-button' />
				</Carousel>
			)}
		</section>
	)
}
