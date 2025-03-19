import { FC } from 'react'
import { IHeroMicro } from './hero.types'

export const HeroMicro: FC<IHeroMicro> = ({ title }) => {
	return (
		<section className='relative flex flex-col gap-1 items-center justify-center min-h-[358px] bg-hero-micro'>
			<h1 className='z-10 text-[100px] font-black text-gray-100 leading-[110px] uppercase italic text-center container'>
				{title}
			</h1>
		</section>
	)
}
