import { FC } from 'react'
import { Logo } from './Logo'
import { MenuWrapper } from '@/components/layout/MenuWrapper'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/sections/Modal'
import { menu } from '@/shared/data/menu.data'
import { MenuMob } from '@/components/layout/MenuMob'

export const Navigation: FC = () => {
	return (
		<header className='bg-gray-200 min-h-20 md:min-h-[130px] inset-x-0 top-0 z-40 w-full flex header px-4'>
			<div className='flex items-center gap-4 justify-between w-full 2xl:mx-auto 2xl:w-auto'>
				<Logo />
				<MenuWrapper className='hidden 2xl:block' menu={menu} />
				<div className='flex gap-4 sm:gap-8 items-center h-full'>
					<Modal>
						<Button variant='default' className='text-sm sm:text-xl'>
							Связаться с нами
						</Button>
					</Modal>
					<MenuMob className='2xl:hidden h-full' menu={menu} />
				</div>
			</div>
		</header>
	)
}
