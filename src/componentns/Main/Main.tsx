import React from 'react';
import styles from './main.module.css'
import sound from '../../img/sound.svg'
import stereo from '../../img/stereo.svg'

const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.backNav}>
                    <span>some text</span>
                </div>
                <div className={styles.slider}>
                    <img src="https://cdn.britannica.com/95/136995-050-6209F94F/rainforest-Malaysia.jpg" alt="malasia"/>
                </div>
                <div className={styles.soundPanel}>
                   <div>
                       <span>Music is my life</span>
                       <img src={sound} alt="soundImg"/>
                       <img src={stereo} alt="stereoImg"/>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
