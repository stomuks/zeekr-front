import { ICar } from '@/shared/types/car.types'
import React from 'react'
import { Modal } from '@/components/sections/Modal'
import { Button } from '@/components/ui/Button'
import { Title } from '../ui/title'

interface NewCarInfoProps {
	data: ICar
}

const fetchCurrency = async () => {
	try {
		const response = await fetch(
			'https://api.nbrb.by/exrates/rates/USD?parammode=2'
		)
		const data = await response.json()
		return data?.Cur_OfficialRate
	} catch (error) {
		console.error('Failed to fetch currency:', error)
	}
}

export const NewCarInfo: React.FC<NewCarInfoProps> = async ({ data }) => {
	const price = ((await fetchCurrency()) * data.price).toFixed(2)
	return (
		<div className='flex flex-col size-full gap-6'>
			<div className='flex flex-col gap-1 bg-blue-300 p-10 items-center 2xl:items-start'>
				<Title h='h1' className='text-gray-700'>
					{data.name} {data.model}
				</Title>
				<span className='text-3xl text-gray-100 font-semibold'>
					{data.complectation}
				</span>
			</div>
			<div className='flex flex-col gap-12 p-4 items-center  2xl:p-10 2xl:max-w-3xl 2xl:items-start '>
				<div className='flex gap-3 flex-wrap items-center justify-center md:items-start md:justify-start'>
					<div className='px-5 py-2 bg-gray-200 rounded-xl text-gray-800 font-bold text-3xl flex items-center gap-3 flex-col sm:flex-row'>
						от {data.price}$
						{price && (
							<span className='text-xl text-gray-500'> ≈ {price} BYN</span>
						)}
					</div>
					<div className='px-5 py-2 border-2 border-[#6A6E73] border-solid rounded-xl text-[#6A6E73] font-bold text-2xl flex items-center gap-4'>
						{data.testDrive ? (
							<>
								В наличии{' '}
								<svg
									width='11'
									height='11'
									viewBox='0 0 11 11'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<circle cx='5.5' cy='5.5' r='5.5' fill='#ACCAA4' />
								</svg>
							</>
						) : (
							<span>Под заказ</span>
						)}
					</div>
					<div className='px-5 py-2 bg-[#ACCAA4] rounded-xl text-gray-100 font-bold text-2xl'>
						Электромобиль
					</div>
					{price && (
						<div className='px-5 py-2 bg-[#C1D9EE] rounded-xl text-gray-100 font-bold text-xl'>
							В лизинг ≈ {(parseFloat(price) / 12).toFixed(0)} BYN в месяц
						</div>
					)}
				</div>
			</div>
			<div className='p-4 2xl:p-10 2xl:max-w-3xl'>
				<ul className='grid grid-cols-1 lg:grid-cols-2 gap-x-14 2xl:grid-cols-1'>
					<li className='car__li'>
						<span>Год выпуска:</span>
						<span></span>
						<span>{data.year}</span>
					</li>
					<li className='car__li'>
						<span>Объем батареи:</span>
						<span></span>
						<span>{data.capacity} кВт</span>
					</li>
					<li className='car__li'>
						<span>Запас хода:</span>
						<span></span>
						<span>{data.powerReserve} км</span>
					</li>
					<li className='car__li'>
						<span>Привод:</span>
						<span></span>
						<span>{data.drive}</span>
					</li>
					<li className='car__li'>
						<span>Кузов:</span>
						<span></span>
						<span>{data.typeCar}</span>
					</li>
					<li className='car__li'>
						<span>Макс. скорость:</span>
						<span></span>
						<span>{data.maxSpeed}</span>
					</li>
					<li className='car__li'>
						<span>Тип двигателя:</span>
						<span></span>
						<span>{data.typeEngine}</span>
					</li>
					<li className='car__li'>
						<span>Комплектация:</span>
						<span></span>
						<span className='font-extrabold text-gray-800'>
							{data.complectation}
						</span>
					</li>
				</ul>
			</div>
			<div className='m-auto 2xl:m-0 pb-10 2xl:pb-0'>
				<Modal>
					<Button
						size='lg'
						className='mx-4 w-auto lg:px-[125px] max-w-2xl lg:m-10 mt-0 inline-flex'
					>
						Оставить заявку
					</Button>
				</Modal>
			</div>
		</div>
	)
}
