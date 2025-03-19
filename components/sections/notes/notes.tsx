import { FC } from 'react'
import Image from 'next/image'
import { INotes } from './notes.types'

export const Notes: FC<INotes> = ({ title, description, imageUrl }) => {
	return (
		<section className='container'>
			<div className='flex flex-col gap-3 items-center py-[264px]'>
				<Image src={imageUrl} alt={title} width={159} height={159} />
				<p className='max-w-[788px] text-center text-4xl text-gray-800 leading-[39px] font-medium'>
					<span className='font-bold uppercase'>{title}</span> - {description}
				</p>
			</div>
		</section>
	)
}
