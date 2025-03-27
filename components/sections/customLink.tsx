'use client'

import { useState } from 'react'
import Link from 'next/link'
import NProgress from 'nprogress'

export default function CustomLink({
	href,
	className,
	children
}: {
	href: string
	children: React.ReactNode
	className?: string
}) {
	const [loading, setLoading] = useState(false)

	const handleClick = () => {
		setLoading(true)
		NProgress.start() // Запускаем прогресс-бар при клике
	}

	return (
		<Link href={href} onClick={handleClick} className={className}>
			{children}
		</Link>
	)
}
