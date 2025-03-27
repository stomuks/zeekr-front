export const API_URL = `${process.env.APP_URL}/api`
export const getCarsUrl = (string: string) => `${API_URL}/cars${string}`
export const getCarsTestDriveUrl = (string: string) =>
	`${API_URL}/carstestdrive${string}`
export const getNewCarsUrl = (string: string) => `${API_URL}/newcars${string}`
