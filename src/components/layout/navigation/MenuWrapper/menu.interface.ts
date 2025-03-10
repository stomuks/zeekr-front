export interface IMenu {
	items: IMenuItem[]
}

export interface IMenuItem {
	title: string
	link: string
	items?: IMenuItem[]
}
