import { FC } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '../../ui/carousel/carousel'
import { TestDriveItem } from './testDriveItem'
import { CarService } from '@/src/services/service'
import { ICars } from '@/src/shared/types/cars.types'
import { cn } from '@/src/lib/utils'

export const TestDrive: FC<{ cars: ICars; bgColor: string }> = async ({
	cars,
	bgColor
}) => {
	return (
		<section className='container'>
			<div className='pt-[189px] pb-[136px]'>
				<div className={cn('testDrive', bgColor)}>
					<Carousel>
						<div className='flex justify-between gap-3 pr-28'>
							<h2 className='text-[100px] text-gray-700 font-black uppercase leading-[100px] italic'>
								тест-драйв
							</h2>
							<div className='flex gap-3'>
								<CarouselPrevious className='relative left-0 right-0 translate-y-0 bg-gray-200 w-16 h-16 carousel__navigation-button' />
								<CarouselNext className='relative left-0 right-0 translate-y-0 bg-gray-200 w-16 h-16 carousel__navigation-button' />
							</div>
						</div>
						<CarouselContent>
							{cars.cars.map(car => (
								<CarouselItem key={car._id}>
									<TestDriveItem {...car} />
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		</section>
	)
}
