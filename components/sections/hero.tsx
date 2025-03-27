import { FC } from 'react'
import { IHero } from '@/shared/types/hero.types'
import Image from 'next/image'
import { Title } from '../ui/title'

export const Hero: FC<IHero> = ({ title, description, imageUrl }) => {
	return (
		<section className='relative h-[40vh] md:h-[50vw] max-h-[80vh] flex items-center'>
			<Image
				className='w-[100vw] h-full aspect-auto absolute object-cover'
				src={imageUrl}
				alt={title}
				width={1920}
				height={968}
			/>
			<div className='container flex flex-col gap-1 items-center justify-center size-full h-3/4'>
				{title && (
					<Title h='h1' className='max-w-[700px]'>
						{title}
					</Title>
				)}
				{description && (
					<p className='z-10 text-2xl sm:text-4xl text-gray-100 text-center font-normal xl:leading-[45px] xl:text-6xl'>
						{description}
					</p>
				)}
			</div>
		</section>
	)
}
