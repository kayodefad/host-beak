import ReportItem from '../../components/report-item';

const ViewReports = () => {
	return (
		<div className='w-full min-h-screen bg-white rounded-[20px]'>
			<div className='w-[95%] md:w-[90%] pt-12 pl-4 md:pl-8 pb-24'>
				<h1 className='font-bold text-xl mb-5'>View Reports</h1>
				<div className='border-[#C7CFD6] border-[0.5px] rounded overflow-x-auto'>
					{Array(9)
						.fill(undefined)
						.map((item, i) => {
							return (
								<ReportItem
									badge={i === 0}
									name={i % 2 === 0 ? 'February Report' : 'March Report'}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default ViewReports;
