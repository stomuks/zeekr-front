'use client'
import { useState, FC, useMemo } from 'react'
import Image from 'next/image'
import { ICarExteriorColor } from '@/shared/types/car.types'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/sections/Modal'

export const CarColor: FC<{ data: ICarExteriorColor[]; title: string }> = ({
	data,
	title
}) => {
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
					className='object-cover h-[60vw] w-full max-h-[1000px]'
				/>
			</div>
		),
		[current, data]
	)

	const titleImages = useMemo(
		() =>
			data.map((image, index) => (
				<div key={index} className='relative'>
					<p className='text-[35px] text-gray-800 leading-[39px] font-medium'>
						{image.name}
					</p>
				</div>
			)),
		[data]
	)

	const thumbnailImages = useMemo(
		() =>
			data.map((image, index) => (
				<div
					key={index}
					className={cn(
						'relative aspect-square ml-2 sm:ml-4 size-12 md:size-16'
					)}
					onClick={() => handleClick(index)}
				>
					<div
						className={cn(
							'w-full aspect-square p-1 border cursor-pointer rounded-full',
							index === current && 'scale-110 cursor-default'
						)}
					>
						<div
							className='rounded-full w-full h-full border border-[#AAB0B7]'
							style={{ background: image.color }}
						></div>
					</div>
				</div>
			)),
		[data, current]
	)

	return (
		<>
			<div className='pt-10 lg:pt-20 xl:pt-[166px] flex flex-col gap-10'>
				<div className='grid xl:grid-cols-2 container gap-4'>
					<h3 className='text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] lg:leading-[71px] font-extrabold text-gray-800'>
						Цвета экстерьера
					</h3>
					<div className='flex flex-col gap-[40px]'>
						<p className='text-lg sm:text-2xl lg:text-3xl xl:text-[35px] lg:leading-[39px] font-medium text-gray-800'>
							{title}
						</p>
						<div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4'>
							<div>{titleImages[current]}</div>
							<div className='flex justify-between items-center'>
								{thumbnailImages}
							</div>
						</div>
					</div>
				</div>
				<div>{mainImage}</div>
			</div>
			<div className='bg-carColor'>
				<div className='section py-10 sm:py-20 lg:py-[110px]'>
					<div className='w-full flex flex-col items-center gap-[22px]'>
						<h3 className='uppercase text-gray-100 text-2xl lg:leading-[39px] lg:text-[39px] font-extrabold text-center'>
							Получите бесплатную консультацию
						</h3>
						<div>
							<Modal>
								<Button size='lg' className='px-[140px]'>
									Получить
								</Button>
							</Modal>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
