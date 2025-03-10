export const getBrandsUrl = (slug: string) => `/brands/${slug}`
export const getCarsUrl = (slug: string) => `/cars/${slug}`
export const getAdminUrl = (url: string) => `/mxadmin/${url}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)
