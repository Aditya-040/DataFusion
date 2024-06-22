'use client'
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './signup.module.css';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();
        // Implement your signup logic here. This example assumes a successful signup.
        console.log('Signing up with:', name, email, password, confirmPassword);
        // Redirect to the dashboard page after a successful signup
        // router.push('/dashboard');
    };

    return (
        <div className={styles.container}>
            <div className={styles.logoWrapper}>
                <img src="/logo.png" alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.formWrapper}>
                <h1 className={styles.header}>Sign Up</h1>
                <form onSubmit={handleSignup} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.inputLabel}>Name:</label>
                        <input
                            type="text"
                            id="name"
                            className={styles.inputField}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                    <div className={styles.inputGroup}>
                        <label htmlFor="confirmPassword" className={styles.inputLabel}>Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className={styles.inputField}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.button}>Sign Up</button>
                </form>
            </div>
        </div>
    );
}
