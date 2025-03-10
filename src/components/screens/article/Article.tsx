import { IArticle } from '@/src/shared/types/imageText.types'
import { FC } from 'react'
import { HeroArticle } from '../../sections/hero/heroArticle'
import { LastNews } from '../../sections/last-news/lastNews'
import { ArticleContent } from '../../sections/articleContent/ArticleContent'
import { SmallGallery } from '../../sections/smallGallery/SmallGallery'
import { Layout } from '../../layout/Layout'

export const Article: FC<IArticle> = post => {
	console.log(post)
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
