import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loader from '../../components/Shared/Loader/Loader';
import { useStateContext } from '../../context/StateContext';

const PrivateRoute = () => {
  const { user, loading } = useStateContext();
  const location = useLocation();
  if (loading) {
    return <Loader />
  }
  return user && user.role === 'user' ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />

}

export default PrivateRoute;