'use client'
import { useEffect, useState, useMemo, FC, useCallback, useRef } from 'react'
import Image from 'next/image'
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem
} from '@/src/components/ui/carousel/carousel'
import { ICarInteriorColor } from '@/src/shared/types/car.types'
import { cn } from '@/src/lib/utils'

interface GalleryProps {
	images: string[]
}

export const CarInterior: FC<{ data: ICarInteriorColor[] }> = ({ data }) => {
	const [mainApi, setMainApi] = useState<CarouselApi>()
	const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>()
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
	}, [mainApi, thumbnailApi])

	const mainImage = useMemo(
		() =>
			data.map((data, index) => (
				<CarouselItem key={index} className='relative w-full p-0 m-0'>
					<Image
						src={data.imageUrl}
						alt={`Carousel Main Image ${index + 1}`}
						height={835}
						width={1920}
						className='object-cover h-[1000px] w-full'
					/>
				</CarouselItem>
			)),
		[data]
	)

	const basis = `basis-1/${data.length}`

	const thumbnailImages = useMemo(
		() =>
			data.map((image, index) => (
				<CarouselItem
					key={index}
					className={cn('relative aspect-square pl-4 basis-1/4')}
					onClick={function () {
						handleClick(index)
					}}
				>
					<div
						className={cn(
							'w-full aspect-square border cursor-pointer rounded-full',
							index === current && 'border-gray-900 cursor-default'
						)}
					>
						<div
							className='rounded-full w-full h-full border border-[#AAB0B7]'
							style={{
								backgroundImage: `linear-gradient(0deg, ${image.colorFirst} 0%, ${image.colorFirst} 50%, ${image.colorSecond} 50%, ${image.colorSecond} 100%)`
							}}
						></div>
					</div>
				</CarouselItem>
			)),
		[data, current]
	)

	useEffect(() => {
		if (!mainApi || !thumbnailApi) {
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

		mainApi.on('select', handleTopSelect)
		thumbnailApi.on('select', handleBottomSelect)

		return () => {
			mainApi.off('select', handleTopSelect)
			thumbnailApi.off('select', handleBottomSelect)
		}
	}, [mainApi, thumbnailApi])

	const handleClick = (index: number) => {
		mainApiRef.current?.scrollTo(index)
		thumbnailApiRef.current?.scrollTo(index)
		titleApiRef.current?.scrollTo(index)
		setCurrent(index)
	}

	return (
		<div className='relative'>
			<Carousel
				setApi={setMainApi}
				opts={{
					watchDrag: false
				}}
			>
				<CarouselContent>{mainImage}</CarouselContent>
			</Carousel>
			<div className='absolute bottom-[76px] w-full max-w-[400px] left-1/2 -translate-x-1/2'>
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
	)
}
