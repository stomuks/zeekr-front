'use client'
import { FC, useState, useEffect, useMemo, useCallback } from 'react'
import { CarItem } from './CarItem'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { ICars } from '@/shared/types/cars.types'
import { ICar } from '@/shared/types/car.types'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/input'

export const CarsGrid: FC<ICars> = ({ cars }) => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [searchField, setSearchField] = useState<string>('')
	const [myCars, setMyCars] = useState<ICar[] | null>(null)
	const [allCars, setAllCars] = useState<ICar[] | null>(null)
	const [selectedFilters, setSelectedFilters] = useState<{
		[key: string]: string
	}>({})
	const [selectedValues, setSelectedValues] = useState<{
		[key: string]: string
	}>({
		Brand: 'all',
		model: 'all',
		complectation: 'all',
		typeCar: 'all',
		drive: 'all'
	})
	const [priceRange, setPriceRange] = useState<{ min: string; max: string }>({
		min: '',
		max: ''
	})
	const [visibleCarsCount, setVisibleCarsCount] = useState<number>(12)

	const maxPrice = useMemo(
		() => Math.max(...(cars?.map(car => car.price) || [])),
		[cars]
	)
	const minPrice = useMemo(
		() => Math.min(...(cars?.map(car => car.price) || [])),
		[cars]
	)

	useEffect(() => {
		if (cars && cars.length > 0) {
			let filteredCars = cars

			if (searchTerm && searchField) {
				filteredCars = cars.filter(car =>
					(car[searchField as keyof ICar] as string)?.includes(searchTerm)
				)
			}

			if (priceRange.min || priceRange.max) {
				filteredCars = filteredCars.filter(car => {
					const price = parseFloat(car.price.toString())
					const min = parseFloat(priceRange.min) || 0
					const max = parseFloat(priceRange.max) || Infinity
					return price >= min && price <= max
				})
			}

			setMyCars(filteredCars)

			if (allCars === null) {
				setAllCars(cars)
			}
		}
	}, [searchTerm, searchField, priceRange, cars])

	const getUniqueValues = useCallback(
		(field: keyof ICar) => {
			return Array.from(new Set(cars?.map(car => car[field] as string)))
		},
		[cars]
	)

	const handleSelectChange = useCallback(
		(field: keyof ICar, value: string) => {
			const newFilters = { ...selectedFilters }
			const newValues = { ...selectedValues }

			if (value === 'all') {
				delete newFilters[field]
			} else {
				newFilters[field] = value
			}

			const fields = ['Brand', 'model', 'complectation', 'typeCar', 'drive']
			const index = fields.indexOf(field as string)

			fields.slice(index + 1).forEach(f => {
				delete newFilters[f]
				newValues[f] = 'all'
			})

			setSelectedFilters(newFilters)
			setSelectedValues({ ...newValues, [field]: value })

			if (value === 'all') {
				setSearchField('')
				setSearchTerm('')
			} else {
				setSearchField(field)
				setSearchTerm(value)
			}
		},
		[selectedFilters, selectedValues]
	)

	const handlePriceChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target
			setPriceRange(prev => ({ ...prev, [name]: value }))
		},
		[]
	)

	const getFilteredValues = (field: keyof ICar) => {
		if (field === 'Brand') {
			return getUniqueValues(field)
		}

		let filteredCars = allCars ?? []
		for (const key in selectedFilters) {
			if (key !== field) {
				filteredCars = filteredCars.filter(
					car => car[key as keyof ICar] === selectedFilters[key]
				)
			}
		}
		return Array.from(new Set(filteredCars.map(car => car[field] as string)))
	}

	const resetFilters = () => {
		setSelectedFilters({})
		setSearchField('')
		setSearchTerm('')
		setSelectedValues({
			Brand: 'all',
			model: 'all',
			complectation: 'all',
			typeCar: 'all',
			drive: 'all'
		})
		setPriceRange({ min: '', max: '' })
		setVisibleCarsCount(12)
	}

	const showMoreCars = () => {
		setVisibleCarsCount(prevCount => prevCount + 12)
	}

	return (
		<section className='bg-blue-300'>
			<div className='container'>
				<div className='py-[60px] lg:py-[120px]'>
					<div className='bg-gray-100 p-6 rounded-b-3xl rounded-r-3xl border-[3px] border-gray-200 relative lg:p-[67px] lg:rounded-b-[45px] lg:rounded-r-[45px]'>
						<div className='absolute top-0 left-[-3px] -translate-y-full py-2 sm:py-[13px] px-[67px] bg-blue-400 rounded-t-[9px]'>
							<p className='text-[20px] leading-[24px] font-extrabold text-gray-100'>
								Авто в наличии
							</p>
						</div>
						<div className='form-search grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[41px]'>
							<Select
								value={selectedValues.Brand}
								onValueChange={e => handleSelectChange('Brand', e)}
							>
								<SelectTrigger className='w-full h-12 rounded-lg text-[20px] sm:rounded-xl sm:h-16'>
									<SelectValue placeholder='Все марки' />
								</SelectTrigger>
								<SelectContent className='bg-gray-100 text-[20px]'>
									<SelectItem value='all'>Все марки</SelectItem>
									{getUniqueValues('Brand').map((value, index) => (
										<SelectItem key={index} value={value}>
											{value}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<Select
								value={selectedValues.model}
								onValueChange={e => handleSelectChange('model', e)}
							>
								<SelectTrigger className='w-full h-12 rounded-lg text-[20px] sm:rounded-xl sm:h-16'>
									<SelectValue placeholder='Все модели' />
								</SelectTrigger>
								<SelectContent className='bg-gray-100 text-[20px]'>
									<SelectItem value='all'>Все модели</SelectItem>
									{getFilteredValues('model').map((value, index) => (
										<SelectItem key={index} value={value}>
											{value}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<Select
								value={selectedValues.complectation}
								onValueChange={e => handleSelectChange('complectation', e)}
							>
								<SelectTrigger className='w-full h-12 rounded-lg text-[20px] sm:rounded-xl sm:h-16'>
									<SelectValue placeholder='Комплектация' />
								</SelectTrigger>
								<SelectContent className='bg-gray-100 text-[20px]'>
									<SelectItem value='all'>Комплектация</SelectItem>
									{getFilteredValues('complectation').map((value, index) => (
										<SelectItem key={index} value={value}>
											{value}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<Select
								value={selectedValues.typeCar}
								onValueChange={e => handleSelectChange('typeCar', e)}
							>
								<SelectTrigger className='w-full h-12 rounded-lg text-[20px] sm:rounded-xl sm:h-16'>
									<SelectValue placeholder='Тип кузова' />
								</SelectTrigger>
								<SelectContent className='bg-gray-100 text-[20px]'>
									<SelectItem value='all'>Тип кузова</SelectItem>
									{getFilteredValues('typeCar').map((value, index) => (
										<SelectItem key={index} value={value}>
											{value}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<Select
								value={selectedValues.drive}
								onValueChange={e => handleSelectChange('drive', e)}
							>
								<SelectTrigger className='w-full h-12 rounded-lg text-[20px] sm:rounded-xl sm:h-16'>
									<SelectValue placeholder='Привод' />
								</SelectTrigger>
								<SelectContent className='bg-gray-100 text-[20px]'>
									<SelectItem value='all'>Привод</SelectItem>
									{getFilteredValues('drive').map((value, index) => (
										<SelectItem key={index} value={value}>
											{value}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<div className='grid w-full items-center gap-1.5 grid-cols-3'>
								<Input
									type='number'
									name='min'
									max={maxPrice}
									min='0'
									step='2000'
									value={priceRange.min}
									onChange={handlePriceChange}
									placeholder={minPrice.toString()}
									className='w-full h-12 rounded-lg text-[20px] sm:rounded-xl sm:h-16 text-md sm:text-[20px] bg-gray-100'
								/>
								<Input
									type='number'
									name='max'
									min={minPrice}
									max={maxPrice}
									step='2000'
									value={
										priceRange.max === '0'
											? maxPrice.toString()
											: priceRange.max
									}
									onChange={handlePriceChange}
									placeholder={
										!priceRange.max ? maxPrice.toString() : priceRange.max
									}
									className='w-full h-12 rounded-lg text-[20px] sm:rounded-xl sm:h-16 text-md sm:text-[20px] bg-gray-100'
								/>
								<p className='text-md sm:text-[20px]'>Цена, USD</p>
							</div>
						</div>
						{(Object.keys(selectedFilters).length > 0 ||
							visibleCarsCount > 12) && (
							<div className='flex justify-end mt-4'>
								<button
									onClick={resetFilters}
									className='bg-black text-white py-2 px-4 rounded-xl text-[20px] font-bold'
								>
									Обнулить фильтр
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className='bg-gray-100'>
				<div className='container'>
					<div className='grid grid-cols-1 gap-6 sm:gap-11 pt-12 lg:pt-[120px] lg:grid-cols-2 xl:grid-cols-3'>
						{myCars &&
							myCars
								.slice(0, visibleCarsCount)
								.map((car, index) => <CarItem key={index} {...car} />)}
					</div>
					{myCars && visibleCarsCount < myCars.length && (
						<div className='flex justify-center mt-8'>
							<Button size='lg' className='w-auto' onClick={showMoreCars}>
								Показать еще
							</Button>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
