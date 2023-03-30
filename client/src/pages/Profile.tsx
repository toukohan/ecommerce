import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

import axios from '../api/axios';

const Profile = () => {
    
    const { userData } = useContext(UserContext);
    console.log(userData);
    const token = userData?.token;

    const [loading, setLoading] = useState(true);
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: '',
        password_confirmation: '',
    });

    const getUserDetails = async () => {
        console.log("getUserDetails token:", token);
        try {

            const response = await axios.get('/api/auth/me', {
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                withCredentials: true
            });
            setUserDetails(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
          
    };

    useEffect(() => {
        getUserDetails();
    }, []);

    return (
        <div>
            <h1>Profile</h1>
            {loading ? <p>Loading...</p> : <p>{userDetails.email}</p>}
        </div>
    );
};

export default Profile;
    