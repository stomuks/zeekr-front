import { FC } from 'react'
import { Button } from '../../ui/button/Button'
import Image from 'next/image'
import { ICar } from '@/src/shared/types/car.types'
import Link from 'next/link'

export const BrandCarsGalleryItem: FC<ICar> = car => {
	return (
		<div className='py-[64px] flex flex-col items-center gap-4'>
			<h3 className='font-black w-full text-gray-700 italic text-[100px] leading-[111px] uppercase'>
				{car.name} {car.model}
			</h3>
			<div>
				<Image
					src={car.previewImage ? car.previewImage : car.imageUrl}
					alt={car.name}
					width={944}
					height={400}
					className='mt-[120px] max-h-[400px] object-cover'
				/>
			</div>
			<div className='flex justify-between gap-[63px] align-center'>
				<ul className='flex gap-[63px] text-[30px] font-medium leading-[33px]'>
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
				<Link
					href={`/${car.name}/${car.slug}`}
					className='max-w-[500px] relative z-[2]'
				>
					<Button size='lg' className='px-[132px]'>
						Подробнее
					</Button>
				</Link>
			</div>
		</div>
	)
}
