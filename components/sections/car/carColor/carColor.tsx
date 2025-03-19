'use client'
import { useEffect, useState, useMemo, FC, useCallback, useRef } from 'react'
import Image from 'next/image'
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem
} from '@/components/ui/carousel/carousel'
import { ICarExteriorColor } from '@/shared/types/car.types'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button/Button'
import Link from 'next/link'
import { Modal } from '../../modal/Modal'

interface GalleryProps {
	images: string[]
}

export const CarColor: FC<{ data: ICarExteriorColor[]; title: string }> = ({
	data,
	title
}) => {
	const [mainApi, setMainApi] = useState<CarouselApi>()
	const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>()
	const [titleApi, setTitleApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)

	const mainApiRef = useRef<CarouselApi | null>(null)
	const thumbnailApiRef = useRef<CarouselApi | null>(null)
	const titleApiRef = useRef<CarouselApi | null>(null)

	useEffect(() => {
		if (mainApi) {
			mainApiRef.current = mainApi
		}
		if (thumbnailApi) {
			thumbnailApiRef.current = thumbnailApi
		}
		if (titleApi) {
			titleApiRef.current = titleApi
		}
	}, [mainApi, thumbnailApi, titleApi])

	const mainImage = useMemo(
		() =>
			data.map((data, index) => (
				<CarouselItem key={index} className='relative w-full p-0 m-0'>
					<Image
						src={data.imageUrl}
						alt={`Carousel Main Image ${index + 1}`}
						height={835}
						width={1920}
						className='object-cover h-[835px] w-full'
					/>
				</CarouselItem>
			)),
		[data]
	)

	const titleImages = useMemo(
		() =>
			data.map((image, index) => (
				<CarouselItem key={index} className='relative'>
					<p className='text-[35px] text-gray-800 leading-[39px] font-medium'>
						{image.name}
					</p>
				</CarouselItem>
			)),
		[data, current]
	)

	const basis = `basis-1/${data.length}`

	const thumbnailImages = useMemo(
		() =>
			data.map((image, index) => (
				<CarouselItem
					key={index}
					className={cn('relative aspect-square pl-4', basis)}
					onClick={function () {
						handleClick(index)
					}}
				>
					<div
						className={cn(
							'w-full aspect-square p-1 border cursor-pointer rounded-full',
							index === current && 'border-gray-900 cursor-default'
						)}
					>
						<div
							className='rounded-full w-full h-full border border-[#AAB0B7]'
							style={{ background: image.color }}
						></div>
					</div>
				</CarouselItem>
			)),
		[data, current]
	)

	useEffect(() => {
		if (!mainApi || !thumbnailApi || !titleApi) {
			return
		}

		const handleTopSelect = () => {
			const selected = mainApi.selectedScrollSnap()
			setCurrent(selected)
			thumbnailApi.scrollTo(selected)
		}

		const handleBottomSelect = () => {
			const selected = thumbnailApi.selectedScrollSnap()
			setCurrent(selected)
			mainApi.scrollTo(selected)
		}

		const handleTitleSelect = () => {
			const selected = titleApi.selectedScrollSnap()
			setCurrent(selected)
			titleApi.scrollTo(selected)
		}

		mainApi.on('select', handleTopSelect)
		thumbnailApi.on('select', handleBottomSelect)
		titleApi.on('select', handleTitleSelect)

		return () => {
			mainApi.off('select', handleTopSelect)
			thumbnailApi.off('select', handleBottomSelect)
			titleApi.off('select', handleTitleSelect)
		}
	}, [mainApi, thumbnailApi, titleApi])

	const handleClick = (index: number) => {
		mainApiRef.current?.scrollTo(index)
		thumbnailApiRef.current?.scrollTo(index)
		titleApiRef.current?.scrollTo(index)
		setCurrent(index)
	}

	return (
		<>
			<div className='pt-[166px] flex flex-col gap-[41px]'>
				<div className='grid grid-cols-2 container'>
					<h3 className='text-[64px] leading-[71px] font-extrabold text-gray-800'>
						Цвета экстерьера
					</h3>
					<div className='flex flex-col gap-[40px]'>
						<p className='text-[35px] leading-[39px] font-medium text-gray-800'>
							{title}
						</p>
						<div className='flex justify-between'>
							<Carousel
								setApi={setTitleApi}
								opts={{
									watchDrag: false
								}}
								className='ml-[-15px] max-w-[400px]'
							>
								<CarouselContent className='m-1'>{titleImages}</CarouselContent>
							</Carousel>
							<Carousel
								className='grow'
								setApi={setThumbnailApi}
								opts={{
									watchDrag: false
								}}
							>
								<CarouselContent className='m-1 flex justify-between'>
									{thumbnailImages}
								</CarouselContent>
							</Carousel>
						</div>
					</div>
				</div>
				<Carousel
					setApi={setMainApi}
					opts={{
						watchDrag: false
					}}
				>
					<CarouselContent>{mainImage}</CarouselContent>
				</Carousel>
			</div>
			<div className='bg-carColor'>
				<div className='section py-[110px]'>
					<div className='w-full flex flex-col items-center gap-[22px]'>
						<h3 className='uppercase text-gray-100 leading-[39px] text-[39px] font-extrabold'>
							Ознакомиться с комплектацией автомобиля
						</h3>
						<div>
							<Modal>
								<Button size='lg' className='px-[140px]'>
									Подробнее
								</Button>
							</Modal>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
