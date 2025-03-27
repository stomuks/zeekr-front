'use client'
import { FC } from 'react'
import cn from 'classnames'

import styles from '@/components/layout/navigation/MenuItem.module.scss'
import { IMenuItem } from '@/shared/types/menu.interface'
import { usePathname } from 'next/navigation'
import CustomLink from '@/components/sections/customLink'
import { ChevronDown } from 'lucide-react'

export const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const pathname = usePathname()
	if (item.items) {
		return (
			<li
				key={item.link}
				className={cn(
					styles.li,
					{
						[styles.active]: pathname === item.link
					},
					'relative py-4 group cursor-pointer flex items-center'
				)}
			>
				{item.title}
				<ChevronDown className='mt-1 group-hover:rotate-180 transition-all duration-300 ease-in-out' />
				<ul className='absolute top-full left-0 rounded-xl border border-gray-500 w-full bg-gray-100 p-4 min-w-max mt-2 invisible opacity-0 transform group-hover:visible group-hover:opacity-100 transition-all duration-300 z-10 flex flex-col gap-2'>
					{item.items?.map(item => (
						<li
							key={item.link}
							className={cn(styles.li, {
								[styles.active]: pathname === item.link
							})}
						>
							<CustomLink href={item.link} className={styles.a}>
								{item.title}
							</CustomLink>
						</li>
					))}
				</ul>
			</li>
		)
	} else {
		return (
			<li
				key={item.link}
				className={cn(
					styles.li,
					{
						[styles.active]: pathname === item.link
					},
					'py-4'
				)}
			>
				<CustomLink href={item.link} className={styles.a}>
					{item.title}
				</CustomLink>
			</li>
		)
	}
}
