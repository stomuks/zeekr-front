import { FC } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { TestDriveItem } from '@/components/sections/testDriveItem'
import { ICarsOld } from '@/shared/types/cars.types'
import { cn } from '@/lib/utils'
import { Title } from '@/components/ui/title'

export const TestDrive: FC<{ cars: ICarsOld; bgColor: string }> = async ({
	cars,
	bgColor
}) => {
	return (
		<section className='container'>
			<div className='py-10 md:py-20 xl:pt-[189px] xl:pb-[136px]'>
				<div className={cn('testDrive', bgColor)}>
					{cars.cars && (
						<Carousel className=' gap-2 pb-10 flex flex-col md:gap-10'>
							<div className='flex flex-col justify-between gap-3 md:pr-4 md:items-center xl:pr-28 md:flex-row'>
								<Title
									h='h2'
									className='text-left text-4xl sm:text-7xl lg:text-8xl md:text-center'
								>
									тест-драйв
								</Title>
								<div className='flex gap-3 justify-end md:justify-start p-4'>
									<CarouselPrevious className='relative left-0 right-0 top-0 translate-y-0 bg-gray-100 w-12 h-12 sm:w-16 sm:h-16 carousel__navigation-button' />
									<CarouselNext className='relative left-0 right-0 top-0 translate-y-0 bg-gray-100 w-12 h-12 sm:w-16 sm:h-16 carousel__navigation-button' />
								</div>
							</div>
							<div>
								<CarouselContent>
									{cars.cars.map(car => (
										<CarouselItem key={car.id}>
											<TestDriveItem {...car} />
										</CarouselItem>
									))}
								</CarouselContent>
							</div>
						</Carousel>
					)}
				</div>
			</div>
		</section>
	)
}
