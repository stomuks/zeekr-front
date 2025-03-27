import { FC } from 'react'
import Image from 'next/image'
import { INotes } from '@/shared/types/notes.types'

export const Notes: FC<INotes> = ({ title, description, imageUrl }) => {
	return (
		<section className='container'>
			<div className='flex flex-col gap-6 sm:gap-3 items-center py-10 md:py-[164px]'>
				<Image
					src={imageUrl}
					alt={title}
					width={159}
					height={159}
					style={{ maxWidth: '20vw' }}
				/>
				<p className='max-w-[788px] text-center text-xl md:text-4xl text-gray-800 md:leading-[39px] font-medium'>
					<span className='font-bold uppercase'>{title}</span> - {description}
				</p>
			</div>
		</section>
	)
}
