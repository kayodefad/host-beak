import messageSquareIcon from '../assets/images/message-square-icon.svg';

const ReportItem = ({ badge, name }) => {
	return (
		<div className='text-xs py-3 pl-4 pr-12 border-b-[#e1e1e1] border-b-[1px] min-w-[600px] '>
			<div className='flex items-center justify-between overflow-x-auto'>
				<div className='w-1/4 flex items-center'>
					<input
						className='border border-[#D0D5DD] rounded mr-5 w-3 h-3'
						type='checkbox'
						name='report-item'
						id='report item'
					/>
					<span className='flex items-center text-[#304156]'>
						<span className='mr-2'>{name}</span>{' '}
						{badge && (
							<span className='bg-[#D9FCEA] text-[7px] text-[#39DA8A] rounded-[35px] py-[0.4px] px-2'>
								NEW
							</span>
						)}
					</span>
				</div>
				<span className='w-1/2 text-[#667085] text-left'>
					4th , October 2021 11:20am
				</span>
				<div className='flex'>
					<button className='mr-5 bg-lightBlue rounded text-white text-xs w-24 h-8'>
						View
					</button>
					<img
						className='w-4'
						src={messageSquareIcon}
						alt='message square icon'
					/>
				</div>
			</div>
		</div>
	);
};

export default ReportItem;
