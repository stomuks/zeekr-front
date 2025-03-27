import { FC } from 'react'
import { IHeroMicro } from '@/shared/types/hero.types'
import { Title } from '../ui/title'

export const HeroMicro: FC<IHeroMicro> = ({ title }) => {
	return (
		<section className='relative flex flex-col gap-1 items-center justify-center min-h-[358px] bg-hero-micro'>
			<Title h='h1' className='container'>
				{title}
			</Title>
		</section>
	)
}
