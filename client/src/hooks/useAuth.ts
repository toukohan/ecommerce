import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import axios from '../api/axios'

const useAuth = () => {
    const { setUser } = useContext(UserContext)

    const signIn = async (email: string, password: string) => {
        try {
            const response = await axios.post('/api/auth/login', {
                email,
                password,
            })
            console.log(response.data);
            const user = response.data.user;
            const token = response.data.token;
            
            setUser({ user, token });
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
            setUser(response.data.user)
        } catch (error) {
            console.error(error);
        }
    }

    const signOut = async () => {
        try {
            const response = await axios.post('/api/auth/logout')
            setUser(null);
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