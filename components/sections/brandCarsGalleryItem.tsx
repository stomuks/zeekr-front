import { FC } from 'react'
import { Button } from '../ui/Button'
import Image from 'next/image'
import { ICarOld } from '@/shared/types/car.types'
import Link from 'next/link'
import CustomLink from './customLink'

export const BrandCarsGalleryItem: FC<ICarOld> = car => {
	return (
		<div className='flex flex-col gap-6 md:gap-16'>
			<div className='w-full'>
				<div className='container'>
					<div className='py-6 flex flex-col items-center gap-4'>
						<h3 className='font-black w-full text-gray-700 italic text-4xl sm:text-6xl md:text-7xl lg:text-[100px] lg:leading-[111px] uppercase'>
							{car.name} {car.model}
						</h3>
					</div>
					<div className='relative h-[80vw] sm:h-[50vw] max-h-[60vh]'>
						<Image
							src={car.imageUrl}
							alt={car.name}
							className='absolute top-0 left-0 z-[-1] object-cover object-top'
							fill
						/>
					</div>
				</div>
			</div>
			<div className='w-full'>
				<div className='container'>
					<div className='flex flex-col justify-between gap-6 md:gap-[63px] align-center items-center xl:flex-row'>
						<ul className='grid grid-cols-2 w-full gap-6 lg:gap-[63px] text-xl lg:text-3xl font-medium leading-[33px] md:grid-cols-4'>
							<li className='flex flex-col items-center justify-center'>
								<span>Длина:</span> <p>{car.length} мм</p>
							</li>
							<li className='flex flex-col items-center justify-center'>
								<span>Колесная база:</span> <p>{car.wheelbase} мм</p>
							</li>
							<li className='flex flex-col items-center justify-center'>
								<span>Ширина:</span> <p>{car.width} мм</p>
							</li>
							<li className='flex flex-col items-center justify-center'>
								<span>Высота:</span> <p>{car.height} мм</p>
							</li>
						</ul>
						<CustomLink
							href={`/${car.Brand?.url}/${car.slug}`}
							className='max-w-[500px] relative z-[2]'
						>
							<Button
								size='lg'
								className='px-16 sm:px-[132px] min-w-[50vw] xl:min-w-[auto]'
							>
								Подробнее
							</Button>
						</CustomLink>
					</div>
				</div>
			</div>
		</div>
	)
}
