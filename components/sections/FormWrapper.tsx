import Image from 'next/image'
import { FC } from 'react'

export const FormWrapper: FC<{ children: React.ReactNode; image?: string }> = ({
	children,
	image
}) => {
	return (
		<div className='py-20 xl:py-[190px] bg-gray-200'>
			<div className='container'>
				<div className='grid xl:grid-cols-2 bg-gray-100 rounded-[45px] gap-10 xl:gap-0'>
					<div className='rounded-l-[45px]'>{children}</div>
					<div className='relative min-h-[50vw] xl:min-h-[856px]'>
						<Image
							fill
							src={image ?? '/Zeekr/Zeekr001/5.avif'}
							className='object-cover rounded-b-[45px] xl:rounded-bl-none xl:rounded-r-[45px] absolute'
							alt='image'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
