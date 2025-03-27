import { FC } from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/sections/Modal'
import { Title } from '../ui/title'

export const Faq: FC = () => {
	const data = [
		{
			question: 'Какой электромобиль лучше выбрать?',
			answer:
				'Выбор электромобиля зависит от ваших потребностей и предпочтений. Мы предлагаем несколько моделей, которые отличаются по мощности, вместимости, комплектации и дизайну. Перед покупкой мы рекомендуем вам проконсультироваться с нашими менеджерами, которые помогут вам выбрать оптимальную модель.'
		},
		{
			question: 'Есть ли гарантия?',
			answer:
				'Да, мы предоставляем официальную гарантию на все наши автомобили. Срок гарантии составляет 3 года или 100 000 км, в зависимости от того, что наступит раньше. Кроме того, мы предлагаем дополнительные гарантийные программы, которые могут быть заключены до 5 лет.'
		},
		{
			question: 'Какие есть финансовые программы?',
			answer:
				'Мы предлагаем различные финансовые программы, которые помогут вам приобрести электромобиль. Мы сотрудничаем с крупнейшими банками и финансовыми организациями, чтобы предложить вам наиболее выгодные условия кредитования. Кроме того, у нас есть программы лизинга и аренды.'
		},
		{
			question: 'Есть ли сервисное обслуживание?',
			answer:
				'Да, мы предлагаем полный спектр сервисных услуг, включая обслуживание, ремонт и замену запчастей. Наш сервисный центр работает 7 дней в неделю, и мы гарантируем быстрое и качественное обслуживание.'
		}
	]
	return (
		<div className='bg-lines'>
			<section className='container'>
				<Title
					h='h2'
					className='text-blue-400 pt-10 md:pt-20 font-black xl:leading-[121px] xl:pt-[160px]'
				>
					часто задаваемые вопросы
				</Title>
				<div className='flex flex-col pb-14 justify-between pt-8 gap-16 2xl:flex-row 2xl:pb-[175px]'>
					<div className='grow'>
						<Accordion type='single' collapsible>
							{data.map((item, index) => (
								<AccordionItem
									className='border-none'
									key={item.question}
									value={index.toString()}
								>
									<AccordionTrigger className='gap-4 text-xl sm:text-3xl xl:text-4xl'>
										{item.question}
									</AccordionTrigger>
									<AccordionContent className='text-2xl max-w-5xl'>
										{item.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
					<div className='flex flex-col gap-4 sm:gap-9 2xl:max-w-[559px]'>
						<span className='text-3xl sm:text-4xl text-center text-gray-700 2xl:text-left'>
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
