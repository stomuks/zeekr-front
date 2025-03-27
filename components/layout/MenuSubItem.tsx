import { FC } from 'react'
import { MenuItem } from './navigation/MenuItem'
import { IMenuItem } from '../../shared/types/menu.interface'

export const MenuSubItem: FC<{ menu: IMenuItem }> = ({ menu: { items } }) => {
	return (
		<ul>{items?.map(item => <MenuItem key={item.title} item={item} />)}</ul>
	)
}
