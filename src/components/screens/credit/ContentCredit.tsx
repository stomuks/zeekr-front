import { creditData, lisingData } from '@/src/app/credit/credit.data'
import { IDataCredit } from '@/src/app/credit/credit.interface'
import Image from 'next/image'
import { FC } from 'react'
import { Button } from '../../ui/button/Button'

export const ContentCredit: FC = () => {
	const dataCredit: Array<IDataCredit> = creditData
	const dataLising: Array<IDataCredit> = lisingData
	return (
		<div className='relative mb-[134px]'>
			<div className='container'>
				<div className='flex'>
					<div className='w-[60%] pr-[60px] pt-[44px]'>
						<h2 className='text-[100px] text-blue-300 font-black uppercase leading-[100px] italic'>
							Кредит
						</h2>
						<div className='flex justify-end'>
							<div className='grid grid-cols-2 gap-[40px] pt-[33px]'>
								{dataCredit?.map((item, index) => (
									<div
										key={index}
										className='w-[400px] h-[350px] flex items justify-center object-cover border-[3px] border-gray-500 rounded-[45px]'
									>
										<Image
											src={item.image}
											className='object-contain'
											alt='bank'
											width={250}
											height={177}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className='w-[40%] pl-[40px] pt-[180px] bg-blue-300 pb-[137px]'>
						<div className='max-w-[514px] flex flex-col gap-[40px] text-[30px] leading-[36px] font-bold text-gray-800'>
							<div>
								<h4>Минимальный аванс</h4>
								<p className='font-medium'>
									от 10% до 30% от стоимости автомобиля
								</p>
							</div>
							<div>
								<h4>Максимальный срок</h4>
								<p className='font-medium'>12, 24, 36, 48 или 60 месяцев</p>
							</div>
							<div>
								<h4>Ставка финансирования</h4>
								<p className='font-medium'>
									от 8% до 15% годовых, в зависимости от срока кредита и
									кредитной истории заемщик
								</p>
							</div>
							<div>
								<h4>Валюта</h4>
								<p className='font-medium'>BYN</p>
							</div>
							<div>
								<p className='font-medium text-[20px] leading-[24px]'>
									Максимальная сумма 250 000 BYN без справки и доходах.
									Оформление в отделениях банка. Ставка привязана к ставке
									рефинансирования НБ РБ
								</p>
							</div>
							<Button size='lg' className='px-[41px] w-auto min-w-[502px]'>
								Рассчитать
							</Button>
						</div>
					</div>
				</div>
				<div className='flex'>
					<div className='w-[60%] pr-[60px] pt-[44px]'>
						<h2 className='text-[100px] text-blue-300 font-black uppercase leading-[100px] italic'>
							Лизинг
						</h2>
						<div className='flex justify-end'>
							<div className='grid grid-cols-2 gap-[40px] pt-[33px]'>
								{dataLising?.map((item, index) => (
									<div
										key={index}
										className='w-[400px] h-[350px] flex items justify-center object-cover border-[3px] border-gray-500 rounded-[45px]'
									>
										<Image
											src={item.image}
											className='object-contain'
											alt='bank'
											width={250}
											height={177}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className='w-[40%] pl-[40px] pt-[180px] bg-blue-300 rounded-bl-[254px] pb-[137px]'>
						<div className='max-w-[514px] flex flex-col gap-[40px] text-[30px] leading-[36px] font-bold text-gray-800'>
							<div>
								<h4>Минимальный аванс</h4>
								<p className='font-medium'>
									от 10% до 30% от стоимости автомобиля
								</p>
							</div>
							<div>
								<h4>Максимальный срок</h4>
								<p className='font-medium'>12, 24, 36, 48 или 60 месяцев</p>
							</div>
							<div>
								<h4>Ставка финансирования</h4>
								<p className='font-medium'>
									от 8% до 15% годовых, в зависимости от срока кредита и
									кредитной истории заемщик
								</p>
							</div>
							<div>
								<h4>Валюта</h4>
								<p className='font-medium'>BYN</p>
							</div>
							<div>
								<p className='font-medium text-[20px] leading-[24px]'>
									Максимальная сумма 250 000 BYN без справки и доходах.
									Оформление в отделениях банка. Ставка привязана к ставке
									рефинансирования НБ РБ
								</p>
							</div>
							<Button size='lg' className='px-[41px] w-auto min-w-[502px]'>
								Рассчитать
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className='absolute w-[40%] h-full top-0 right-0 bg-blue-300 rounded-bl-[254px] z-[-1]'></div>
		</div>
	)
}
