'use client'
import styles from './login.module.css';
import {useFormState} from "react-dom";
import {authenticate} from "@/actions/account";

export default function Login() {
    const initialState = {
        message : '',
    };
    const [state, formAction] = useFormState(authenticate, initialState);

    return (
        <div className={styles.container}>
            <div className={styles.logoWrapper}>
                <img src="/logo.png" alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.formWrapper}>
                <h1 className={styles.header}>Login</h1>
                <form action={formAction} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.inputLabel}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            className={styles.inputField}
                            name={'email'}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.inputLabel}>Password:</label>
                        <input
                            type="password"
                            id="password"
                            className={styles.inputField}
                            name={'password'}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.button}>Login</button>
                    <p className={styles.error}>{state.message}</p>

                    <p className={'mt-5'}>
                        Don't have an account? <a
                        className={'text-blue-500'}
                        href="/signup">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
