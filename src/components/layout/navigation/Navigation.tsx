import { FC } from 'react'
import { Logo } from './Logo'
import { MenuWrapper } from './MenuWrapper/MenuWrapper'
import { Button } from '../../ui/button/Button'
import { Modal } from '../../sections/modal/Modal'

export const Navigation: FC = () => {
	return (
		<header className='bg-gray-200 min-h-[130px] inset-x-0 top-0 z-40 w-full flex items-center header'>
			<div className='flex items-center justify-between gap-4 mx-auto'>
				<Logo />
				<MenuWrapper />
				<Modal>
					<Button variant='default'>Связаться с нами</Button>
				</Modal>
			</div>
		</header>
	)
}
