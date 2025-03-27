'use client'
import React, { FC, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import Image from 'next/image'
import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-zoom.css'
export const NewCarHero: FC<{ data: string[] }> = ({ data }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
	const lightGalleryRef = useRef<any>(null)

	const openLightGallery = (index: number) => {
		if (lightGalleryRef.current) {
			lightGalleryRef.current.openGallery(index)
		}
	}

	return (
		<div className='h-[60vw] mb-20 max-h-[800px] 2xl:max-h-[auto] 2xl:h-auto 2xl:mb-0'>
			<Swiper
				loop={true}
				spaceBetween={10}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
				className='mySwiper2'
			>
				{data.map((item, index) => (
					<SwiperSlide key={index} onClick={() => openLightGallery(index)}>
						<Image
							alt='image'
							fill
							src={item}
							className='rounded-br-3xl cursor-pointer'
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				loop={true}
				spaceBetween={8}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className='mySwiper mt-2'
			>
				{data.map((item, index) => (
					<SwiperSlide key={index}>
						<Image
							fill
							alt='image'
							src={item}
							className='rounded-xl lg:rounded-3xl aspect-square object-cover cursor-pointer'
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<LightGallery
				onInit={ref => {
					lightGalleryRef.current = ref.instance
				}}
				speed={500}
				plugins={[lgThumbnail]}
				dynamic
				dynamicEl={data.map(item => ({ src: item, thumb: item }))}
				thumbnail={true}
				download={false}
			/>
		</div>
	)
}
