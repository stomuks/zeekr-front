import Image from 'next/image'
import { FC } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { CreditInfoData } from '@/shared/data/creditInfo.data'
import { Title } from '../ui/title'

export const ContentCredit: FC = () => {
	const data = CreditInfoData

	return (
		<div className='relative mb-10 md:mb-[134px]'>
			<div className='container'>
				{data.map((item, index) => (
					<div
						className='flex flex-col gap-20 2xl:gap-0 2xl:flex-row'
						key={index}
					>
						<div className='2xl:w-[60%] 2xl:pr-[60px] pt-[44px]'>
							<Title
								h='h2'
								className='text-4xl text-blue-300 font-black uppercase italic'
							>
								{item.title}
							</Title>
							<div className='flex justify-end'>
								<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-2 gap-4 md:gap-[40px] pt-[33px] w-full'>
									{item.data?.map((item, index) => (
										<div
											key={index}
											className='2xl:w-[400px] basis-1/4 h-[150px] md:h-[200px] xl:h-[250px] 2xl:h-[350px] flex items justify-center object-cover border-[3px] border-gray-500 rounded-[45px]'
										>
											<Image
												src={item.image}
												className='object-contain p-6'
												alt='bank'
												width={250}
												height={177}
											/>
										</div>
									))}
								</div>
							</div>
						</div>
						<div
							className={cn(
								'rounded-xl lg:rounded-none p-6 lg:p-20 2xl:px-0 2xl:w-[40%] 2xl:pl-[40px] 2xl:pt-[180px] bg-blue-300 2xl:pb-[137px] w-full',
								index == data.length - 1 && '2xl:rounded-bl-[254px]'
							)}
						>
							<div className='grid grid-cols-1 xl:grid-cols-2 2xl:max-w-[514px] 2xl:flex 2xl:flex-col gap-4 md:gap-[40px] text-xl md:text-[30px] leading-[36px] font-bold text-gray-800'>
								{item.items?.map((item, index) => (
									<div key={index}>
										<h4>{item.title}</h4>
										<p className='font-medium'>{item.text}</p>
									</div>
								))}
								<div>
									<p className='font-medium text-[20px] leading-[24px]'>
										{item.description}
									</p>
								</div>
								<Button size='lg' className='px-[41px] w-auto md:min-w-[502px]'>
									{item.buttonName}
								</Button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='absolute w-[40%] h-full top-0 right-0 bg-blue-300 rounded-bl-[254px] z-[-1] hidden 2xl:block'></div>
		</div>
	)
}
