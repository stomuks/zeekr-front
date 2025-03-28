import { Article } from '@/components/screens/Article'
import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'

export default async function Page({
	params
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const post = await prisma.news.findFirst({ where: { slug: slug } })

	if (!post) {
		notFound()
	}

	return <Article {...post} />
}
