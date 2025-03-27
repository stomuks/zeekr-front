import Image from 'next/image'
import { FC } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem
} from '@/components/ui/carousel'
import { prisma } from '@/prisma/prisma-client'
import CustomLink from '@/components/sections/customLink'

export const BrandsGallery: FC = async () => {
	const brands = await prisma.brand.findMany()
	return (
		<section className='py-14 bg-blue-400'>
			<div className='container'>
				<Carousel>
					<CarouselContent>
						{brands.map(brand => (
							<CarouselItem
								key={brand.id}
								className='basis-1/3 sm:basis-1/4 md:basis-1/5'
							>
								<CustomLink href={`/${brand.url}`}>
									<div className='flex p-[20%] rounded-2xl justify-center items-center w-full aspect-square bg-gray-100 xl:rounded-[45px]'>
										<Image
											src={brand.icon}
											alt={brand.name}
											width={236}
											height={236}
										/>
									</div>
								</CustomLink>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	)
}
