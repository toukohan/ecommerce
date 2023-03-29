import { useCallback, useState, useEffect } from 'react';

import useAuth from '../hooks/useAuth';

const SignIn = () => {
    const { signIn } = useAuth();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(() => {
        console.log(email, password);
    }, [email, password]);

    const handleSubmit =
        async (event: React.FormEvent) => {
        event.preventDefault();
    
        await signIn(email, password);
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
        />
        <button>Sign In</button>
        </form>
    );
    };

export default SignIn;