export interface IImageText {
	image: string
	title: string
	description: string[]
}

export interface IArticle {
	image: string
	title: string
	description: string[]
	content: string[]
	slug: string
	gallery?: string[]
}
