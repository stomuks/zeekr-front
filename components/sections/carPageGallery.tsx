import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import Image from 'next/image'
import { FC } from 'react'

export const CarPageGallery: FC<{ data: string[] }> = data => {
	return (
		<div className='py-10 md:py-20 lg:pt-[190px] lg:pb-10'>
			<div className='container'>
				<Carousel>
					<CarouselContent>
						{data.data.map((item, index) => (
							<CarouselItem key={index}>
								<Image
									width={1920}
									height={1080}
									src={item}
									alt=''
									className='object-cover h-[60vw] max-h-[820px]'
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
