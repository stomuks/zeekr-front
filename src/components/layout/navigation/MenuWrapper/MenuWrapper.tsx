import { FC } from 'react'
import { Menu } from './Menu/Menu'
import { menu } from './menu.data'

export const MenuWrapper: FC = () => {
	return (
		<div>
			<Menu menu={menu} />
		</div>
	)
}
