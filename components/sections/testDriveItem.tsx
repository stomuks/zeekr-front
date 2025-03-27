import { FC } from 'react'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { ICarOld } from '@/shared/types/car.types'
import { Modal } from '@/components/sections/Modal'

export const TestDriveItem: FC<ICarOld> = car => {
	return (
		<div className='flex gap-0 items-center flex-col-reverse xl:flex-row'>
			<div className='px-4 flex flex-col gap-8 relative w-full items-center xl:items-start xl:max-w-[720px] xl:pl-12 xl:pr-0'>
				<div className='relative z-[2] flex flex-col gap-4'>
					<h3 className='text-4xl sm:text-7xl font-extrabold md:leading-[136px] text-gray-700 text-center uppercase pt-1 md:text-8xl xl:text-[100px] xl:text-left'>
						{car.name} {car.model}
					</h3>
					<p className='w-full text-xl sm:text-2xl md:text-3xl text-center text-gray-800 font-medium md:leading-[43px] xl:max-w-[600px] xl:text-left'>
						{car.description}
					</p>
				</div>
				<Modal>
					<Button size='lg' className='max-w-[500px] relative z-[2]'>
						записаться
					</Button>
				</Modal>
			</div>
			<div className='relative z-[1] w-full'>
				<Image
					src={car.previewImage ? car.previewImage : car.imageUrl}
					alt={car.name}
					width={1008}
					height={566}
				/>
			</div>
		</div>
	)
}
