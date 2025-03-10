import { FC } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem
} from '../../ui/carousel/carousel'
import Image from 'next/image'

export const Banks: FC = () => {
	const banks = [
		{ image: '/uploads/banks/asb lising.png' },
		{ image: '/uploads/banks/belagroprombank.png' },
		{ image: '/uploads/banks/belarusbank.png' },
		{ image: '/uploads/banks/bnb.png' },
		{ image: '/uploads/banks/resheniy.png' },
		{ image: '/uploads/banks/belbiznes lizing.png' },
		{ image: '/uploads/banks/sberbank.png' }
	]
	return (
		<section className='container'>
			<Carousel opts={{ loop: true }}>
				<CarouselContent>
					{banks.map((bank, index) => (
						<CarouselItem key={index} className='basis-1/6'>
							<Image width={161} height={161} src={bank.image} alt='' />
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	)
}
