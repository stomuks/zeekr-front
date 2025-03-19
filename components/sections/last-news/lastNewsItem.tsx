import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'
import { Button } from '../../ui/button/Button'
import { IArticle } from '@/shared/types/imageText.types'

export const LastNewsItem: FC<IArticle> = data => {
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
					<h3 className='text-[35px] font-semibold leading-[43px] text-gray-700'>
						{data.title}
					</h3>
				</div>
				<Link href={'/news/' + data.slug} className='w-full pt-4'>
					<Button variant='default' size='lg'>
						Подробнее
					</Button>
				</Link>
			</div>
		</div>
	)
}
