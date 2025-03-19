import { FC } from 'react'
import { Navigation } from './navigation/Navigation'
import { ScrollableHeader } from './Scrollable-header'
import { Footer } from './footer/footer'

export const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div>
			<div className='pt-[130px] bg-gray-200'></div>
			<ScrollableHeader>
				<Navigation />
			</ScrollableHeader>
			{children}
			<Footer />
		</div>
	)
}
