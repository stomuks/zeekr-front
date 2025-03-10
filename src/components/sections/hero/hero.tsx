import { FC } from 'react'
import { IHero } from './hero.types'
import Image from 'next/image'

export const Hero: FC<IHero> = ({ title, description, imageUrl }) => {
	return (
		<section className='container flex flex-col gap-1 items-center justify-center min-h-[100vh]'>
			<Image
				className='w-full h-full absolute object-cover'
				src={imageUrl}
				alt={title}
				width={1920}
				height={968}
			/>
			{title && (
				<h1 className='z-10 text-[100px] font-black text-gray-100 max-w-[700px] leading-[110px] uppercase italic text-center'>
					{title}
				</h1>
			)}
			{description && (
				<p className='z-10 text-6xl text-gray-100 text-center font-normal leading-[45px]'>
					{description}
				</p>
			)}
		</section>
	)
}
