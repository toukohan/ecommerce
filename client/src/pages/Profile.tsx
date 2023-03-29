import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

import axios from '../api/axios';

const Profile = () => {
    
    const user = useContext(UserContext);
    const token = user.user?.token || '';

    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        axios.get('/api/auth/me', {
            headers: {
                "Authorization": `Bearer ${token}`
        }}).then((response) => {
            setLoading(false);
            setUserData(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Profile</h1>
            {loading ? <p>Loading...</p> : <p>{userData.email}</p>}
        </div>
    );
};

export default Profile;
    