import AddBillDetails from '../../components/addBillDetails';
import AddBillTable from '../../components/addBillTable';

const AddBill = () => {
	return (
		<div className='w-full min-h-screen'>
			<div className='bg-white rounded-[20px]'>
				<div className='w-[95%] lg:w-[90%] pt-12 pl-8 pb-24'>
					<div>
						<AddBillDetails />
					</div>
					<div className='mt-10'>
						<AddBillTable />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddBill;
