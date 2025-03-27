import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { FC } from 'react'
import { MyForm } from '@/components/sections/Form'
import Image from 'next/image'

export const Modal: FC<{
	children: React.ReactNode
	image?: string
}> = ({ image, children }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogPortal>
				<DialogOverlay className='fixed inset-0 bg-gray-800 opacity-45 data-[state=open]:animate-overlayShow' />
				<DialogContent className='min-w-[1440px] bg-gray-100 rounded-[45px]'>
					<DialogHeader>
						<DialogTitle className='hidden'>Форма обратной связи</DialogTitle>
						<DialogDescription className='hidden'>
							Anyone who has this link will be able to view this.
						</DialogDescription>
					</DialogHeader>
					<div className='flex bg-gray-100 rounded-[45px]'>
						<div className='w-1/2 rounded-l-[45px]'>
							<MyForm />
						</div>
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
									src='/Zeekr/Zeekr001/5.avif'
									className='object-cover rounded-r-[45px]'
									alt='image'
								/>
							)}
						</div>
					</div>
				</DialogContent>
			</DialogPortal>
		</Dialog>
	)
}
