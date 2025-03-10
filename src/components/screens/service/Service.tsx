import { FC } from 'react'
import { Layout } from '../../layout/Layout'
import { FormWrapper } from '../../sections/contacts/Form/FormWrapper'
import { MyForm } from '../../sections/contacts/Form/Form'
import { HeroSmall } from '../../sections/hero/heroSmall'
import { ServiceQuote } from '../../sections/service/ServiceQuote'
import { serviceContent } from '@/src/app/service/service.data'
import { ImageText } from '../../sections/image-text/imageText'
import { ICarImageText } from '@/src/shared/types/car.types'
import { AddressService } from '../../sections/service/AddressService'

export const Service: FC = async () => {
	const heroProps = {
		title: 'Сервис',
		imageUrl: '/uploads/default/water.png'
	}

	const content = serviceContent

	return (
		<Layout>
			<HeroSmall {...heroProps} />
			<ServiceQuote />
			<AddressService />
			<div className='bg-imageText pb-[188px]'>
				{content.map((item: ICarImageText, index) => {
					return <ImageText key={index} data={item} index={index} />
				})}
			</div>
			<FormWrapper>
				<MyForm title='Записаться на сервис' />
			</FormWrapper>
		</Layout>
	)
}
