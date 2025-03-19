import { FC } from 'react'
import { IHero } from './hero.types'
import Image from 'next/image'

export const HeroSmall: FC<IHero> = ({ title, imageUrl }) => {
	return (
		<section className='relative flex flex-col gap-1 items-center justify-center min-h-[554px]'>
			<Image
				className='absolute object-cover h-full w-full'
				src={imageUrl}
				alt={title}
				width={1920}
				height={554}
			/>
			<h1 className='z-10 text-[100px] font-black text-gray-100 max-w-[900px] leading-[110px] uppercase italic text-center'>
				{title}
			</h1>
		</section>
	)
}
