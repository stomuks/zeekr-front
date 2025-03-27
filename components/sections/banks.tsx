import { FC } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem
} from '@/components/ui/carousel'
import Image from 'next/image'

export const Banks: FC = () => {
	const banks = [
		{ image: '/banks/asb lising.png' },
		{ image: '/banks/belagroprombank.png' },
		{ image: '/banks/belarusbank.png' },
		{ image: '/banks/bnb.png' },
		{ image: '/banks/resheniy.png' },
		{ image: '/banks/belbiznes lizing.png' },
		{ image: '/banks/sberbank.png' }
	]
	return (
		<section className='container'>
			<Carousel opts={{ loop: true }}>
				<CarouselContent>
					{banks.map((bank, index) => (
						<CarouselItem key={index} className='basis-1/4 lg:basis-1/6'>
							<Image width={161} height={161} src={bank.image} alt='' />
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	)
}
