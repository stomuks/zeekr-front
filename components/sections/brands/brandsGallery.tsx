import { BrandService } from '@/services/service'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem
} from '../../ui/carousel/carousel'

export const BrandsGallery: FC = async () => {
	const brands = await BrandService.getBrands()
	return (
		<section className='py-14 bg-blue-400'>
			<div className='container'>
				<Carousel>
					<CarouselContent className='-ml-11'>
						{brands.data.map(brand => (
							<CarouselItem key={brand._id} className='pl-11 basis-1/5'>
								<Link href={`/${brand.slug}`}>
									<div className='flex justify-center items-center w-full aspect-square bg-gray-100 rounded-[45px] p-16'>
										<Image
											src={brand.icon}
											alt={brand.name}
											width={236}
											height={236}
										/>
									</div>
								</Link>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	)
}
