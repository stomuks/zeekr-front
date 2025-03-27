import React from 'react'
import { Menu } from '@/components/layout/Menu'
import { IMenu } from '@/shared/types/menu.interface'

interface Props {
	className?: string
	menu: IMenu
}

export const MenuWrapper: React.FC<Props> = ({ className, menu }) => {
	return <Menu menu={menu} className={className} />
}
