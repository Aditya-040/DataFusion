'use client'
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './login.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        // Implement your login logic here. This example assumes a successful login.
        console.log('Logging in with:', email, password);
        // Redirect to the dashboard page after a successful login
        // router.push('/dashboard');
    };

    return (
        <div className={styles.container}>
            <div className={styles.logoWrapper}>
                <img src="/logo.png" alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.formWrapper}>
                <h1 className={styles.header}>Login</h1>
                <form onSubmit={handleLogin} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.inputLabel}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            className={styles.inputField}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.inputLabel}>Password:</label>
                        <input
                            type="password"
                            id="password"
                            className={styles.inputField}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.button}>Login</button>
                </form>
            </div>
        </div>
    );
}
