import editIcon from '../assets/images/edit-icon.svg';
import deleteIcon from '../assets/images/delete-icon.svg';

const AddBillTable = () => {
	const inputStyle = 'border border-[#C7CFD6] rounded text-xs';

	return (
		<div>
			<div className='overflow-x-auto border-[0.5px] border-[#C7CFD6] rounded px-5 pt-2 pb-20'>
				<table className='relative text-left border-collapse min-w-[800px] w-full'>
					<thead className='border-b-[#98A2B3] border-b-[1px]'>
						<tr className='h-10'>
							<th className='text-sm h-8'>Item</th>
							<th className='text-sm h-8'>Expense Category</th>
							<th className='text-sm h-8'>Description</th>
							<th className='text-sm h-8'>Qty</th>
							<th className='text-sm h-8'>Price</th>
							<th className='text-sm h-8'>Tax</th>
							<th className='text-sm h-8'>Amount</th>
						</tr>
					</thead>
					<tbody>
						<tr className='h-16'>
							<td>
								<select className={inputStyle} name='cars' id='cars'>
									<option value='volvo'>Volvo</option>
									<option value='saab'>Saab</option>
									<option value='mercedes'>Mercedes</option>
									<option value='audi'>Audi</option>
								</select>
							</td>
							<td>
								<select className={inputStyle} name='cars' id='cars'>
									<option value='volvo'>Volvo</option>
									<option value='saab'>Saab</option>
									<option value='mercedes'>Mercedes</option>
									<option value='audi'>Audi</option>
								</select>
							</td>
							<td>
								<input
									className={inputStyle}
									type='text'
									name='desc'
									id='desc'
								/>
							</td>
							<td>
								<input
									className={inputStyle + ' w-12'}
									type='number'
									name='qty'
									id='qty'
								/>
							</td>
							<td>
								<input
									className={inputStyle + ' w-20'}
									type='text'
									name='price'
									id='price'
								/>
							</td>
							<td>
								<div className='flex'>
									<input
										className={inputStyle + ' w-20'}
										type='text'
										name='tax'
										id='tax'
									/>
									<img className='w-4 ml-2' src={editIcon} alt='edit icon' />
								</div>
							</td>
							<td>
								<div className='flex items-center justify-between'>
									<span className='text-xs'>N0.00</span>
									<img className='w-4' src={deleteIcon} alt='delete icon' />
								</div>
							</td>
						</tr>
					</tbody>
					<div className='absolute right-9 text-right text-xs flex flex-col justify-end text-[#1D2939'>
						<div className='mb-4'>
							<span className='mr-5'>Subtotal:</span>
							<span>N0.00</span>
						</div>
						<div>
							<span className='mr-5'>Total (NGN):</span>
							<span>N0.00</span>
						</div>
					</div>
				</table>
			</div>
			<div className='mt-5 text-right'>
				<button className='h-9 text-[#667085] text-xs px-4 rounded border border-[#667085] mr-5'>
					Cancel
				</button>
				<button className='h-9 bg-lightBlue text-white text-xs px-4 rounded'>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddBillTable;
