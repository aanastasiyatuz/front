import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { mainContext } from '../../../contexts/MainContext';

const Login = () => {
    const { getUserData, user } = useContext(mainContext)
    const { email } = useParams()
    useEffect(() => {getUserData(email)}, user)

    return (
        <div className="inner">
            <h1>{user.email}</h1>
        </div>
    );
};

export default Login;