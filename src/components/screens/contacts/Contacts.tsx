import { FC } from 'react'
import { Layout } from '../../layout/Layout'
import { CarService } from '@/src/services/service'
import { HeroMicro } from '../../sections/hero/heroMicro'
import { Address } from '../../sections/contacts/Address'
import { FormWrapper } from '../../sections/contacts/Form/FormWrapper'
import { MyForm } from '../../sections/contacts/Form/Form'

export const Contacts: FC = async () => {
	const heroProps = {
		title: 'Контакты SGM'
	}

	const carsTestDrive = await CarService.getCarsTestDrive()

	return (
		<Layout>
			<HeroMicro {...heroProps} />
			<Address />
			<FormWrapper>
				<MyForm />
			</FormWrapper>
		</Layout>
	)
}
