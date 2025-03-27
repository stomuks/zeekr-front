import Image from 'next/image'
import { FC } from 'react'

import logoImage from '@/public/logo.png'
import CustomLink from '@/components/sections/customLink'

export const Logo: FC = () => {
	return (
		<CustomLink href={'/'}>
			<Image src={logoImage} alt={'logo'} width={262} height={69} />
		</CustomLink>
	)
}
