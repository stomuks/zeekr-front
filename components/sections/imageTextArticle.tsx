import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC } from 'react'
import { Button } from '@/components/ui/Button'
import CustomLink from '@/components/sections/customLink'
import { IImageText } from '@/shared/types/imageText.types'

export const ImageTextArticle: FC<{ data: IImageText; index?: number }> = ({
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
			<div className='imageText__image'>
				<Image src={data.image} alt={data.title} fill />
			</div>
			<div className='imageText__info flex flex-col gap-[39px] px-4'>
				<h3>{data.title}</h3>
				<div>
					{data.description.map((item, index) => (
						<p key={index}>{item}</p>
					))}
					{data.slug && (
						<CustomLink href={'/news/' + data.slug}>
							<Button size='lg' className='w-auto px-[140px]'>
								подробнее
							</Button>
						</CustomLink>
					)}
				</div>
			</div>
		</div>
	)
}
