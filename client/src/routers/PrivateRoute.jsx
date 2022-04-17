import React, {useContext} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import MainLayout from '../layouts/MainLayout';

export default function PrivateRoute () {
    const { isAuthenticated } = useContext(UserContext);

    if(isAuthenticated) {
        return <MainLayout>
            <Outlet />
        </MainLayout>
    }

    return <Navigate to="/login" />

}