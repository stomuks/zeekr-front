import { FC } from 'react'
import { IHero } from '@/shared/types/hero.types'
import Image from 'next/image'
import { Title } from '../ui/title'

export const HeroSmall: FC<IHero> = ({ title, imageUrl }) => {
	return (
		<section className='relative flex flex-col gap-1 items-center justify-center h-[30vh] md:h-[50vw] max-h-[80vh]'>
			<Image
				className='absolute object-cover h-full w-full'
				src={imageUrl}
				alt={title}
				fill
			/>
			<Title h='h1' className='max-w-[900px]'>
				{title}
			</Title>
		</section>
	)
}
