import { FC } from 'react'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { Modal } from '@/components/sections/Modal'

export const CtaSocial: FC = () => {
	return (
		<div className='bg-gray-100 py-20 xl:py-[125px]'>
			<div className='container'>
				<div>
					<div className='flex flex-col gap-8 items-center'>
						<Image
							src={'/default/logo-gray.png'}
							alt={'logo'}
							width={282}
							height={78}
						/>
						<p className='max-w-[825px] text-center text-2xl lg:text-[48px] text-gray-800 font-extrabold lg:leading-[59px]'>
							Все еще не уверены, или у вас появились другие вопросы?
						</p>
						<p className='max-w-[673px] text-center text-xl lg:text-[24px] text-gray-800 font-medium lg:leading-[30px]'>
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
