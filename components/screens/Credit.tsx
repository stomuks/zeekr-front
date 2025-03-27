import { FC } from 'react'
import { Layout } from '@/components/layout/Layout'
import { FormWrapper } from '@/components/sections//FormWrapper'
import { MyForm } from '@/components/sections//Form'
import { HeroSmall } from '@/components/sections//heroSmall'
import { CtaCredit } from '@/components/screens/CtaCredit'
import { ContentCredit } from '@/components/screens/ContentCredit'
import { Banks } from '@/components/sections//banks'

export const Credit: FC = async () => {
	const heroProps = {
		title: 'Финансовые программы',
		imageUrl: '/default/water.png'
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
