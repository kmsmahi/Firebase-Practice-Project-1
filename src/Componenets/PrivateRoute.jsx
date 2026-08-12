import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext);
    // console.log(user);
    if(loading){
        return <span className="loading loading-bars loading-xs"></span>;
    }
    if(user && user?.email){
        return (
        <div>
            {children}
        </div>
    );

    }
    return <Navigate to='/auth/login'></Navigate>
    
};

export default PrivateRoute;