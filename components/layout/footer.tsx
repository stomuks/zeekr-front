import { FC } from 'react'
import YandexMap from '@/components/sections/yandexMap'

import logoImage from '@/public/logo.png'
import Image from 'next/image'
import CustomLink from '../sections/customLink'

export const Footer: FC = () => {
	return (
		<footer className='bg-footer-img'>
			<div className='w-full min-h-[522px] relative'>
				<div className='w-full h-full absolute'>
					<YandexMap />
				</div>
				<div className='absolute top-1/2 -translate-y-1/2 left-[10%] md:left-20 flex items-center bg-footer p-9 w-[748px] max-w-[80%]'>
					<div className='relative w-full pt-20 md:p-0'>
						<div>
							<div className='flex flex-col text-xl sm:text-4xl sm:leading-9'>
								<h3 className='font-bold  text-gray-900'>StarGateMotors</h3>
								<p className=' font-medium text-gray-800'>OOO “Зикер Авто”</p>
							</div>
							<div className='flex flex-col text-lg sm:text-2xl pt-4 sm:pt-[32px]'>
								<h3 className='font-bold  text-gray-900'>Телефон</h3>
								<a
									className='font-medium text-gray-800'
									href='tel: +375 (33) 371-11-11'
								>
									+375 (33) 371-11-11
								</a>
							</div>
							<div className='flex flex-col text-lg sm:text-2xl pt-4 sm:pt-[32px]'>
								<h3 className='font-bold  text-gray-900'>Адрес</h3>
								<p className='font-medium text-gray-800'>
									г. Минск, пр-т Независимости, 84А
								</p>
							</div>
						</div>
						<div className='absolute top-0 left-0 md:right-0 md:left-auto'>
							<CustomLink href={'/'}>
								<Image
									src={logoImage}
									alt={'logo'}
									width={222}
									height={60}
									style={{ maxWidth: '50vw' }}
								/>
							</CustomLink>
						</div>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='flex pt-[43px] pb-10 sm:pb-[61px] flex-col gap-6 lg:gap-0'>
					<div className='flex justify-between gap-6 flex-col lg:flex-row xl:gap-20 2xl:gap-[143px]'>
						<div className='flex flex-col grow'>
							<div className='flex justify-between gap-6 flex-col lg:flex-row'>
								<div>
									<Image
										src={logoImage}
										alt={'logo'}
										width={262}
										height={70}
										style={{ maxWidth: '50vw' }}
									/>
								</div>
								<div className='text-lg leading-8 sm:text-2xl sm:leading-9 text-gray-900 font-bold'>
									<ul>
										<li>
											<CustomLink href='/'>Заказать электромобиль</CustomLink>
										</li>
										<li>
											<CustomLink href='/'>Бренды</CustomLink>
										</li>
										<li>
											<CustomLink href='/'>
												Политика обработки Cookie
											</CustomLink>
										</li>
										<li>
											<CustomLink href='/'>
												Политика обработки персональных данных
											</CustomLink>
										</li>
										<li>
											<CustomLink href='/'>
												Электронная Книга Отзывов
											</CustomLink>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='max-w-[340px] flex flex-col gap-5 font-medium text-lg sm:text-2xl sm:leading-8 text-gray-800'>
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
					<div className='font-medium text-md sm:text-xl sm:leading-6 text-gray-500 flex flex-col'>
						<p>ЗИКР ЦЕНТР МИНСК</p>
						<p>OOO “Зикер Авто”</p>
						<p>УНП 193680867 </p>
						<p>Юридический адрес:</p>
						<p>
							Республика Беларусь, г.Минск, 220062 пр. Победителей д. 141, пом 3
						</p>
						<p>Расчетный счет BY20PJCB30120798231000000933 ОАО «Приорбанк»</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
