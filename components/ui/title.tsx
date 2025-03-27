import React from 'react'
import { cn } from '@/lib/utils'

interface Props {
	className?: string
	h: string
	children: React.ReactNode
}

export const Title: React.FC<Props> = ({ className, children, h }) => {
	if (h === 'h1') {
		return (
			<h1
				className={cn(
					'text-4xl z-10 font-black text-gray-100 uppercase italic text-center lg:text-7xl xl:text-[100px] xl:leading-[110px]',
					className
				)}
			>
				{children}
			</h1>
		)
	} else if (h === 'h2') {
		return (
			<h2
				className={cn(
					'text-3xl sm:text-5xl text-gray-700 font-black uppercase italic lg:text-7xl xl:text-[100px] xl:leading-[100px]',
					className
				)}
			>
				{children}
			</h2>
		)
	}
}
