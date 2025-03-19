import Image from 'next/image'
import { FC } from 'react'

export const Address: FC = () => {
	return (
		<section className='address flex  min-h-[750px] bg-blue-400'>
			<div className='flex justify-end basis-1/2 grow bg-gray-100 mb-14 pb-9'>
				<div className='px-4 flex flex-col gap-[19px] max-w-[870px] pr-8'>
					<h2 className='uppercase text-[100px] text-blue-400 font-black italic'>
						автосалон
					</h2>
					<div className='text-gray-800 text-4xl leading-10 font-medium flex flex-col gap-8'>
						<a
							className='text-[40px] leading-[49px] font-bold'
							href='tel: +375 (33) 371-11-11'
						>
							+ 375 (33) 371-11-11
						</a>
						<div>
							<p>Пн-Пт 08:00 - 20:00</p>
							<p>Сб-Вс 10:00 - 18:00</p>
						</div>
						<div>
							<p>г. Минск пр-т Независимости, 84А</p>
							<a href='mailto:info@zeekr.by'>info@zeekr.by</a>
							<p className='font-bold'>ЗИКР ЦЕНТР МИНСК</p>
							<p>OOO “Зикер Авто”</p>
						</div>
						<p className='text-2xl'>
							УНП 193680867, Республика Беларусь, Республика Беларусь, г.Минск,
							220062 пр. Победителей д. 141, пом 3 <br /> Расчетный счет
							BY20PJCB30120798231000000933 ОАО «Приорбанк»
						</p>
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
