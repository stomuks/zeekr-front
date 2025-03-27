import { FC } from 'react'
import { Layout } from '@/components/layout/Layout'
import { HeroMicro } from '@/components/sections/heroMicro'
import { News } from '@prisma/client'
import { prisma } from '@/prisma/prisma-client'
import { ImageText } from '../sections/imageText'
import { IImageText } from '@/shared/types/imageText.types'

export const NewsPage: FC = async () => {
	const heroProps = {
		title: 'Новости SGM'
	}

	const newsContent: News[] = await prisma.news.findMany()

	return (
		<Layout>
			<HeroMicro {...heroProps} />
			<div className='pb-20 xl:pb-[188px]'>
				{newsContent.map((item: IImageText, index) => {
					return <ImageText key={index} data={item} index={index} />
				})}
			</div>
		</Layout>
	)
}
