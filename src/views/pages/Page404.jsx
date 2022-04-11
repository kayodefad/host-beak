import { Link } from 'react-router-dom';

const Page404 = () => {
	return (
		<div className='text-white text-xl text-center mt-5 bg-audeoBlue h-[200px] w-[300px] mx-auto flex flex-col items-center justify-center'>
			<span>Page404</span>
			<Link className='text-sm mt-3 flex' to='/'>
				<svg
					className='mr-2 w-5'
					xmlns='http://www.w3.org/2000/svg'
					class='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					stroke-width='2'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						d='M7 16l-4-4m0 0l4-4m-4 4h18'
					/>
				</svg>
				<span>Back to Home</span>
			</Link>
		</div>
	);
};

export default Page404;
