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
				<DialogContent className='p-2 md:p-10 rounded-xl min-w-[80vw] max-w-[95vw] 2xl:min-w-[1440px] 2xl:max-w-[1440px] bg-gray-100 lg:rounded-[45px] overflow-y-auto max-h-[95vh]'>
					<DialogHeader>
						<DialogTitle className='hidden'>Форма обратной связи</DialogTitle>
						<DialogDescription className='hidden'>
							Anyone who has this link will be able to view this.
						</DialogDescription>
					</DialogHeader>
					<div className='grid gap-4 2xl:gap-0 2xl:grid-cols-2 grid-cols-1 bg-gray-100 rounded-[45px]'>
						<div className='rounded-xl md:rounded-l-[45px]'>
							<MyForm />
						</div>
						<div className='relative 2xl:h-full h-[50vw]'>
							<Image
								fill
								src={image ?? '/Zeekr/Zeekr001/5.avif'}
								alt='image'
								className='object-cover rounded-xl 2xl:rounded-l-none 2xl:rounded-r-[45px]'
							/>
						</div>
					</div>
				</DialogContent>
			</DialogPortal>
		</Dialog>
	)
}
