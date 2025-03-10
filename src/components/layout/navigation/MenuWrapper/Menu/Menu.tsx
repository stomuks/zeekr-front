import { FC } from 'react'
import { IMenu } from '../menu.interface'
import { MenuItem } from '../MenuItem/MenuItem'

export const Menu: FC<{ menu: IMenu }> = ({ menu: { items } }) => {
	return (
		<div className='py-4 px-8 rounded-xl border border-gray-500'>
			<ul className='flex align-center justify-between gap-6'>
				{items?.map((item, index) => <MenuItem key={index} item={item} />)}
			</ul>
		</div>
	)
}
