import React from 'react';
import styles from './styles.module.css';

interface ButtonProps {
    children: React.ReactNode;
    width?: string
}
const Button = ({ children, width }: ButtonProps) => {
    return (
        <button className={styles.button} style={{width}}>{children}</button>
    );
};

export default Button;
