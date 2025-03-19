import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel/carousel'
import Image from 'next/image'
import { FC } from 'react'

export const CarPageGallery: FC<{ data: string[] }> = data => {
	return (
		<div className='py-[190px] bg-lines'>
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
									className='object-cover h-[820px]'
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className='left-[40px]  bg-gray-200 w-16 h-16 carousel__navigation-button' />
					<CarouselNext className='right-[40px] bg-gray-200 w-16 h-16 carousel__navigation-button' />
				</Carousel>
			</div>
		</div>
	)
}
