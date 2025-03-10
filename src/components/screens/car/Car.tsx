import { FC } from 'react'
import { Layout } from '../../layout/Layout'
import { HeroSmall } from '../../sections/hero/heroSmall'
import { ICar, ICarImageText } from '@/src/shared/types/car.types'
import { ImageText } from '../../sections/image-text/imageText'
import { CarColor } from '../../sections/car/carColor/carColor'
import { CarInterior } from '../../sections/car/carInterior/CarInterior'
import { CarPageGallery } from '../../sections/car/carPageGallery/carPageGallery'
import { Cta } from '../../sections/cta/cta'
import { IImageText } from '@/src/shared/types/imageText.types'

export const Car: FC<ICar> = async car => {
	const heroProps = {
		title: car.name + ' ' + car.model,
		imageUrl: car.imageUrl
	}

	const content: Array<IImageText> = []

	car.content.map((item: IImageText) => {
		content.push(item)
	})

	return (
		<Layout>
			<HeroSmall {...heroProps} />
			<CarColor data={car.exterior} title={car.exteriorTitle} />
			<div className='bg-imageText pb-[188px]'>
				{content.map((item: ICarImageText, index) => {
					return <ImageText key={index} data={item} index={index} />
				})}
			</div>
			<CarInterior data={car.interior} />
			<CarPageGallery data={car.gallery} />
			<Cta />
		</Layout>
	)
}
