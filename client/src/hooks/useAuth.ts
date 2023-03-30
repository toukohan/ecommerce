import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'

const useAuth = () => {
    const { setUserData } = useContext(UserContext)
    const navigate = useNavigate()

    const signIn = async (email: string, password: string) => {
        try {
            const response = await axios.post('/api/auth/login', {
                email,
                password,
            })
            console.log(response.data);
            const user = response.data.user;
            const token = response.data.token;
            setUserData({ user, token });
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }

    const signUp = async (email: string, password: string) => {
        try {
            const response = await axios.post('/api/auth/register', {
                email,
                password,
            })
            setUserData(response.data.user)
        } catch (error) {
            console.error(error);
        }
    }

    const signOut = async () => {
        try {
            // const response = await axios.post('/api/auth/logout')
            setUserData(null);
        } catch (error) {
            console.error(error);
        }
    }

    return {
        signIn,
        signUp,
        signOut,
    }
}

export default useAuth;