import { FC } from 'react'
import { Button } from '../../ui/button/Button'
import Image from 'next/image'
import { ICar } from '@/shared/types/car.types'
import { Modal } from '../modal/Modal'

export const TestDriveItem: FC<ICar> = car => {
	return (
		<div className='pl-36 flex flex-col gap-8 relative'>
			<div className='relative z-[2]'>
				<h3 className='text-[123px] font-extrabold leading-[136px] text-gray-700 uppercase pt-1'>
					{car.name} {car.model}
				</h3>
				<p className='max-w-[600px] text-4xl text-gray-800 font-medium leading-[43px]'>
					{car.description}
				</p>
			</div>
			<Modal>
				<Button size='lg' className='max-w-[500px] relative z-[2]'>
					записаться
				</Button>
			</Modal>
			<Image
				src={car.previewImage ? car.previewImage : car.imageUrl}
				alt={car.name}
				width={900}
				height={446}
				className='absolute bottom-0 right-10 max-h-[446px] z-[1]'
			/>
		</div>
	)
}
