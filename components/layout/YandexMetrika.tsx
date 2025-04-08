'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
declare const ym: any

export default function YandexMetrika() {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		const url = `${pathname}?${searchParams}`
		ym(100870448, 'hit', url)
	}, [pathname, searchParams])

	return null
}
