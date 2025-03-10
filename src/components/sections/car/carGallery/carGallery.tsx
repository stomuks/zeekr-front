import { FC } from 'react'
import { CarItem } from '../CarItem/CarItem'
import { CarService } from '@/src/services/service'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/src/components/ui/carousel/carousel'

export const CarGallery: FC = async () => {
	const cars = await CarService.getCarsTestDrive()
	return (
		<section className='container'>
			<Carousel className='py-40 flex flex-col gap-11'>
				<div className='flex justify-between gap-3'>
					<h2 className='text-[100px] text-gray-700 font-black uppercase leading-[100px] italic'>
						Авто в наличии
					</h2>
					<div className='flex gap-3'>
						<CarouselPrevious className='relative left-0 right-0 translate-y-0 bg-gray-200 w-16 h-16 carousel__navigation-button' />
						<CarouselNext className='relative left-0 right-0 translate-y-0 bg-gray-200 w-16 h-16 carousel__navigation-button' />
					</div>
				</div>
				<CarouselContent className='-ml-11'>
					{cars.data.map(car => (
						<CarouselItem className='basis-1/3 pl-11' key={car._id}>
							<CarItem {...car} />
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	)
}
