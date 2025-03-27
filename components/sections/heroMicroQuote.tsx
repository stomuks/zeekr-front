import { FC } from 'react'
import { IHeroMicroQuote } from '@/shared/types/hero.types'
import Image from 'next/image'

export const HeroMicroQuote: FC<IHeroMicroQuote> = data => {
	return (
		<section className='relative flex flex-col min-h-[250px] gap-1 items-center justify-center xl:min-h-[358px] bg-hero-micro'>
			<div className='flex items-center max-[1780px]:flex-col max-[1780px]:justify-center'>
				<Image
					src={data.logo}
					alt={data.title}
					width={359}
					height={98}
					className='h-12 w-auto xl:h-24'
				/>
				<p className='italic text-2xl md:text-5xl text-gray-100 font-black text-center'>
					{data.description}
				</p>
			</div>
		</section>
	)
}
