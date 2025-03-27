import { FC } from 'react'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/sections//Modal'

export const CtaCredit: FC = () => {
	return (
		<div className='bg-gray-200 py-10 md:py-20 lg:py-[125px]'>
			<div className='container'>
				<div className='flex flex-col gap-[58px] justify-center items-center'>
					<p className='max-w-[900px] text-center text-xl sm:text-2xl lg:text-4xl text-gray-800 font-medium'>
						Не упустите возможность завести новый автомобиль уже сегодня!
						<strong> Выберите кредит или лизинг</strong>, которые подходят
						именно вам, и откройте новые горизонты на дорогах!
					</p>
					<div className='flex justify-center gap-6 lg:gap-[87px]'>
						<div>
							<Modal>
								<Button size='lg' className='md:px-[125px] xl:min-w-[502px]'>
									Кредит
								</Button>
							</Modal>
						</div>
						<div>
							<Modal>
								<Button
									size='lg'
									className='md:px-[125px] bg-button-shadow xl:min-w-[502px]'
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
