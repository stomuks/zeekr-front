import { FC } from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { ScrollableHeader } from '@/components/layout/Scrollable-header'
import { Footer } from '@/components/layout/footer'

export const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className='min-h-screen flex flex-col justify-between'>
			<ScrollableHeader>
				<Navigation />
			</ScrollableHeader>
			<main>{children}</main>
			<Footer />
		</div>
	)
}
