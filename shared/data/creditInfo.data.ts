import { creditData, lisingData } from '@/shared/data/credit.data'
import { IDataCredit } from '@/shared/types/credit.interface'

const dataCredit: Array<IDataCredit> = creditData
const dataLising: Array<IDataCredit> = lisingData

export const CreditInfoData = [
	{
		title: 'Кредит',
		data: dataCredit,
		items: [
			{
				title: 'Минимальный аванс',
				text: 'от 10% до 30% от стоимости автомобиля'
			},
			{
				title: 'Максимальный срок',
				text: '12, 24, 36, 48 или 60 месяцев'
			},
			{
				title: 'Ставка финансирования',
				text: 'от 8% до 15% годовых, в зависимости от срока кредита и кредитной истории заемщик'
			},
			{
				title: 'Валюта',
				text: 'BYN'
			}
		],
		description:
			'Максимальная сумма 250 000 BYN без справки и доходах. Оформление в отделениях банка. Ставка привязана к ставке рефинансирования НБ РБ',
		buttonName: 'Рассчитать'
	},
	{
		title: 'Лизинг',
		data: dataLising,
		items: [
			{
				title: 'Минимальный аванс',
				text: 'от 10% до 30% от стоимости автомобиля'
			},
			{
				title: 'Максимальный срок',
				text: '12, 24, 36, 48 или 60 месяцев'
			},
			{
				title: 'Ставка финансирования',
				text: 'от 8% до 15% годовых, в зависимости от срока кредита и кредитной истории заемщик'
			},
			{
				title: 'Валюта',
				text: 'BYN'
			}
		],
		description:
			'Максимальная сумма 250 000 BYN без справки и доходах. Оформление в отделениях банка. Ставка привязана к ставке рефинансирования НБ РБ',
		buttonName: 'Рассчитать'
	}
]
