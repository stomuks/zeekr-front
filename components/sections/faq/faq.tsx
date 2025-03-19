import { FC } from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '../../ui/accordion/accordion'
import { Button } from '../../ui/button/Button'
import { Modal } from '../modal/Modal'

export const Faq: FC = () => {
	const data = [
		{
			question: 'Какой электомобиль лучше выбрать?',
			answer: 'Yes. It adheres to the WAI-ARIA design pattern.'
		},
		{
			question: 'Есть ли гарантия?',
			answer: 'Yes. It adheres to the WAI-ARIA design pattern.'
		},
		{
			question: 'Какие есть финансовые программы?',
			answer: 'Yes. It adheres to the WAI-ARIA design pattern.'
		},
		{
			question: 'Есть ли сервисное обслуживание?',
			answer: 'Yes. It adheres to the WAI-ARIA design pattern.'
		}
	]
	return (
		<div className='bg-lines'>
			<section className='container'>
				<h2 className='uppercase text-blue-400 text-[100px] font-black leading-[121px] italic pt-[160px]'>
					часто задаваемые вопросы
				</h2>
				<div className='flex justify-between pt-8 gap-16'>
					<div className='grow'>
						<Accordion type='single' collapsible className='pb-[175px]'>
							{data.map((item, index) => (
								<AccordionItem
									className='border-none'
									key={item.question}
									value={index.toString()}
								>
									<AccordionTrigger className='text-4xl'>
										{item.question}
									</AccordionTrigger>
									<AccordionContent className='text-2xl'>
										{item.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
					<div className='flex flex-col gap-9 max-w-[559px]'>
						<span className='text-4xl text-gray-700'>
							Если у вас возник вопрос, мы ответим на него!
						</span>
						<div>
							<Modal>
								<Button variant='default' size='lg'>
									Оставить заявку
								</Button>
							</Modal>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
