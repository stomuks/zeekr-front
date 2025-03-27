import { cn } from '@/lib/utils'
import { IImageText } from '@/shared/types/imageText.types'
import Image from 'next/image'
import { FC } from 'react'
import CustomLink from './customLink'
import { Button } from '../ui/Button'

export const ImageText: FC<{ data: IImageText; index?: number }> = ({
	data,
	index = 1
}) => {
	return (
		<div
			className={cn(
				'imageText grid grid-cols-1 xl:grid-cols-2 pt-10 lg:pt-48 gap-10 xl:min-h-[722px]',
				index % 2 === 0 && 'xl:justify-items-end'
			)}
		>
			<div
				className={cn(
					'imageText__image relative h-[80vw] max-h-[60vh] sm:h-[50vw] xl:max-h-full xl:h-full w-full order-2 xl:order-none',
					index % 2 === 0 && 'xl:order-2'
				)}
			>
				<Image
					src={data.image}
					alt={data.title}
					fill
					className={cn(
						'absolute object-cover',
						index % 2 === 0
							? 'xl:order-2 xl:rounded-l-[45px]'
							: 'xl:rounded-r-[45px]'
					)}
				/>
			</div>
			<div className='flex flex-col gap-6 md:gap-[39px] px-4 xl:max-w-[866px] text-gray-800'>
				{data.title && (
					<h3 className='text-3xl sm:text-4xl ms:text-5xl xl:text-6xl font-extrabold'>
						{data.title}
					</h3>
				)}
				<div className='text-lg sm:text-2xl xl:text-4xl font-medium grid gap-12'>
					{data.description?.map((item, index) => <p key={index}>{item}</p>)}
					{data.slug && (
						<CustomLink href={'/news/' + data.slug}>
							<Button size='lg' className='xl:w-auto xl:px-[160px] w-full'>
								{data.buttonName || 'Подробнее'}
							</Button>
						</CustomLink>
					)}
				</div>
			</div>
		</div>
	)
}
