import { IMenu } from './menu.interface'

export const menu: IMenu = {
	items: [
		{
			title: 'Авто в наличии',
			link: '/cars'
		},
		{
			title: 'Бренды',
			link: '/zeekr',
			items: [
				{
					title: 'Бренд 1',
					link: '/about1'
				},
				{
					title: 'Бренд 2',
					link: '/about2'
				},
				{
					title: 'Бренд 3',
					link: '/about3'
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
