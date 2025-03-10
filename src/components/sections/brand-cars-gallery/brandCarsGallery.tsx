import { ICars } from '@/src/shared/types/cars.types'
import { FC } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '../../ui/carousel/carousel'
import { BrandCarsGalleryItem } from './brandCarsGalleryItem'
import Image from 'next/image'

export const BrandCarsGallery: FC<ICars> = cars => {
	return (
		<section className='brandCarsGallery flex items-center'>
			<div className='container'>
				<Carousel>
					<CarouselContent>
						{cars.cars.map(car => (
							<CarouselItem key={car._id}>
								<BrandCarsGalleryItem {...car} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className='left-0  bg-gray-200 w-16 h-16 carousel__navigation-button' />
					<CarouselNext className='right-0 bg-gray-200 w-16 h-16 carousel__navigation-button' />
				</Carousel>
			</div>
			<Image
				src='/uploads/default/brandCarsGallery-bg.jpg'
				objectFit='cover'
				fill
				alt=''
				className='brandCarsGallery-bg'
			></Image>
		</section>
	)
}
