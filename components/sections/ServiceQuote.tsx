import { FC } from 'react'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { Modal } from '@/components/sections/Modal'

export const ServiceQuote: FC = () => {
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
						<p className='max-w-[1200px] text-center text-lg xl:text-[24px] text-gray-800 font-medium xl:leading-[30px]'>
							Электромобили становятся все более популярными благодаря своей
							экологичности, экономичности и современным технологиям. Однако,
							как и любое другое транспортное средство, они требуют регулярного
							технического обслуживания для обеспечения безопасности и
							долговечности.
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
