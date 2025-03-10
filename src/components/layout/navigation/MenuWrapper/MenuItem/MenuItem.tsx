'use client'
import { FC } from 'react'
import cn from 'classnames'

import styles from './MenuItem.module.scss'
import { IMenuItem } from '../menu.interface'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuSubItem } from '../MenuSubItem/MenuSubItem'

export const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const pathname = usePathname()
	if (item.items) {
		return (
			<li
				key={item.link}
				className={cn(styles.li, {
					[styles.active]: pathname === item.link
				})}
			>
				<Link href={item.link} className={styles.a}>
					{item.title}
				</Link>
				<MenuSubItem menu={item} />
			</li>
		)
	} else {
		return (
			<li
				key={item.link}
				className={cn(styles.li, {
					[styles.active]: pathname === item.link
				})}
			>
				<Link href={item.link} className={styles.a}>
					{item.title}
				</Link>
			</li>
		)
	}
}
