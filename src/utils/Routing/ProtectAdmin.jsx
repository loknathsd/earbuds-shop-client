import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loader from '../../components/Shared/Loader/Loader';
import { useStateContext } from '../../context/StateContext';

const ProtectAdmin = () => {
    const { user, loading } = useStateContext();
    const location = useLocation()
    if (loading) {
        return <Loader />
    }
    return (
        user?.role === 'admin' ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default ProtectAdmin;