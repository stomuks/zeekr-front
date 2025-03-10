export interface ICarImageText {
	image: string
	title: string
	description: string[]
}

export interface ICarExteriorColor {
	name: string
	imageUrl: string
	color: string
}

export interface ICarInteriorColor {
	name: string
	imageUrl: string
	colorFirst: string
	colorSecond: string
}

export interface ICar {
	_id: string
	name: string
	model: string
	complectation: string
	description: string
	imageUrl: string
	typeEngine: string
	year: number
	price: number
	length: number
	width: number
	height: number
	wheelbase: number
	engine: number
	testDrive?: boolean
	slug: string
	previewImage: string
	interior: ICarInteriorColor[]
	exteriorTitle: string
	brand: string
	content: ICarImageText[]
	gallery: string[]
	exterior: ICarExteriorColor[]
}
