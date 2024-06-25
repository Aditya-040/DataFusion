'use client'
import styles from './signup.module.css';
import {useFormState} from "react-dom";
import {createUser} from "@/actions/account";

export default function Signup() {

    const initialState = {
        message : '',
    };
    const [state, formAction] = useFormState(createUser, initialState);

    return (
        <div className={styles.container}>
            <div className={styles.logoWrapper}>
                <img src="/logo.png" alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.formWrapper}>
                <h1 className={styles.header}>Sign Up</h1>
                <form action={formAction} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.inputLabel}>Name:</label>
                        <input
                            type="text"
                            id="name"
                            className={styles.inputField}
                            name={'name'}
                            required
                        />
                    </div>
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
                    <div className={styles.inputGroup}>
                        <label htmlFor="confirmPassword" className={styles.inputLabel}>Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className={styles.inputField}
                            name={'confirmPassword'}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.button}>Sign Up</button>
                    <p className={''}>{state.message}</p>
                </form>
            </div>
        </div>
    );
}
