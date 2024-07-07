'use client'
import styles from './orderList.module.css';
import { useState, useEffect } from 'react';

const orders = [
    { name: 'Order 1', date: '2024-07-01', amount: '$100' },
    { name: 'Order 2', date: '2024-07-02', amount: '$150' },
    { name: 'Order 3', date: '2024-07-03', amount: '$200' },
    { name: 'Order 4', date: '2024-07-04', amount: '$250' },
    { name: 'Order 5', date: '2024-07-05', amount: '$300' },
    { name: 'Order 6', date: '2024-07-06', amount: '$350' },
];

export default function OrderList() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Check for system theme preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`${styles.container} ${styles[theme]}`}>
            <button onClick={toggleTheme} className={styles.themeToggle}>
                Toggle Theme
            </button>
            <h1 className={styles.header}>Order List</h1>
            <ul className={styles.orderList}>
                {orders.map((order, index) => (
                    <li key={index} className={styles.orderItem}>
                        <div className={styles.orderName}>{order.name}</div>
                        <div className={styles.orderDate}>Date: {order.date}</div>
                        <div className={styles.orderAmount}>Amount: {order.amount}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
