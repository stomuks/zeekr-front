import { FC } from 'react'
import { LastNewsItem } from '@/components/sections/lastNewsItem'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { Title } from '@/components/ui/title'
import { prisma } from '@/prisma/prisma-client'

export const LastNews: FC = async () => {
	const news = await prisma.news.findMany({ take: 7 })
	return (
		<div className='bg-gray-200'>
			<section className='container'>
				<Carousel className='py-6 flex sm:py-10 md:py-20 xl:py-40flex flex-col gap-11'>
					<div className='flex justify-between gap-3 items-center'>
						<Title h='h2'>Последние новости</Title>
						<div className='flex gap-3'>
							<CarouselPrevious className='relative left-0 right-0 top-0 translate-y-0 bg-gray-100 w-12 h-12 sm:w-16 sm:h-16 carousel__navigation-button' />
							<CarouselNext className='relative left-0 right-0 top-0 translate-y-0 bg-gray-100 w-12 h-12 sm:w-16 sm:h-16 carousel__navigation-button' />
						</div>
					</div>
					<CarouselContent className='-ml-11'>
						{news.map((data, index) => (
							<CarouselItem
								className='basis-full lg:basis-1/2 xl:basis-1/3 pl-11'
								key={index}
							>
								<LastNewsItem {...data} />
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</section>
		</div>
	)
}
