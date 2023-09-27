import React, {useState} from 'react';
import styles from './styles.module.css';

interface CardProps {
    text: string,
    description: string
}
const BottomCard: React.FC<CardProps> = ({text, description}) => {
    const [isHovered, setIsHovered] = useState(true);
    console.log(isHovered)

    const mouseEventHandler = () => {
        setTimeout(() => {
            setIsHovered(false)
        }, 500)
    }
    const mouseEventHandler2 = () => {
        setTimeout(() => {
            setIsHovered(true)
        }, 500)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}
                 onMouseLeave={mouseEventHandler}
                 onMouseEnter={mouseEventHandler2}>
                <div>{text}</div>
                <div>{description}</div>
            </div>
            <div className={isHovered ? `${styles.cardHover}`: `${styles.remove}`}>
                Adjust the margin-top value as needed,
                Adjust the margin-top value as needed,
                Adjust the margin-top value as needed
                Adjust the margin-top value as needed
                Adjust the margin-top value as needed
            </div>
        </div>
    );
};

export default BottomCard;
