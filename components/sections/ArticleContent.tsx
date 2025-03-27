import { FC } from 'react'

export const ArticleContent: FC<{ content: string[] }> = ({ content }) => {
	return (
		<div className='article container'>
			<div className='pt-[53px]'>
				{content.map((item, index) => (
					<div
						dangerouslySetInnerHTML={{ __html: item }}
						key={index}
						className='pt-5 lg:pt-10'
					></div>
				))}
			</div>
		</div>
	)
}
