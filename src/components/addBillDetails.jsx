import { useRef } from 'react';
import uploadIcon from '../assets/images/upload-icon.svg';

const AddBillDetails = () => {
	const fileRef = useRef();
	const outerDiv = 'flex flex-col w-[70%] mb-5 md:mb-0';
	const labelStyle = 'text-[#304156] text-xs mb-2';
	const inputStyle =
		'border-[0.5px] border-[#C7CFD6] rounded text-[#727E8C] text-xs h-9';

	return (
		<>
			<h1 className='font-bold text-xl mb-5'>Add Bill</h1>
			<div className='lg:w-[90%] md:grid md:grid-cols-2 lg:grid-cols-3 gap-y-7'>
				<div className={outerDiv}>
					<label className={labelStyle} htmlFor='vendor'>
						Vendor
					</label>
					<select className={inputStyle} name='cars' id='cars'>
						<option value='volvo'>Volvo</option>
						<option value='saab'>Saab</option>
						<option value='mercedes'>Mercedes</option>
						<option value='audi'>Audi</option>
					</select>
				</div>
				<div className={outerDiv}>
					<label className={labelStyle} htmlFor='vendor'>
						Date
					</label>
					<input className={inputStyle} type='date' name='date' id='date' />
				</div>
				<div className={outerDiv + ' lg:w-[85%]'}>
					<label className={labelStyle} htmlFor='vendor'>
						Bill#
					</label>
					<input className={inputStyle} type='text' name='bill' id='bill' />
				</div>
				<div className={outerDiv}>
					<label className={labelStyle} htmlFor='vendor'>
						Currency
					</label>
					<select className={inputStyle} name='cars' id='cars'>
						<option value='volvo'>Volvo</option>
						<option value='saab'>Saab</option>
						<option value='mercedes'>Mercedes</option>
						<option value='audi'>Audi</option>
					</select>
				</div>
				<div className={outerDiv}>
					<label className={labelStyle} htmlFor='vendor'>
						Due Date
					</label>
					<input className={inputStyle} type='date' name='date' id='date' />
				</div>
				<div
					className={
						outerDiv + ' lg:w-[85%] lg:row-start-2 lg:row-end-4 lg:col-start-3'
					}
				>
					<label className={labelStyle} htmlFor='notes'>
						Notes
					</label>
					<textarea
						className={inputStyle + ' h-[100px] md:h-full'}
						name='notes'
						id='notes'
					></textarea>
				</div>
				<div className={outerDiv}>
					<label className={labelStyle} htmlFor='file'>
						Upload Copy of Bill
					</label>
					<div className='h-full relative'>
						<input
							className={inputStyle + ' h-full w-full opacity-0'}
							type='file'
							name='file'
							id='file'
							ref={fileRef}
						/>
						<div
							onClick={() => fileRef.current.click()}
							className={
								inputStyle +
								' absolute h-full w-full top-0 flex items-center justify-between px-3 cursor-pointer'
							}
						>
							<span>Upload File</span>
							<img className='w-4' src={uploadIcon} alt='upload icon' />
						</div>
					</div>
				</div>
				<div className={outerDiv}>
					<label className={labelStyle} htmlFor='po'>
						P.O. / S.O
					</label>
					<input className={inputStyle} type='text' name='po' id='po' />
				</div>
			</div>
		</>
	);
};

export default AddBillDetails;
