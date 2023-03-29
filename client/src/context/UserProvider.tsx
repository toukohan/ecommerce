import { createContext, useState, ReactNode } from 'react';

interface UserContextData {
    user: User | null;
    setUser: (user: (User | null)) => void;
}

interface User {
    user: {
        id: number;
        email: string;
    },
    token: string;
}

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const value = { user, setUser }

    return (
        <UserContext.Provider value={ value }>
            {children}
        </UserContext.Provider>
    );
}