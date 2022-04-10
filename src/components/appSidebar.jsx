import logoIcon from '../assets/images/logo.svg';
import logoArrow from '../assets/images/logo-arrow.svg';
import logoutIcon from '../assets/images/logout.svg';
import acceptPaymentsIcon from '../assets/images/accept-payments-icon.svg';
import _nav from '../_nav';
import { NavLink } from 'react-router-dom';
import rightArrow from '../assets/images/right-arrow.svg';
import '../css/style.css';

const AppSidebar = () => {
	return (
		<div className='w-[230px] h-screen fixed bg-[#F9F9F9] flex flex-col'>
			<div className='flex items-center rounded-[30px] bg-white w-[90%] ml-2 mt-7 mb-7 px-3 py-2 justify-between'>
				<img className='w-8 h-8' src={logoIcon} alt='logo icon' />
				<span className='text-[#3A3A3A]'>HostBeak</span>
				<img className='w-[5px]' src={logoArrow} alt='logo arrow' />
			</div>
			<div className='w-[70%] mx-auto flex-[0.8] flex flex-col'>
				{_nav.map((navItem, i) => {
					return (
						<NavLink
							key={i}
							className={({ isActive }) =>
								'nav-link' + (isActive ? ' activated' : '')
							}
							to={navItem.path}
						>
							<div className='flex items-center'>
								<div className='w-5 h-5 mr-5'>{navItem.icon}</div>
								<span className='text-[#C4C4C4] text-xs'>{navItem.name}</span>
							</div>
							{navItem.items && navItem.items.length > 0 && (
								<img
									className='w-[8px] h-[8px]'
									src={rightArrow}
									alt='right arrow'
								/>
							)}
						</NavLink>
					);
				})}
			</div>
			<div className=' absolute bottom-[110px] left-1/2 translate-x-[-50%] w-[70%] flex items-center'>
				<div className='w-5 h-5 mr-5'>
					<img src={logoutIcon} alt='logout Icon' />
				</div>
				<span className='text-[#C4C4C4] text-xs'>Logout</span>
			</div>
			<div className='absolute bottom-[30px] left-1/2 translate-x-[-50%] w-[70%] bg-audeoBlue flex items-center py-2 px-2 rounded-[8px]'>
				<img
					className='w-7 mr-3'
					src={acceptPaymentsIcon}
					alt='accept payments icon'
				/>
				<span className='text-white text-xs'>Accept Payments</span>
			</div>
		</div>
	);
};

export default AppSidebar;
