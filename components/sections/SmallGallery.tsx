import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import Image from 'next/image'
import { FC } from 'react'

export const SmallGallery: FC<{ data: string[] }> = data => {
	return (
		<div className='py-20 xl:py-[180px]'>
			<div className='container'>
				<Carousel>
					<CarouselContent>
						{data.data.map((item, index) => (
							<CarouselItem key={index} className='lg:basis-1/2'>
								<Image
									width={1920}
									height={1080}
									src={item}
									alt=''
									className='object-cover max-h-[500px] h-[80vw] sm:h-[60vw] lg:max-h-[auto] lg:h-[564px] rounded-2xl lg:rounded-[45px]'
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className='left-4 md:left-10  bg-gray-100 size-12 md:size-16 carousel__navigation-button' />
					<CarouselNext className='right-4 md:right-10 bg-gray-100 size-12 md:size-16 carousel__navigation-button' />
				</Carousel>
			</div>
		</div>
	)
}
