import React from 'react'

interface Props {
	description?: string
}

export const NewCarDesc: React.FC<Props> = ({ description }) => {
	return (
		<section className='flex flex-col gap-10'>
			<div className='grid grid-cols-2'>
				<div className='col-span-2 2xl:col-span-1 bg-[#C1D9EE] rounded-tr-[32px]'>
					<h2 className='text-4xl lg:text-[64px] text-gray-700 font-extrabold max-w-[886px] mt-0 2xl:ml-auto px-4 py-8'>
						Общая информация
					</h2>
				</div>
			</div>
			<div className='container'>
				<div
					className='text-xl sm:text-2xl lg:text-4xl text-gray-800 flex flex-col gap-6 lg:gap-10 description pt-10'
					dangerouslySetInnerHTML={{ __html: description || '' }}
				/>
			</div>
		</section>
	)
}
