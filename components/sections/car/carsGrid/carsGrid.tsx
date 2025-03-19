'use client'
import { FC, useState, useEffect } from 'react'
import { CarItem } from '../CarItem/CarItem'
import { CarService } from '@/services/service'
import { ICar } from '@/shared/types/car.types'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select/select'
import { ICars } from '@/shared/types/cars.types'

export const CarsGrid: FC<ICars> = ({ cars }) => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [searchField, setSearchField] = useState<string>('')
	const [myCars, setMyCars] = useState<ICar[] | null>(null)
	const [allCars, setAllCars] = useState<ICar[] | null>(null)

	// useEffect(() => {
	// 	CarService.getCars(searchField, searchTerm).then(response => {
	// 		setCars(response.data)
	// 		if (allCars === null) {
	// 			setAllCars(response.data)
	// 		}
	// 	})
	// }, [searchTerm, searchField])

	let newCars: ICar[] | null = null

	useEffect(() => {
		if (cars && cars.length > 0) {
			if (!searchTerm || !searchField) {
				newCars = cars
			} else {
				newCars = cars.filter(car =>
					(car[searchField as keyof ICar] as string)?.includes(searchTerm)
				)
			}

			setMyCars(newCars)
			if (allCars === null) {
				setAllCars(cars)
			}
		}
	}, [searchTerm, searchField, cars])

	const uniqueCars = allCars?.filter(
		(car, index, self) => index === self.findIndex(c => c.name === car.name)
	)

	return (
		<section className='bg-blue-300'>
			<div className='container'>
				<div className='py-[120px]'>
					<div className='bg-gray-100 p-[67px] rounded-b-[45px] rounded-r-[45px] border-[3px] border-gray-200 relative'>
						<div className='absolute top-0 left-[-3px] -translate-y-full py-[13px] px-[67px] bg-blue-400 rounded-t-[9px]'>
							<p className='text-[20px] leading-[24px] font-extrabold text-gray-100'>
								Авто в наличии
							</p>
						</div>
						<div className='grid grid-cols-3 gap-[41px] form-search'>
							<Select
								onValueChange={function (e) {
									setSearchField('name')
									setSearchTerm(e)
								}}
							>
								<SelectTrigger className='w-full h-16 text-[20px] rounded-xl'>
									<SelectValue placeholder='Все марки' />
								</SelectTrigger>
								<SelectContent className='bg-gray-100 text-[20px]'>
									<SelectItem value={null}>Все марки</SelectItem>
									{uniqueCars?.map((car, index) => (
										<SelectItem key={index} value={car.name}>
											{car.name}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<Select
								onValueChange={function (e) {
									setSearchField('model')
									setSearchTerm(e)
								}}
							>
								<SelectTrigger className='w-full h-16 text-[20px] rounded-xl'>
									<SelectValue placeholder='Все модели' />
								</SelectTrigger>
								<SelectContent className='bg-gray-100 text-[20px]'>
									<SelectItem value={null}>Все модели</SelectItem>
									{myCars?.map((car, index) => (
										<SelectItem key={index} value={car.model}>
											{car.model}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<Select
								onValueChange={function (e) {
									setSearchField('model')
									setSearchTerm(e)
								}}
							>
								<SelectTrigger className='w-full h-16 text-[20px] rounded-xl'>
									<SelectValue placeholder='Комплектация' />
								</SelectTrigger>
								<SelectContent className='bg-gray-100 text-[20px]'>
									<SelectItem value={null}>Комплектация</SelectItem>
									{cars?.map((car, index) => (
										<SelectItem key={index} value={car.model}>
											{car.model}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<Select
								onValueChange={function (e) {
									setSearchField('model')
									setSearchTerm(e)
								}}
							>
								<SelectTrigger className='w-full h-16 text-[20px] rounded-xl'>
									<SelectValue placeholder='Тип кузова' />
								</SelectTrigger>
								<SelectContent className='bg-gray-100 text-[20px]'>
									<SelectItem value={null}>Тип кузова</SelectItem>
									{cars?.map((car, index) => (
										<SelectItem key={index} value={car.model}>
											{car.model}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<Select
								onValueChange={function (e) {
									setSearchField('model')
									setSearchTerm(e)
								}}
							>
								<SelectTrigger className='w-full h-16 text-[20px] rounded-xl'>
									<SelectValue placeholder='Коробка передач' />
								</SelectTrigger>
								<SelectContent className='bg-gray-100 text-[20px]'>
									<SelectItem value={null}>Коробка передач</SelectItem>
									{cars?.map((car, index) => (
										<SelectItem key={index} value={car.model}>
											{car.model}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<Select
								onValueChange={function (e) {
									setSearchField('model')
									setSearchTerm(e)
								}}
							>
								<SelectTrigger className='w-full h-16 text-[20px] rounded-xl'>
									<SelectValue placeholder='Цена, BYN' />
								</SelectTrigger>
								<SelectContent className='bg-gray-100 text-[20px]'>
									<SelectItem value={null}>Цена, BYN</SelectItem>
									{cars?.map((car, index) => (
										<SelectItem key={index} value={car.model}>
											{car.model}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-gray-100'>
				<div className='container'>
					<div className='grid grid-cols-3 gap-11 pt-[120px]'>
						{myCars &&
							myCars.map((car, index) => <CarItem key={index} {...car} />)}
					</div>
				</div>
			</div>
		</section>
	)
}
