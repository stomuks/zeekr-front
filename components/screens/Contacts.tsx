import { FC } from 'react'
import { Layout } from '@/components/layout/Layout'
import { HeroMicro } from '@/components/sections/heroMicro'
import { Address } from '@/components/sections/Address'
import { FormWrapper } from '@/components/sections/FormWrapper'
import { MyForm } from '@/components/sections/Form'
import { addressData } from '@/shared/data/address.data'

export const Contacts: FC = async () => {
	const heroProps = {
		title: 'Контакты SGM'
	}

	return (
		<Layout>
			<HeroMicro {...heroProps} />
			<Address {...addressData} />
			<FormWrapper>
				<MyForm />
			</FormWrapper>
		</Layout>
	)
}
