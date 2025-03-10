'use client'
import { FC, useState } from 'react'
import { Button, Checkbox, Group, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { sendMessage } from '@/src/api/telegram'
import { notifications } from '@mantine/notifications'
import { usePathname } from 'next/navigation'

export const MyForm: FC<{ title?: string }> = ({ title }) => {
	const [isLoading, setIsLoading] = useState(false)
	const pathname = usePathname()
	const form = useForm({
		initialValues: {
			name: '',
			phone: '',
			message: '',
			termsOfService: false,
			pathname
		},

		validate: {
			name: value =>
				value?.length < 2 ? 'Заполните пожалуйста поле имя' : null,
			phone: value =>
				value?.length < 2 ? 'Заполните пожалуйста поле телефон' : null,
			termsOfService: value =>
				value
					? null
					: 'Пожалуйста, согласитесь с условием пользовательского соглашения'
		}
	})

	const handleSubmit = async (values: typeof form.values): Promise<void> => {
		try {
			setIsLoading(true)
			const message: string = `Name: ${values.name}%0APhone: ${values.phone}%0AMessage: ${values.message}%0APage: ${process.env.APP_URL}${pathname}`
			await sendMessage(message)
			notifications.show({
				title: 'Успешно',
				message:
					'Сообщение отправлено, менеджер свяжется с вами в течении 5 минут.'
			})
			form.reset()
		} catch (e) {
			notifications.show({
				title: 'Ошибка',
				message: 'Ошибка на стороне сервера'
			})
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className='px-[70px] py-[50px] flex flex-col gap-[37px]'>
			<div className='flex flex-col gap-[9px]'>
				<h3 className='text-[45px] font-bold leading-[55px] text-gray-800'>
					{title && title ? title : 'Форма обратной связи'}
				</h3>
				<p className='font-medium text-xl text-gray-800'>
					Хотите заказать тест-драйв или уточнить любой вопрос, связанный с
					покупкой автомобиля? Заполните форму, и мы с вами свяжемся
				</p>
			</div>
			<form onSubmit={form.onSubmit(values => handleSubmit(values))}>
				<div className='flex flex-col gap-[23px] formWrapper'>
					<TextInput
						withAsterisk
						placeholder='Имя'
						key={form.key('name')}
						{...form.getInputProps('name')}
					/>

					<TextInput
						withAsterisk
						placeholder='Телефон'
						key={form.key('phone')}
						{...form.getInputProps('phone')}
					/>

					<Textarea
						withAsterisk
						placeholder='Сообщение'
						key={form.key('message')}
						{...form.getInputProps('message')}
					/>

					<div className='flex items-center gap-[21px] relative'>
						<Checkbox
							mt='md'
							key={form.key('termsOfService')}
							{...form.getInputProps('termsOfService', { type: 'checkbox' })}
							style={{ display: 'flex', marginTop: 0 }}
						/>
						<p>
							Я принимаю условия <a href='#'>Пользовательского соглашения</a> и
							выражаю согласие на обработку персональных данных
						</p>
					</div>

					<Group justify='center' mt='md'>
						<Button
							loading={isLoading}
							type='submit'
							className='bg-primary bg-primary-form'
						>
							Заказать звонок
						</Button>
					</Group>
				</div>
			</form>
		</div>
	)
}
