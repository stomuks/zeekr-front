import {
	getCarsTestDriveUrl,
	getCarsUrl,
	getNewCarsUrl
} from '@/config/api.config'
import { axiosInstance } from '@/services/instance'
import { ICar, ICarOld } from '@/shared/types/car.types'

export const CarService = {
	async getCars() {
		return axiosInstance.get<ICarOld[]>(getCarsUrl(''))
	},

	async getCarsTestDrive() {
		return axiosInstance.get<ICarOld[]>(getCarsTestDriveUrl(''))
	},

	async getNewCars() {
		return axiosInstance.get<ICar[]>(getNewCarsUrl(''))
	}
}
