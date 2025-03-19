import { cn } from '@/lib/utils'
import { IImageText } from '@/shared/types/imageText.types'
import Image from 'next/image'
import { FC } from 'react'

export const ImageTextAbout: FC<{ data: IImageText; index?: number }> = ({
	data,
	index = 1
}) => {
	return (
		<div
			className={cn(
				'imageText',
				index % 2 === 0 ? 'imageText__reverse' : 'imageText__default'
			)}
		>
			<div className='imageText__image-small'>
				<Image src={data.image} alt={data.title} fill />
			</div>
			<div className='imageText__info flex flex-col gap-[39px] px-4'>
				{data.title && <h3>{data.title}</h3>}
				<div>
					{data.description.map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>
			</div>
		</div>
	)
}
