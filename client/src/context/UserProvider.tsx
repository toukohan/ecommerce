import { createContext, useState, ReactNode } from 'react';

export interface User {
    id: number;
    email: string;
}

export interface UserData {
    user: User;
    token: string;
}

interface UserContextData {
    userData: UserData | null;
    setUserData: (user: (UserData | null)) => void;
}


interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
    const [userData, setUserData] = useState<UserData | null>(null);
    const value = { userData, setUserData }

    return (
        <UserContext.Provider value={ value }>
            {children}
        </UserContext.Provider>
    );
}