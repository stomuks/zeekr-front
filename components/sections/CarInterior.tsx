'use client'
import { useState, FC, useMemo } from 'react'
import Image from 'next/image'
import { ICarInteriorColor } from '@/shared/types/car.types'
import { cn } from '@/lib/utils'

export const CarInterior: FC<{ data: ICarInteriorColor[] }> = ({ data }) => {
	const [current, setCurrent] = useState(0)

	const handleClick = (index: number) => {
		setCurrent(index)
	}

	const mainImage = useMemo(
		() => (
			<div className='relative w-full p-0 m-0'>
				<Image
					src={data[current].imageUrl}
					alt={`Carousel Main Image ${current + 1}`}
					height={835}
					width={1920}
					className='object-cover h-[70vw] w-full max-h-[1000px]'
				/>
			</div>
		),
		[current, data]
	)

	const thumbnailImages = useMemo(
		() =>
			data.map((image, index) => (
				<div
					key={index}
					className={cn(
						'relative aspect-square ml-4 size-10 sm:size-12 md:size-16'
					)}
					onClick={() => handleClick(index)}
				>
					<div
						className={cn(
							'w-full aspect-square border cursor-pointer rounded-full',
							index === current && 'scale-110 cursor-default'
						)}
					>
						<div
							className='rounded-full w-full h-full border border-[#AAB0B7]'
							style={{
								backgroundImage: `linear-gradient(0deg, ${image.colorFirst} 0%, ${image.colorFirst} 50%, ${image.colorSecond} 50%, ${image.colorSecond} 100%)`
							}}
						></div>
					</div>
				</div>
			)),
		[data, current]
	)

	return (
		<div className='relative'>
			<div>{mainImage}</div>
			<div className='absolute bottom-6 sm:bottom-10 lg:bottom-[76px] w-full left-1/2 -translate-x-1/2 flex justify-center'>
				<div className='flex justify-between'>{thumbnailImages}</div>
			</div>
		</div>
	)
}
