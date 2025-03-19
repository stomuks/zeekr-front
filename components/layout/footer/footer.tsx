import { FC } from 'react'
import YandexMap from '../../sections/yandex/yandexMap'

import logoImage from '@/public/logo.png'
import Link from 'next/link'
import Image from 'next/image'

export const Footer: FC = () => {
	return (
		<footer className='bg-footer-img'>
			<div className='w-full min-h-[522px] relative'>
				<div className='w-full h-full absolute'>
					<YandexMap />
				</div>
				<div className='absolute top-1/2 -translate-y-1/2 min-w-[748px] left-20 flex items-center bg-footer p-9 '>
					<div className='relative w-full'>
						<div>
							<div className='flex flex-col'>
								<h3 className='text-4xl font-bold leading-10 text-gray-900'>
									StarGateMotors
								</h3>
								<p className='text-3xl leading-9 font-medium text-gray-800'>
									OOO “Зикер Авто”
								</p>
							</div>
							<div className='flex flex-col pt-[32px]'>
								<h3 className='text-3xl font-bold leading-9 text-gray-900'>
									Телефон
								</h3>
								<a
									className='text-3xl leading-9 font-medium text-gray-800'
									href='tel: +375 (33) 371-11-11'
								>
									+375 (33) 371-11-11
								</a>
							</div>
							<div>
								<h3 className='text-3xl font-bold leading-9 text-gray-900'>
									Адрес
								</h3>
								<p className='text-3xl leading-9 font-medium text-gray-800'>
									г. Минск, пр-т Независимости, 84А
								</p>
							</div>
						</div>
						<div className='absolute top-0 right-0'>
							<Link href={'/'}>
								<Image src={logoImage} alt={'logo'} width={222} height={60} />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='pt-[43px] pb-[61px] flex justify-between gap-[143px]'>
					<div className='flex flex-col grow'>
						<div className='flex justify-between'>
							<div>
								<Image src={logoImage} alt={'logo'} width={262} height={70} />
							</div>
							<div className='text-2xl leading-9 text-gray-900 font-bold'>
								<ul>
									<li>
										<Link href='/'>Заказать электромобиль</Link>
									</li>
									<li>
										<Link href='/'>Бренды</Link>
									</li>
									<li>
										<Link href='/'>Политика обработки Cookie</Link>
									</li>
									<li>
										<Link href='/'>Политика обработки персональных данных</Link>
									</li>
									<li>
										<Link href='/'>Электронная Книга Отзывов</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className='font-medium text-xl leading-6 text-gray-500 flex flex-col'>
							<p>ЗИКР ЦЕНТР МИНСК</p>
							<p>OOO “Зикер Авто”</p>
							<p>УНП 193680867 </p>
							<p>Юридический адрес:</p>
							<p>
								Республика Беларусь, г.Минск, 220062 пр. Победителей д. 141, пом
								3
							</p>
							<p>Расчетный счет BY20PJCB30120798231000000933 ОАО «Приорбанк»</p>
						</div>
					</div>
					<div className='max-w-[340px] flex flex-col gap-5 font-medium text-2xl leading-8 text-gray-800'>
						<div>
							<h3 className='font-extrabold'>Контакты:</h3>
							<a href='tel: +375 (33) 371-11-11'>+375 (33) 371-11-11</a>
						</div>
						<div>
							<h3 className='font-extrabold'>Время работы:</h3>
							<p>Пн-Пт 08:00 - 20:00</p>
							<p>Сб-Вс 10:00 - 18:00</p>
						</div>
						<div>
							<h3 className='font-extrabold'>Адрес салона:</h3>
							<p>г. Минск пр-т Независимости, 84А</p>
							<a href='mailto: info@zeekr.by'>info@zeekr.by</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
