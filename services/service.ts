import { getBrandsUrl, getCarsUrl } from '../config/api.config'
import { IBrand } from '../shared/types/brands.types'
import { axiosClassic } from '../api/interceptors'
import { ICar } from '../shared/types/car.types'

export const BrandService = {
	async getBrands() {
		return {
			data: []
		}
	}
}

export const CarService = {
	async getCars(field?: string, searchTerm?: string) {
		return {
			data: []
		}
	},

	async getCarById(id: string) {
		return axiosClassic.get<ICar>(getCarsUrl(`/${id}`))
	},

	async getCarBySlug(slug: string) {
		return axiosClassic.get<ICar>(getCarsUrl(`/by-slug/${slug}`))
	},

	async getCarsTestDrive() {
		return {
			data: []
		}
	},

	async getCarsByBrand(brand: string) {
		return {
			data: []
		}
	},

	async getCarsByBrandAndTestDrive(brand: string) {
		return {
			data: []
		}
	}
}
