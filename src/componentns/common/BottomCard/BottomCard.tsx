import React from 'react';
import styles from './styles.module.css';

interface CardProps {
    text: string,
    description: string
}
const BottomCard: React.FC<CardProps> = ({text, description}) => {
    return (
        <div className={styles.wrapper}>
            <div>{text}</div>
            <div>{description}</div>
        </div>
    );
};

export default BottomCard;
