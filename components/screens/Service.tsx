import { FC } from 'react'

import { serviceContent } from '@/app/service/service.data'
import { ICarImageText } from '@/shared/types/car.types'
import { ImageText } from '@/components/sections/imageText'
import { Layout } from '@/components/layout/Layout'
import { HeroSmall } from '@/components/sections/heroSmall'
import { ServiceQuote } from '@/components/sections/ServiceQuote'
import { FormWrapper } from '@/components/sections/FormWrapper'
import { MyForm } from '@/components/sections/Form'
import { serviceData } from '@/shared/data/address.data'
import { Address } from '../sections/Address'

export const Service: FC = async () => {
	const heroProps = {
		title: 'Сервис',
		imageUrl: '/default/water.png'
	}

	const content = serviceContent

	return (
		<Layout>
			<HeroSmall {...heroProps} />
			<ServiceQuote />
			<Address {...serviceData} />
			<div className='pb-20 xl:pb-[188px]'>
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
