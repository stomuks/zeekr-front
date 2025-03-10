'use client'

import React, { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'

import { cn } from '@/src/lib/utils'
import { RemoveScroll } from 'react-remove-scroll'

export const ScrollableHeader = ({
	children
}: {
	children: React.ReactNode
}) => {
	const [hidden, setHidden] = useState(false)
	const { scrollY } = useScroll()

	function update() {
		const previousScrollY = scrollY.getPrevious() ?? 0
		if (scrollY.get() < previousScrollY) {
			setHidden(false)
		} else if (scrollY.get() > 200 && scrollY.get() > previousScrollY) {
			setHidden(true)
		}
	}

	useEffect(() => {
		return scrollY.on('change', () => update())
	})

	return (
		<div
			className={cn(
				`fixed top-0 z-50 w-[100vw] ${RemoveScroll.classNames.fullWidth}`
			)}
		>
			<motion.div
				initial={{ y: 0 }}
				animate={{ y: !hidden ? 0 : -131 }}
				transition={{ type: 'spring', stiffness: 200, damping: 30 }}
			>
				{children}
			</motion.div>
		</div>
	)
}
