import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { mainContext } from '../../../contexts/MainContext';


const Profile = () => {
    const { getUserData, user } = useContext(mainContext)
    const { email } = useParams()
    useEffect(() => {getUserData(email)}, user)
    
    try{
        return (
            <div className="inner">
                <h1 style={{'font-weight':'100'}}>Profile   {user.email}</h1>
                {/* <img src={user.avatar} alt="" /> */}
                {/* <p>City: {user.city}</p>
                <p>Country: {user.country}</p> */}
            </div>
        );
    }catch{
        return (
            <div className="inner">
                <h3>...</h3>
            </div>
        )
    }
};

export default Profile;