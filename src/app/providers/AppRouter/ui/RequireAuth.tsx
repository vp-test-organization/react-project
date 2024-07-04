import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'app/providers/AppRouter';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
	const auth = false; // authorization logic
	const location = useLocation();

	if (!auth) {
		return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
	}

	return children;
};

export default RequireAuth;
