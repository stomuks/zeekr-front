import { IMenu } from '@/shared/types/menu.interface'

export const menu: IMenu = {
	items: [
		{
			title: 'Авто в наличии',
			link: '/cars'
		},
		{
			title: 'Бренды',
			link: '',
			items: [
				{
					title: 'Zeekr',
					link: '/zeekr'
				},
				{
					title: 'BYD',
					link: '/byd'
				},
				{
					title: 'Polestar',
					link: '/polestar'
				}
			]
		},
		{
			title: 'Кредит',
			link: '/credit'
		},
		{
			title: 'Сервис',
			link: '/service'
		},
		{
			title: 'О компании',
			link: '/about'
		},
		{
			title: 'Новости',
			link: '/news'
		},
		{
			title: 'Контакты',
			link: '/contacts'
		}
	]
}
