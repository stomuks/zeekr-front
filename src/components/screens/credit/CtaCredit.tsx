import { FC } from 'react'
import { Button } from '../../ui/button/Button'
import Link from 'next/link'
import { Modal } from '../../sections/modal/Modal'

export const CtaCredit: FC = () => {
	return (
		<div className='bg-gray-200 py-[125px]'>
			<div className='container'>
				<div className='flex flex-col gap-[58px] justify-center items-center'>
					<p className='max-w-[900px] text-center text-4xl text-gray-800 font-medium'>
						Не упустите возможность завести новый автомобиль уже сегодня!
						<strong> Выберите кредит или лизинг</strong>, которые подходят
						именно вам, и откройте новые горизонты на дорогах!
					</p>
					<div className='flex justify-center gap-[87px]'>
						<div>
							<Modal>
								<Button size='lg' className='px-[125px] min-w-[502px]'>
									Кредит
								</Button>
							</Modal>
						</div>
						<div>
							<Modal>
								<Button
									size='lg'
									className='px-[41px] bg-button-shadow min-w-[502px]'
								>
									Лизинг
								</Button>
							</Modal>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
