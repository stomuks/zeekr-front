import { FC } from 'react'
import { MenuItem } from '@/components/layout/navigation/MenuItem'
import { IMenu } from '@/shared/types/menu.interface'
import { cn } from '@/lib/utils'

export const Menu: FC<{ menu: IMenu; className?: string }> = ({
	menu: { items },
	className
}) => {
	return (
		<div className={cn(className, 'px-8 rounded-xl border border-gray-500')}>
			<ul className='flex align-center justify-between gap-6'>
				{items?.map((item, index) => <MenuItem key={index} item={item} />)}
			</ul>
		</div>
	)
}
