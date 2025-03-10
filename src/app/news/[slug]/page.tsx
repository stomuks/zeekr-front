import { Article } from '@/src/components/screens/article/Article'
import { newsContent } from '@/src/app/news/news.data'
import { CarService } from '@/src/services/service'
import { IArticle } from '@/src/shared/types/imageText.types'
import { notFound } from 'next/navigation'

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
	const posts = newsContent

	return posts.map((post: { slug: string }) => ({
		slug: post.slug
	}))
}

export default async function Page({
	params
}: {
	params: Promise<{ slug: string }>
}) {
	const slug = await params
	const post = newsContent.find((item: IArticle) => item.slug === slug.slug)

	if (!post) {
		notFound()
	}

	return <Article {...post} />
}
