import { createContext, useState, ReactNode } from 'react';

interface UserContextData {
    user: User | null;
    setUser: (user: (User | null)) => void;
}

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}