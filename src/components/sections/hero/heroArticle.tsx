import { FC } from 'react'
import { IHeroMicro } from './hero.types'

export const HeroArticle: FC<IHeroMicro> = ({ title }) => {
	return (
		<section className='relative'>
			<div className='max-w-[888px] bg-blue-400 article-header relative z-20 min-h-[490px]'>
				<h1 className='z-10 text-[64px] relative font-extrabold leading-[78px] text-gray-100 pt-[129px] pl-[74px] pr-[99px] pb-[36px]'>
					{title}
				</h1>
			</div>
			<div className='gap-1 items-center justify-center min-h-[358px] bg-hero-micro'></div>
		</section>
	)
}
