export const API_URL = `${process.env.APP_URL}/api`

console.log(API_URL)

export const getBrandsUrl = (string: string) => `/brands${string}`
export const getAuthUrl = (string: string) => `/auth${string}`
export const getCarsUrl = (string: string) => `/cars${string}`
