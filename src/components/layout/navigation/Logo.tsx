import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/public/logo.png'

export const Logo: FC = () => {
	return (
		<Link href={'/'}>
			<Image src={logoImage} alt={'logo'} width={262} height={69} />
		</Link>
	)
}
