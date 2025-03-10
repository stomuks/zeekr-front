import { useQuery } from 'react-query'
import { BrandService } from '../services/service'
import { IMenuItem } from '../components/layout/navigation/MenuWrapper/menu.interface'
import { getBrandsUrl } from '../config/url.config'

export const useBrands = () => {
	const queryData = useQuery('brands list', () => BrandService.getBrands(), {
		select: ({ data }) =>
			data.map(
				brand =>
					({
						icon: brand.icon,
						link: getBrandsUrl(brand.slug),
						title: brand.name
					}) as IMenuItem
			),

		onError(error) {
			console.log(error)
		}
	})

	return queryData
}
