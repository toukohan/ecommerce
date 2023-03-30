import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

const useUserData = () => {
    const { userData, setUserData } = useContext(UserContext)

    if(userData === null) {
        return null
    }
    return { userData, setUserData }
}

export default useUserData;