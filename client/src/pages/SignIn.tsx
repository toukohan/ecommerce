import { FormEvent, useState } from 'react';
import axios from '../api/axios'

import useAuth from '../hooks/useAuth';

const SignIn = () => {
    const { signIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        signIn(email, password);

    };
       
        return (
        <form>
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
        <button type="submit" onClick={handleSubmit}>Sign In</button>
        </form>
    );
    };

export default SignIn;