import { IAddress } from '../types/address.types'

export const addressData: IAddress = {
	title: 'автосалон',
	phone: '+ 375 (33) 371-11-11',
	workingTime: ['Пн-Пт 08:00 - 20:00', 'Сб-Вс 10:00 - 18:00'],
	mail: 'info@zeekr.by',
	address: 'г. Минск пр-т Независимости, 84А',
	name: 'ЗИКР ЦЕНТР МИНСК',
	officialName: 'OOO “Зикер Авто”',
	unp: '193680867',
	bank: 'Расчетный счет BY20PJCB30120798231000000933 ОАО «Приорбанк»',
	bankaddress: 'Республика Беларусь, г. Минск, ул. Победителей, д. 141, пом. 3',
	image: '/default/carcontact.jpg',
	button: 'Записаться'
}

export const serviceData: IAddress = {
	title: 'автосервис',
	phone: '+375 (29) 666-63-53',
	workingTime: ['Пн-Пт 10:00 - 19:00', 'Сб 10:00 - 16:00', 'Вс выходной'],
	mail: 'service@zeekr.by',
	address: 'г. Минск ул. Тимирязева 72/1',
	image: '/default/carcontact.jpg',
	button: 'Записаться'
}
