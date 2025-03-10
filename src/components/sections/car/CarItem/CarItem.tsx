import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'
import { ICar } from '@/src/shared/types/car.types'
import { Button } from '@/src/components/ui/button/Button'

export const CarItem: FC<ICar> = car => {
	return (
		<div className='flex flex-col gap-8 bg-gray-200 rounded-[45px]'>
			<Image
				className='object-cover w-full h-[411px] rounded-t-[45px]'
				src={car.imageUrl}
				alt={car.name}
				width={564}
				height={411}
			/>
			<div className='pb-8 px-6 flex flex-col gap-4'>
				<div className='flex justify-between gap-4'>
					<h3 className='text-[35px] font-extrabold leading-[43px] text-gray-700 uppercase'>
						{car.name} {car.model}
					</h3>
					{car.testDrive ? (
						<span className='lowercase text-xl text-gray-800 font-medium leading-[25px] px-3 py-2 rounded-[17px] bg-[#c1d9ee]'>
							тест-драйв
						</span>
					) : (
						''
					)}
				</div>
				<div className='flex justify-between items-center'>
					<span className='font-medium text-2xl text-gray-700 leading-[30px]'>
						{car.complectation}
					</span>
					<span className='font-extrabold text-4xl text-gray-800 leading-[43px]'>
						{car.price}
					</span>
				</div>
				<div>
					<ul>
						<li className='car__li'>
							<span>Год выпуска:</span>
							<span></span>
							<span>{car.year}</span>
						</li>
						<li className='car__li'>
							<span>Двигатель:</span>
							<span></span>
							<span>{car.engine} л.c.</span>
						</li>
						<li className='car__li'>
							<span>Тип двигателя:</span>
							<span></span>
							<span>{car.typeEngine}</span>
						</li>
					</ul>
				</div>
				<Link href={car.name + '/' + car.slug || '/'} className='w-full pt-4'>
					<Button variant='default' size='lg'>
						Подробнее
					</Button>
				</Link>
			</div>
		</div>
	)
}
