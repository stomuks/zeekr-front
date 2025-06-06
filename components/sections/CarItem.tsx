import Image from 'next/image'
import { FC } from 'react'
import { Button } from '@/components/ui/Button'
import { ICar } from '@/shared/types/car.types'
import CustomLink from '@/components/sections/customLink'

export const CarItem: FC<ICar> = car => {
	return (
		<div className='flex flex-col gap-8 bg-gray-200 rounded-[45px]'>
			<Image
				className='object-cover rounded-t-[45px]'
				src={car.imageUrl}
				alt={car.name}
				width={564}
				style={{ width: 'auto', aspectRatio: '4/3' }}
				height={411}
			/>
			<div className='pb-4 px-3 sm:pb-8 sm:px-6 flex flex-col gap-2 sm:gap-4'>
				<div className='flex flex-col-reverse justify-between gap-2 sm:flex-row sm:gap-4'>
					<h3 className='text-3xl sm:text-[35px] font-extrabold leading-[43px] text-gray-700 uppercase'>
						{car.name} {car.model}
					</h3>
					{car.testDrive && (
						<span className='lowercase mr-auto sm:m-0 text-lg sm:text-xl text-gray-800 font-medium leading-[25px] px-3 py-2 rounded-[17px] bg-[#c1d9ee]'>
							тест-драйв
						</span>
					)}
				</div>
				<div className='flex justify-between flex-col gap-2 sm:gap-4 md:flex-row md:items-center'>
					<span className='font-medium text-xl sm:text-2xl text-gray-700 leading-[30px]'>
						{car.complectation}
					</span>
					<span className='font-extrabold text-3xl sm:text-4xl text-gray-800 leading-[43px] shrink-0 text-right md:text-left'>
						от {car.price}$
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
							<span>Запас хода:</span>
							<span></span>
							<span>{car.powerReserve} км</span>
						</li>
						<li className='car__li'>
							<span>Тип двигателя:</span>
							<span></span>
							<span>{car.typeEngine}</span>
						</li>
					</ul>
				</div>
				<CustomLink href={'/cars/' + car.slug || '/'} className='w-full pt-4'>
					<Button variant='default' size='lg'>
						Подробнее
					</Button>
				</CustomLink>
			</div>
		</div>
	)
}
