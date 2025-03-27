import { Brand, Car, NewCar } from '@prisma/client'

export interface ICarImageText {
	title: string
	image: string
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

export interface ICar extends NewCar {}

export interface ICarOld extends Car {
	Brand?: Brand
}

export interface ICarOldWith
	extends Omit<Car, 'exterior' | 'interior' | 'content'> {
	Brand?: Brand
	exterior: ICarExteriorColor[]
	interior: ICarInteriorColor[]
	content: ICarImageText[]
}
