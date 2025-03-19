import { FC } from 'react'
import { IHeroMicroQuote } from './hero.types'
import Image from 'next/image'

export const HeroMicroQuote: FC<IHeroMicroQuote> = data => {
	return (
		<section className='relative flex flex-col gap-1 items-center justify-center min-h-[358px] bg-hero-micro'>
			<div className='flex items-center max-[1780px]:flex-col max-[1780px]:justify-center'>
				<Image src={data.logo} alt={data.title} width={359} height={98} />
				<p className='italic text-5xl text-gray-100 font-black text-center'>
					{data.description}
				</p>
			</div>
		</section>
	)
}
