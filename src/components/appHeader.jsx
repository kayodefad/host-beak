import downArrow from '../assets/images/down-arrow.svg';
import notifIcon from '../assets/images/notif-icon.svg';
import avatar from '../assets/images/avatar.svg';

const AppHeader = ({ showSidebar, setShowSidebar }) => {
	return (
		<div className='relative h-20 bg-[#F9F9F9] flex items-center justify-end md:px-12'>
			<div
				className='absolute left-[20px] md:hidden cursor-pointer'
				onClick={() => setShowSidebar(!showSidebar)}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					strokeWidth={2}
					onClick={() => setShowSidebar(!showSidebar)}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M4 6h16M4 12h16M4 18h16'
					/>
				</svg>
			</div>
			<img className='mr-5 w-8' src={notifIcon} alt='notification icon' />
			<img className='mr-5 w-9' src={avatar} alt='avatar' />
			<span className='mr-5 text-xs text-[#091E46]'>Ogoluwa</span>
			<img className='mr-5 w-3' src={downArrow} alt='down arrow' />
		</div>
	);
};

export default AppHeader;
