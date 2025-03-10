import { FC } from 'react'
import { Layout } from '../../layout/Layout'
import { HeroMicro } from '../../sections/hero/heroMicro'
import { IArticle } from '@/src/shared/types/imageText.types'
import { newsContent } from '../../../app/news/news.data'
import { ImageTextArticle } from '../../sections/image-text-article/imageTextArticle'

export const News: FC = async () => {
	const heroProps = {
		title: 'Новости SGM'
	}

	return (
		<Layout>
			<HeroMicro {...heroProps} />
			<div className='bg-imageText pb-[188px]'>
				{newsContent.map((item: IArticle, index) => {
					return <ImageTextArticle key={index} data={item} index={index} />
				})}
			</div>
		</Layout>
	)
}
