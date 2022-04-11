import { useNavigate } from 'react-router-dom';
import showcase from '../../assets/images/showcase.png';

const SignUp = () => {
	const navigate = useNavigate();

	const inputStyle =
		'border-transparent border-b-[3px] w-full border-b-[#EBEBEB] focus:border-transparent focus:border-b-[#EBEBEB] focus:ring-0 mt-1 py-1 px-0 placeholder-[#82869A80]';
	const labelStyle = 'text-[#82869A]';

	return (
		<div className='flex h-screen overflow-auto bg-white'>
			<div className='w-1/2 relative hidden lg:flex justify-center'>
				<img
					className='w-full h-full object-cover'
					src={showcase}
					alt='showcase'
				/>
				<p className='absolute text-white text-3xl w-[70%] bottom-[100px] flex justify-center'>
					Building exceptional
					<br />
					services with Back Office
					<br />
					Support and Business
					<br />
					Perfomance
				</p>
			</div>
			<div className='p-8 flex-1'>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						navigate('/');
					}}
					className='flex flex-col h-full'
				>
					<div>
						<h2 className='text-mezechBlue text-3xl font-bold mb-1'>
							Create Account
						</h2>
						<p className='font-light text-lg text-[#282C4099] tracking-wide md:mb-8'>
							Build an exceptional business
						</p>
					</div>
					<div className='flex flex-1 flex-col h-full md:justify-between'>
						<div className='grid md:grid-cols-2 md:gap-8'>
							<div className='mt-8 md:mt-0'>
								<label className={labelStyle} htmlFor='firstName'>
									First Name
								</label>
								<input
									className={inputStyle}
									type='text'
									name='firstName'
									id='firstName'
									placeholder='Enter your first name'
								/>
							</div>
							<div className='mt-8 md:mt-0'>
								<label className={labelStyle} htmlFor='lastName'>
									Last Name
								</label>
								<input
									className={inputStyle}
									type='text'
									name='lastName'
									id='lastName'
									placeholder='Enter your last name'
								/>
							</div>
						</div>
						<div className='mt-8 md:mt-0'>
							<label className={labelStyle} htmlFor='firstName'>
								Phone Number
							</label>
							<input
								className={inputStyle}
								type='text'
								name='firstName'
								id='firstName'
								placeholder='Enter your phone number'
							/>
						</div>
						<div className='mt-8 md:mt-0'>
							<label className={labelStyle} htmlFor='email'>
								Email Address
							</label>
							<input
								className={inputStyle}
								type='email'
								name='email'
								id='email'
								placeholder='Enter your email'
							/>
						</div>
						<div className='mt-8 md:mt-0'>
							<label className={labelStyle} htmlFor='password'>
								Password
							</label>
							<input
								className={inputStyle}
								type='password'
								name='password'
								id='password'
								placeholder='Enter your password'
							/>
						</div>
						<div className='flex items-center justify-between mt-8 md:mt-0'>
							<div className='flex items-center'>
								<input
									className='border-[1px] border-[#D8D8D8] bg-[#E5E5E5] outline-none focus:ring-0 rounded w-6 h-6 mr-2'
									type='checkbox'
									id='vehicle1'
									name='vehicle1'
									value='Bike'
								/>
								<label className='text-[#82869A99]' for='vehicle1'>
									{' '}
									Remember me
								</label>
							</div>
							<p className='text-lightBlue font-medium cursor-pointer'>
								Forgot Password?
							</p>
						</div>
						<div className='mt-8 md:mt-0'>
							<button className='h-12 md:h-14 bg-lightBlue w-full text-white rounded-md text-xl font-semibold'>
								Sign Up
							</button>
							<p className='text-center mt-4'>
								<span className='text-[#82869A]'>Got an Account?</span>
								<span className='text-lightBlue ml-3 cursor-pointer'>
									Sign In
								</span>
							</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
