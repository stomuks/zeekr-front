import { FC } from 'react'
import { Layout } from '../../layout/Layout'
import { FormWrapper } from '../../sections/contacts/Form/FormWrapper'
import { MyForm } from '../../sections/contacts/Form/Form'
import { HeroSmall } from '../../sections/hero/heroSmall'
import { CtaCredit } from './CtaCredit'
import { Banks } from '../../sections/banks/banks'
import { ContentCredit } from './ContentCredit'

export const Credit: FC = async () => {
	const heroProps = {
		title: 'Финансовые программы',
		imageUrl: '/uploads/default/water.png'
	}

	return (
		<Layout>
			<HeroSmall {...heroProps} />
			<CtaCredit />
			<ContentCredit />
			<div className='mb-[118px]'>
				<Banks />
			</div>
			<FormWrapper>
				<MyForm title='Консультация финансированию' />
			</FormWrapper>
		</Layout>
	)
}
