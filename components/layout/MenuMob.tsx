'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { IMenu } from '@/shared/types/menu.interface'
import CustomLink from '@/components/sections/customLink'
import { ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface Props {
	className?: string
	menu: IMenu
}

export const MenuMob: React.FC<Props> = ({ className, menu }) => {
	const pathname = usePathname()
	const [opened, setOpened] = useState(false)
	const [activeIndices, setActiveIndices] = useState<number[]>([])

	const handleToggle = (index: number) => {
		setActiveIndices(prev =>
			prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
		)
	}

	return (
		<div className={cn(className, 'menu-mob', { opened: opened })}>
			<button className={cn('menu-button')} onClick={() => setOpened(!opened)}>
				<span></span>
			</button>
			<ul className='menu-sub-1 flex flex-col gap-6'>
				{menu.items?.map((item, index) => (
					<li
						key={index}
						className={cn('menu-item', {
							'text-[#a15858]': pathname === item.link
						})}
					>
						{!item.items && (
							<CustomLink className='w-full block' href={item.link}>
								{item.title}
							</CustomLink>
						)}
						{item.items && (
							<>
								<span
									className={cn('flex gap-2 w-full cursor-pointer', {
										active: activeIndices.includes(index)
									})}
									onClick={() => handleToggle(index)}
								>
									{item.title}
									<ChevronDown />
								</span>
								{activeIndices.includes(index) && (
									<ul className='menu-sub-2'>
										{item.items?.map((subItem, subIndex) => (
											<li
												key={subIndex}
												className={cn('menu-item', {
													'text-[#a15858]': pathname === subItem.link
												})}
											>
												<CustomLink
													className='w-full block'
													href={subItem.link}
												>
													{subItem.title}
												</CustomLink>
											</li>
										))}
									</ul>
								)}
							</>
						)}
					</li>
				))}
			</ul>
		</div>
	)
}
