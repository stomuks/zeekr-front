import React from 'react'
import { Modal } from './Modal'
import { Button } from '../ui/Button'

export const FreeCta: React.FC = () => {
	return (
		<div className='bg-carColor'>
			<div className='section py-10 sm:py-20 lg:py-[110px]'>
				<div className='w-full flex flex-col items-center gap-[22px]'>
					<h3 className='uppercase text-gray-100 text-2xl lg:leading-[39px] lg:text-[39px] font-extrabold text-center'>
						Получите бесплатную консультацию
					</h3>
					<div>
						<Modal>
							<Button size='lg' className='px-[140px]'>
								Получить
							</Button>
						</Modal>
					</div>
				</div>
			</div>
		</div>
	)
}
