import Image from 'next/image'
import { FC } from 'react'

export const FormWrapper: FC<{ children: React.ReactNode; image?: string }> = ({
	children,
	image
}) => {
	return (
		<div className='py-[190px] bg-gray-200'>
			<div className='container'>
				<div className='flex bg-gray-100 rounded-[45px]'>
					<div className='w-1/2 rounded-l-[45px]'>{children}</div>
					<div className='relative w-1/2 min-h-[856px]'>
						{image ? (
							<Image
								fill
								src={image}
								alt='image'
								className='object-cover rounded-r-[45px]'
							/>
						) : (
							<Image
								fill
								src='/uploads/default/form.png'
								className='object-cover rounded-r-[45px]'
								alt='image'
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
