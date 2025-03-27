import { FC } from 'react'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/sections/Modal'

export const Cta: FC = () => {
	return (
		<div className='bg-gray-200 py-10 md:py-20 lg:py-[125px]'>
			<div className='container'>
				<div className='flex flex-col gap-[58px] justify-center items-center'>
					<p className='max-w-[900px] text-center text-xl sm:text-2xl lg:text-4xl text-gray-800 font-medium'>
						Не упустите возможность завести новый автомобиль уже сегодня!
						Записывайтесь на тест-драйв и откройте новые горизонты на дорогах!
					</p>
					<div className='flex flex-col lg:flex-row justify-center gap-6 lg:gap-[87px]'>
						<div>
							<Modal>
								<Button
									size='lg'
									className='px-6 md:px-[80px] xl:min-w-[502px]'
								>
									Тест-Драйв
								</Button>
							</Modal>
						</div>
						<div>
							<Modal>
								<Button
									size='lg'
									className='px-6 md:px-[80px] bg-button-shadow xl:min-w-[502px]'
								>
									Обсудить условия
								</Button>
							</Modal>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
