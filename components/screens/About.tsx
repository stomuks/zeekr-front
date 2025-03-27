import { FC } from 'react'
import { Layout } from '@/components/layout/Layout'
import { HeroSmall } from '@/components/sections/heroSmall'
import { LastNews } from '@/components/sections/lastNews'
import { FormWrapper } from '@/components/sections/FormWrapper'
import { MyForm } from '@/components/sections/Form'
import { aboutContent } from '@/shared/data/about.data'
import { ICarImageText } from '@/shared/types/car.types'
import { HeroMicroQuote } from '@/components/sections/heroMicroQuote'
import { CtaSocial } from '@/components/sections/ctaSocial'
import { ImageText } from '../sections/imageText'

export const About: FC = async () => {
	const heroProps = {
		title: '',
		description: '',
		imageUrl: '/default/water.png'
	}

	const content = aboutContent

	const heroMicroQuote = {
		title: 'SGM',
		description: ' — ваш надежный партнер в мире электромобилей!',
		logo: '/default/logo-white.png'
	}

	return (
		<Layout>
			<HeroSmall {...heroProps} />
			<HeroMicroQuote {...heroMicroQuote} />
			<div className='bg-imageText pb-20 xl:pb-[188px]'>
				{content.map((item: ICarImageText, index) => {
					return <ImageText key={index} data={item} index={index + 1} />
				})}
				<div className='container'>
					<div className='bg-blue-400 max-w-[1400px] rounded-[45px] py-10 lg:py-[53px] px-4 lg::px-[212px] mx-auto mt-20 lg:mt-[190px] z-20 relative'>
						<p className=' text-gray-100 text-xl lg:text-4xl font-medium text-center'>
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
