import Image from 'next/image'
import { FC } from 'react'
import { Button } from '@/components/ui/Button'
import CustomLink from '@/components/sections/customLink'
import { IImageText } from '@/shared/types/imageText.types'

export const LastNewsItem: FC<IImageText> = data => {
	return (
		<div className='flex flex-col gap-8 bg-gray-100 rounded-[45px]'>
			<Image
				className='object-cover w-full h-[364px] rounded-t-[45px]'
				src={data.image}
				alt={data.title}
				width={564}
				height={299}
			/>
			<div className='pb-8 px-6 flex flex-col gap-4'>
				<div className='flex justify-between gap-4'>
					<h3 className='text-2xl lg:text-[35px] font-semibold lg:leading-[43px] text-gray-700'>
						{data.title}
					</h3>
				</div>
				<CustomLink href={'/news/' + data.slug} className='w-full pt-4'>
					<Button variant='default' size='lg'>
						Подробнее
					</Button>
				</CustomLink>
			</div>
		</div>
	)
}
