import { FC } from 'react'
import { MenuItem } from '../MenuItem/MenuItem'
import { IMenuItem } from '../menu.interface'

export const MenuSubItem: FC<{ menu: IMenuItem }> = ({ menu: { items } }) => {
	return (
		<ul className='hidden'>
			{items?.map(item => <MenuItem key={item.title} item={item} />)}
		</ul>
	)
}
