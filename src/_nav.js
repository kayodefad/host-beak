import React from 'react';
import { NavLink } from 'react-router-dom';
import welcomeIcon from './assets/images/welcome-icon.svg';
import dashboardIcon from './assets/images/dashboard-icon.svg';
import salesIcon from './assets/images/sales-icon.svg';
import purchaseIcon from './assets/images/purchase-icon.svg';
import accountingIcon from './assets/images/accounting-icon.svg';
import bankingIcon from './assets/images/banking-icon.svg';
import payrollIcon from './assets/images/payroll-icon.svg';
import reportsIcon from './assets/images/reports-icon.svg';
import analyticsIcon from './assets/images/analytics-icon.svg';
import settingsIcon from './assets/images/settings-icon.svg';
import Welcome from './views/pages/welcome';
import Dashboard from './views/pages/dashboard';
import Sales from './views/pages/sales';
import Purchases from './views/pages/purchases';
import Accounting from './views/pages/accounting';
import Banking from './views/pages/banking';
import Payroll from './views/pages/payroll';
import Reports from './views/pages/reports';
import Analytics from './views/pages/analytics';
import Settings from './views/pages/settings';

const _nav = [
	{
		component: Welcome,
		name: 'Welcome',
		path: '/',
		icon: (
			<img className='w-[40%] h-[40%]' src={welcomeIcon} alt='welcome icon' />
		),
	},
	{
		component: Dashboard,
		name: 'Dashboard',
		path: '/dashboard',
		icon: (
			<img
				className='w-[40%] h-[40%]'
				src={dashboardIcon}
				alt='dashboard icon'
			/>
		),
	},
	{
		component: Sales,
		name: 'Sales',
		path: '/sales',
		icon: <img className='w-[40%] h-[40%]' src={salesIcon} alt='sales icon' />,
	},
	{
		component: Purchases,
		name: 'Purchases',
		path: '/purchases',
		icon: (
			<img className='w-[40%] h-[40%]' src={purchaseIcon} alt='purchase icon' />
		),
		items: [
			{
				component: NavLink,
				name: 'Bills',
				path: '/purchases/bills',
			},
			{
				component: NavLink,
				name: 'Vendors',
				path: '/purchases/vendors',
			},
			{
				component: NavLink,
				name: 'Product & Services',
				path: '/purchases/product',
			},
		],
	},
	{
		component: Accounting,
		name: 'Accounting',
		path: '/accounting',
		icon: (
			<img
				className='w-[40%] h-[40%]'
				src={accountingIcon}
				alt='accounting icon'
			/>
		),
		items: [
			{
				component: NavLink,
				name: 'Bills',
				path: '/accounting/bills',
			},
		],
	},
	{
		component: Banking,
		name: 'Banking',
		path: '/banking',
		icon: (
			<img className='w-[40%] h-[40%]' src={bankingIcon} alt='banking icon' />
		),
		items: [
			{
				component: NavLink,
				name: 'Bills',
				path: '/banking/bills',
			},
		],
	},
	{
		component: Payroll,
		name: 'Payroll',
		path: '/payroll',
		icon: (
			<img className='w-[40%] h-[40%]' src={payrollIcon} alt='payroll icon' />
		),
		items: [
			{
				component: NavLink,
				name: 'Bills',
				path: '/payroll/bills',
			},
		],
	},
	{
		component: Reports,
		name: 'Reports',
		path: '/reports',
		icon: (
			<img className='w-[40%] h-[40%]' src={reportsIcon} alt='reports icon' />
		),
	},
	{
		component: Analytics,
		name: 'Analytics',
		path: '/analytics',
		icon: (
			<img
				className='w-[40%] h-[40%]'
				src={analyticsIcon}
				alt='analytics icon'
			/>
		),
		items: [
			{
				component: NavLink,
				name: 'View Report',
				path: '/analytics/view-reports',
			},
			{
				component: NavLink,
				name: 'To-Do',
				path: '/analytics/todo',
			},
			{
				component: NavLink,
				name: 'Upload Docs',
				path: '/analytics/upload-docs',
			},
			{
				component: NavLink,
				name: 'Chat',
				path: '/analytics/chat',
			},
			{
				component: NavLink,
				name: 'Schedule',
				path: '/analytics/schedule',
			},
			{
				component: NavLink,
				name: 'Message Board',
				path: '/analytics/message-board',
			},
			{
				component: NavLink,
				name: 'Make Payments',
				path: '/analytics/make-payments',
			},
			{
				component: NavLink,
				name: 'Billing',
				path: '/analytics/billing',
			},
		],
	},
	{
		component: Settings,
		name: 'Settings',
		path: '/settings',
		icon: (
			<img className='w-[40%] h-[40%]' src={settingsIcon} alt='settings icon' />
		),
	},
];

export default _nav;
