import ProtectedRoute from 'components/protoctedRoutes';
import Layout from 'layout';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import { useRoutesConst } from 'routes';
import NoMatch from 'views/NoMatch';
import Error from 'views/error';
import Home from 'views/home';

const Routes = () => {
	const { ROUTES } = useRoutesConst();

	const AuthData = !!localStorage.token;
	const routes = useRoutes([
		{
			path: '/',
			element: <Layout />,
			errorElement: <Error />,
			children: [
				{
					path: '/',
					element: (
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					),
					children: [
						{
							path: '/learn',
							element: ROUTES.learn.component,
						},
						{
							path: 'learn/:id',
							element: ROUTES.learnDetails.component,
						},
						{
							path: 'learn/:id/quiz/:idQuiz',
							element: ROUTES.learnQuizDetails.component,
						},
						{
							path: 'learn/quiz/:idQuiz',
							element: ROUTES.learnQuiz.component,
						},
						{
							path: ROUTES.profile.path,
							element: <Outlet />,
							children: [
								{
									index: true,
									element: ROUTES.profile.component,
								},
							],
						},
						{
							path: ROUTES.support.path,
							element: <Outlet />,
							children: [{ index: true, element: ROUTES.support.component }],
						},


					],
				},
				{
					path: '/',
					element: ROUTES.authSections.component,
					children: [
						{ index: true, element: ROUTES.signIn.component },
						{
							path: ROUTES.otpVerify.path,
							element: ROUTES.otpVerify.component,
						},
						{
							path: ROUTES.emailVerify.path,
							element: ROUTES.emailVerify.component,
						},
						{
							path: ROUTES.restPassword.path,
							element: ROUTES.restPassword.component,
						},

					],
				},


				{
					path: 'learn/:id/details/:idUnit',
					element: ROUTES.learnDetailsUnit.component,

				},
				{
					path: 'learn/:id/detailsGame/:idGame',
					element: ROUTES.learnDetailsGame.component,

				},


			],
		},
		// {
		// 	path: '*',
		// 	element: <NoMatch />,
		// },

	]);
	return routes;
};

export default Routes;
