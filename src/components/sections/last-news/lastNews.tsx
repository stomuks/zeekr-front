import { FC } from 'react'
import { LastNewsItem } from './lastNewsItem'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '../../ui/carousel/carousel'
import { newsContent } from '../../../app/news/news.data'

export const LastNews: FC = async () => {
	const news = newsContent.slice(0, 7)
	return (
		<div className='bg-gray-200'>
			<section className='container'>
				<Carousel className='py-40 flex flex-col gap-11'>
					<div className='flex justify-between gap-3'>
						<h2 className='text-[100px] text-gray-700 font-black uppercase leading-[100px] italic'>
							Последние новости
						</h2>
						<div className='flex gap-3'>
							<CarouselPrevious className='relative left-0 right-0 translate-y-0 bg-gray-200 w-16 h-16 carousel__navigation-button' />
							<CarouselNext className='relative left-0 right-0 translate-y-0 bg-gray-200 w-16 h-16 carousel__navigation-button' />
						</div>
					</div>
					<CarouselContent className='-ml-11'>
						{news.map((data, index) => (
							<CarouselItem className='basis-1/3 pl-11' key={index}>
								<LastNewsItem {...data} />
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</section>
		</div>
	)
}
