import { FC } from 'react'
import { Layout } from '../../layout/Layout'
import { HeroSmall } from '../../sections/hero/heroSmall'
import { LastNews } from '../../sections/last-news/lastNews'
import { FormWrapper } from '../../sections/contacts/Form/FormWrapper'
import { MyForm } from '../../sections/contacts/Form/Form'
import { ImageTextAbout } from '../../sections/image-text-about/ImageTextAbout'
import { aboutContent } from '@/app/about/about.data'
import { ICarImageText } from '@/shared/types/car.types'
import { HeroMicroQuote } from '../../sections/hero/heroMicroQuote'
import { CtaSocial } from '../../sections/cta/ctaSocial'

export const About: FC = async () => {
	const heroProps = {
		title: '',
		description: '',
		imageUrl: '/uploads/default/water.png'
	}

	const content = aboutContent

	const heroMicroQuote = {
		title: 'SGM',
		description: ' — ваш надежный партнер в мире электромобилей!',
		logo: '/uploads/default/logo-white.png'
	}

	return (
		<Layout>
			<HeroSmall {...heroProps} />
			<HeroMicroQuote {...heroMicroQuote} />
			<div className='bg-imageText pb-[188px]'>
				{content.map((item: ICarImageText, index) => {
					return <ImageTextAbout key={index} data={item} index={index} />
				})}
				<div className='container'>
					<div className='bg-blue-400 max-w-[1400px] rounded-[45px] py-[53px] px-[212px] mx-auto mt-[190px] z-20 relative'>
						<p className=' text-gray-100 text-4xl font-medium text-center'>
							Присоединяйтесь к нам на пути к зеленому транспорту и сделайте шаг
							в будущее вместе с нами!
						</p>
					</div>
				</div>
			</div>
			<LastNews />
			<FormWrapper>
				<MyForm />
			</FormWrapper>
			<CtaSocial />
		</Layout>
	)
}
