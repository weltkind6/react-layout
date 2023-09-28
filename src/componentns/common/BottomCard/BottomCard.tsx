import React, {useState} from 'react';
import styles from './styles.module.css';

interface CardProps {
    text: string,
    description: string,
    zIndex?: string
}
const BottomCard: React.FC<CardProps> = ({text, description, zIndex}) => {
    const [isHovered, setIsHovered] = useState(true);
    let timer: NodeJS.Timeout | null = null;
    console.log('isHovered', isHovered)

    const handleMouseEnter = () => {
        timer = setTimeout(() => {
            setIsHovered(false);
        }, 300);

    };

    const handleMouseLeave = () => {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        setIsHovered(true);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}
                 onMouseLeave={handleMouseEnter}
                 onMouseEnter={handleMouseLeave}>
                <div>{text}</div>
                <div>{description}</div>
            </div>
            <div className={isHovered ? `${styles.cardHover}` : `${styles.remove}`}>
                <p className={styles.text}>
                    Adjust the margin-top value as needed,
                    Adjust the margin-top value as needed,
                    Adjust the margin-top value as needed
                    Adjust the margin-top value as needed
                    Adjust the margin-top value as needed
                </p>
            </div>
        </div>
    );
};

export default BottomCard;
