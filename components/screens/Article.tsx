import { IArticle } from '@/shared/types/imageText.types'
import { FC } from 'react'
import { HeroArticle } from '@/components/sections/heroArticle'
import { LastNews } from '@/components/sections/lastNews'
import { ArticleContent } from '@/components/sections/ArticleContent'
import { SmallGallery } from '@/components/sections/SmallGallery'
import { Layout } from '@/components/layout/Layout'
import { News } from '@prisma/client'

export const Article: FC<News> = async post => {
	return (
		<Layout>
			<div className='article-wrapper'>
				<HeroArticle title={post.title} />
				<ArticleContent content={post.content} />
				<SmallGallery data={post.gallery || []} />
				<LastNews />
			</div>
		</Layout>
	)
}
