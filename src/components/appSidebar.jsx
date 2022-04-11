import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import logoIcon from '../assets/images/logo.svg';
import logoArrow from '../assets/images/logo-arrow.svg';
import logoutIcon from '../assets/images/logout.svg';
import acceptPaymentsIcon from '../assets/images/accept-payments-icon.svg';
import rightArrow from '../assets/images/right-arrow.svg';

import _nav from '../_nav';
import Backdrop from './backdrop';
import '../css/style.css';

const AppSidebar = ({ showSidebar, setShowSidebar }) => {
	const [showSubItems, setShowSubItems] = useState({});
	const [width, setWidth] = useState(window.innerWidth);

	const breakpoint = 768;

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);

		if (width < breakpoint) {
			setShowSidebar(false);
		} else {
			setShowSidebar(true);
		}

		// Return a function from the effect that removes the event listener
		return () => window.removeEventListener('resize', handleWindowResize);
	}, [width, setShowSidebar]);

	useEffect(() => {
		setShowSubItems(
			_nav.reduce((a, b) => {
				a[b.name] = false;
				return a;
			}, {})
		);
	}, []);

	const handleShowSubItem = (id) => {
		setShowSubItems({ ...showSubItems, [id]: !showSubItems[id] });
	};

	const sidebar = (
		<div className='w-[250px] h-screen fixed bg-[#F9F9F9] flex flex-col'>
			<div className='flex items-center rounded-[30px] bg-white w-[90%] ml-2 mt-7 mb-7 px-3 py-2 justify-between'>
				<img className='w-8 h-8' src={logoIcon} alt='logo icon' />
				<span className='text-[#3A3A3A]'>HostBeak</span>
				<img className='w-[5px]' src={logoArrow} alt='logo arrow' />
			</div>
			<nav className='w-[70%] h-full mx-auto flex-[0.75] flex flex-col justify-between overflow-y-auto mb-8'>
				{_nav.map((navItem, i) => {
					return (
						<div key={i} className='relative'>
							<div className='relative'>
								<NavLink
									className={({ isActive }) =>
										'nav-link' + (isActive ? ' activated' : '')
									}
									to={navItem.path}
								>
									<div className='flex items-center'>
										<div className='nav-icon w-9 h-9 mr-5 rounded-full flex items-center justify-center'>
											{navItem.icon}
										</div>
										<span className='text-xs'>{navItem.name}</span>
									</div>
								</NavLink>
								{navItem.items && navItem.items.length > 0 && (
									<div
										onClick={() => handleShowSubItem(navItem.name)}
										className='absolute right-0 top-1/2 translate-y-[-50%] w-8 h-full flex items-center justify-center cursor-pointer'
									>
										<img
											className={`w-[8px] h-[8px] arrow ${
												showSubItems[navItem.name] ? 'active' : ''
											}`}
											src={rightArrow}
											alt='arrow'
										/>
									</div>
								)}
							</div>
							{navItem.items && navItem.items.length > 0 ? (
								<ul
									className={`sub-link ${
										showSubItems[navItem.name] ? 'show' : ''
									}`}
								>
									{navItem.items.map((item, i) => {
										return (
											<li className='my-1' key={i}>
												<NavLink
													className={({ isActive }) =>
														'nav-link nav-sub-link' +
														(isActive ? ' activated' : '')
													}
													to={item.path}
												>
													<span className='text-xs ml-14'>{item.name}</span>
												</NavLink>
											</li>
										);
									})}
								</ul>
							) : null}
						</div>
					);
				})}
			</nav>
			<div className='absolute bottom-[110px] left-1/2 translate-x-[-50%] w-[70%] flex items-center cursor-pointer'>
				<div className='w-9 h-9 flex items-center justify-center mr-5'>
					<img className='w-[40%] h-[40%]' src={logoutIcon} alt='logout Icon' />
				</div>
				<span className='text-[#C4C4C4] text-xs'>Logout</span>
			</div>
			<div className='absolute bottom-[30px] left-1/2 translate-x-[-50%] w-[70%] bg-audeoBlue flex items-center py-2 px-2 rounded-[8px]'>
				<img
					className='w-7 mr-3'
					src={acceptPaymentsIcon}
					alt='accept payments icon'
				/>
				<span className='text-white text-xs cursor-pointer'>
					Accept Payments
				</span>
			</div>
		</div>
	);

	return (
		<AnimatePresence>
			{showSidebar &&
				(width < breakpoint ? (
					<Backdrop
						show={showSidebar}
						handleClose={() => setShowSidebar(false)}
					>
						<motion.div
							initial={{ x: '-100vw', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ type: 'tween', duration: 0.3 }}
							exit={{
								x: '-100vw',
								opacity: 0,
								transition: { ease: 'easeInOut', duration: 0.3 },
							}}
						>
							{sidebar}
						</motion.div>
					</Backdrop>
				) : (
					sidebar
				))}
		</AnimatePresence>
	);
};

export default AppSidebar;
