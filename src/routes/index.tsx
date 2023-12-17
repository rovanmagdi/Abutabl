import { lazy, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { ReactComponent as LearnIcon } from 'assets/images/svg/book.svg';
import { ReactComponent as ProfileIcon } from 'assets/images/svg/profile.svg';
import { ReactComponent as SupportIcon } from 'assets/images/svg/messages.svg';
import LearnDetails from 'views/learnDetails';


const AuthSections = lazy(() => import('views/auth'));
const Learn = lazy(() => import('views/learn'));
const Profile = lazy(() => import('views/profile'));
const Support = lazy(() => import('views/support'));
const Login = lazy(() => import('views/auth/signIn'));
const Verify = lazy(() => import('views/auth/otpVerify'));
const VerifyEmail = lazy(() => import('views/auth/emailVerify'));
const Reset = lazy(() => import('views/auth/resetPassword'));

export interface IRoute<T = any> {
	component: JSX.Element;
	path: string;
	icon?: JSX.Element;
	privileges: true;
	to: (props?: T) => string;
	fullTitle: (props?: T) => { name: string; link?: string }[];
	title: () => string;
	sidebarTitle?: () => string;
	subLinks?: string[];
}

export interface IRoutes {
	authSections: IRoute;
	signIn: IRoute;
	otpVerify: IRoute;
	emailVerify: IRoute;
	restPassword: IRoute;
	learn: IRoute;
	profile: IRoute;
	support: IRoute;
	learnDetails: IRoute
}

export function useRoutesConst() {
	const { formatMessage } = useIntl();

	const ROUTES: IRoutes = useMemo(() => {
		const routes: IRoutes = {
			authSections: {
				component: <AuthSections />,
				path: 'login',
				privileges: true,
				to: () => '/login',
				fullTitle: () => [{ name: formatMessage({ id: 'login' }) }],
				title: () => formatMessage({ id: 'login' }),
				sidebarTitle: () => formatMessage({ id: 'login' }),
			},
			signIn: {
				component: <Login />,
				path: 'login',
				privileges: true,
				to: () => '/login',
				fullTitle: () => [{ name: formatMessage({ id: 'login' }) }],
				title: () => formatMessage({ id: 'login' }),
				sidebarTitle: () => formatMessage({ id: 'login' }),
			},
			otpVerify: {
				component: <Verify />,
				path: 'verify',
				privileges: true,
				to: () => '/login/verify',
				fullTitle: () => [{ name: formatMessage({ id: 'login' }) }],
				title: () => formatMessage({ id: 'login' }),
				sidebarTitle: () => formatMessage({ id: 'login' }),
			},
			emailVerify: {
				component: <VerifyEmail />,
				path: 'verifyEmail',
				privileges: true,
				to: () => '/login/verifyEmail',
				fullTitle: () => [{ name: formatMessage({ id: 'login' }) }],
				title: () => formatMessage({ id: 'login' }),
				sidebarTitle: () => formatMessage({ id: 'login' }),
			},
			restPassword: {
				component: <Reset />,
				path: 'reset-password',
				privileges: true,
				to: () => '/login/reset-password',
				fullTitle: () => [{ name: formatMessage({ id: 'login' }) }],
				title: () => formatMessage({ id: 'login' }),
				sidebarTitle: () => formatMessage({ id: 'login' }),
			},
			learn: {
				component: <Learn />,
				path: 'learn',
				icon: <LearnIcon />,
				privileges: true,
				to: () => '/learn',
				fullTitle: () => [{ name: formatMessage({ id: 'learn' }) }],
				title: () => formatMessage({ id: 'learn' }),
				sidebarTitle: () => formatMessage({ id: 'learn' }),
			},
			learnDetails: {
				component: <LearnDetails />,
				path: 'learn/:id',
				icon: <LearnIcon />,
				privileges: true,
				to: () => 'learn/:id',
				fullTitle: () => [{ name: formatMessage({ id: 'learnDetails' }) }],
				title: () => formatMessage({ id: 'learnDetails' }),
				sidebarTitle: () => formatMessage({ id: 'learnDetails' }),
			},
			profile: {
				component: <Profile />,
				path: 'profile',
				icon: <ProfileIcon />,
				privileges: true,
				to: () => '/profile',
				fullTitle: () => [{ name: formatMessage({ id: 'profile' }) }],
				title: () => formatMessage({ id: 'profile' }),
				sidebarTitle: () => formatMessage({ id: 'profile' }),
			},
			support: {
				component: <Support />,
				path: 'support',
				icon: <SupportIcon />,
				privileges: true,
				to: () => '/support',
				fullTitle: () => [{ name: formatMessage({ id: 'support' }) }],
				title: () => formatMessage({ id: 'support' }),
				sidebarTitle: () => formatMessage({ id: 'support' }),
			},
		};
		return routes;
	}, [formatMessage]);

	return { ROUTES };
}
