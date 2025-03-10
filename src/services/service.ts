import { getBrandsUrl, getCarsUrl } from '../config/api.config'
import { IBrand } from '../shared/types/brands.types'
import { axiosClassic } from '../api/interceptors'
import { ICar } from '../shared/types/car.types'

export const BrandService = {
	async getBrands() {
		return axiosClassic.get<IBrand[]>(getBrandsUrl(''))
	}
}

export const CarService = {
	async getCars(field?: string, searchTerm?: string) {
		return axiosClassic.get<ICar[]>(getCarsUrl(''), {
			params: {
				searchTerm,
				field
			}
		})
	},

	async getCarById(id: string) {
		return axiosClassic.get<ICar>(getCarsUrl(`/${id}`))
	},

	async getCarBySlug(slug: string) {
		return axiosClassic.get<ICar>(getCarsUrl(`/by-slug/${slug}`))
	},

	async getCarsTestDrive() {
		return axiosClassic.get<ICar[]>(getCarsUrl('/by-testdrive'))
	},

	async getCarsByBrand(brand: string) {
		return axiosClassic.get<ICar[]>(getCarsUrl(`/by-brands/${brand}`))
	},

	async getCarsByBrandAndTestDrive(brand: string) {
		return axiosClassic.get<ICar[]>(
			getCarsUrl(`/byBrandsAndTestDrive/${brand}`)
		)
	}
}
