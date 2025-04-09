import Image from 'next/image'
import { FC } from 'react'
import { Modal } from '@/components/sections/Modal'
import { Button } from '@/components/ui/Button'
import { Title } from '../ui/title'
import { IAddress } from '@/shared/types/address.types'

export const Address: FC<IAddress> = data => {
	return (
		<section className='address grid grid-cols-1 xl:grid-cols-2 min-h-[750px] bg-blue-400 pt-14'>
			<div className='flex justify-end bg-gray-100 mb-14 pb-9'>
				<div className='px-4 flex flex-col gap-10 xl:gap-[19px] pr-8 w-full'>
					<Title h='h2' className='text-blue-400 pt-20 xl:text-[5vw]'>
						{data.title}
					</Title>
					<div className='text-gray-800 text-2xl leading-10 font-medium grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-3 xl:gap-8 xl:text-4xl'>
						<a
							className='text-2xl xl:text-[40px] leading-[49px] font-bold'
							href={`tel: ${data.phone}`}
						>
							{data.phone}
						</a>
						<div>
							{data.workingTime.map((item: string, index: number) => (
								<p key={index}>{item}</p>
							))}
						</div>
						<div>
							<p>{data.address}</p>
							<a href={`mailto:${data.mail}`}>{data.mail}</a>
							{data.name && <p className='font-bold'>{data.name}</p>}
							{data.officialName && <p>{data.officialName}</p>}
						</div>
						{data.unp && (
							<p className='text-2xl break-words'>
								УНП: {data.unp}
								{data.bankaddress && ' ' + data.bankaddress}{' '}
								{data.bank && ' ' + data.bank}
							</p>
						)}
						{data.button && (
							<div>
								<Modal>
									<Button
										size='lg'
										className='px-[41px] md:min-w-[502px] w-auto'
									>
										{data.button}
									</Button>
								</Modal>
							</div>
						)}
					</div>
				</div>
			</div>
			{data.image && (
				<div className='address__image relative shrink h-[50vw] xl:h-auto'>
					<div className='absolute bottom-14 -left-1 w-full h-1/2 bg-gray-100'></div>
					<Image
						className='w-full object-cover xl:rounded-bl-[254px]'
						src={data.image}
						alt='car'
						fill
					/>
				</div>
			)}
		</section>
	)
}
