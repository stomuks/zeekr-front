import Image from 'next/image'
import { FC } from 'react'
import { Modal } from '../modal/Modal'
import { Button } from '../../ui/button/Button'

export const AddressService: FC = () => {
	return (
		<section className='address flex  min-h-[750px] bg-blue-400 pt-14'>
			<div className='flex justify-end basis-1/2 grow bg-gray-100 mb-14 pb-9'>
				<div className='px-4 flex flex-col gap-[19px] max-w-[870px] pr-8'>
					<h2 className='uppercase text-[100px] text-blue-400 font-black italic'>
						автосервис
					</h2>
					<div className='text-gray-800 text-4xl leading-10 font-medium flex flex-col gap-8'>
						<a
							className='text-[40px] leading-[49px] font-bold'
							href='tel: +375 (29) 666-63-53'
						>
							+375 (29) 666-63-53
						</a>
						<a
							className='text-[40px] leading-[49px] font-bold'
							href='tel: +375 (29) 339-34-94'
						>
							+375 (29) 339-34-94
						</a>
						<div>
							<p>Пн-Пт 10:00 - 19:00</p>
							<p>Сб 10:00 - 16:00</p>
							<p>Вс выходной</p>
						</div>
						<div>
							<p>г. Минск ул. Тимирязева 72/1</p>
							<a href='mailto:info@zeekr.by'>service@zeekr.by</a>
						</div>
						<div>
							<Modal>
								<Button size='lg' className='px-[41px] min-w-[502px] w-auto'>
									Записаться
								</Button>
							</Modal>
						</div>
					</div>
				</div>
			</div>
			<div className='address__image relative basis-1/2 shrink'>
				<div className='absolute bottom-14 -left-1 w-full h-1/2 bg-gray-100'></div>
				<Image
					className='w-full object-cover rounded-bl-[254px]'
					src='/uploads/default/carcontact.jpg'
					alt='car'
					fill
				/>
			</div>
		</section>
	)
}
