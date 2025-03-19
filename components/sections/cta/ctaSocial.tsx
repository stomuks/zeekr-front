import { FC } from 'react'
import { Button } from '../../ui/button/Button'
import Image from 'next/image'
import { Modal } from '../modal/Modal'

export const CtaSocial: FC = () => {
	return (
		<div className='bg-gray-100 py-[125px]'>
			<div className='container'>
				<div>
					<div className='flex flex-col gap-8 items-center'>
						<Image
							src={'/uploads/default/logo-gray.png'}
							alt={'logo'}
							width={282}
							height={78}
						/>
						<p className='max-w-[825px] text-center text-[48px] text-gray-800 font-extrabold leading-[59px]'>
							Все еще не уверены, или у вас появились другие вопросы?
						</p>
						<p className='max-w-[673px] text-center text-[24px] text-gray-800 font-medium leading-[30px]'>
							Задать свои вопросы вы можете по представленным на сайте
							телефонам, электронной почте, написав нам в мессенджерах, или
							любым другим способом.
						</p>
						<Modal>
							<Button size='lg' className='px-[41px] w-auto'>
								Заказать звонок
							</Button>
						</Modal>
						<ul>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
