import React from 'react';
import styles from './styles.module.css';

interface ButtonProps {
    children: React.ReactNode;
}
const Button = ({ children }: ButtonProps) => {
    return (
        <button className={styles.button}>{children}</button>
    );
};

export default Button;
