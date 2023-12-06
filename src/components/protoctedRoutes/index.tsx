import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import models from 'app-constants/model.enum';

const ProtectedRoute: FC<{ children: JSX.Element }> = ({ children }) => {


	if (!localStorage.getItem('api_token')) {
		return <Navigate to={`/`} replace />;
	}


	return children;
};

export default ProtectedRoute;
