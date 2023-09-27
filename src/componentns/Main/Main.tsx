import React from 'react';
import styles from './main.module.css'
import SoundSvg from "../common/SoundSvg";
import BeatSvg from "../common/BeatSvg";
import {musicData} from "../../music";
import Slider from "../common/Slider/Slider";

const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.backNav}>
                    <a href="#">some text</a>
                </div>
                <Slider />
                <div className={styles.soundPanel}>
                       <span>Music is my life</span>
                       <div className={styles.soundImgBlock}>
                           <SoundSvg />
                           <BeatSvg />
                       </div>
                    <div className={styles.soundIconsBlock}>
                        <SoundSvg />
                        <SoundSvg />
                    </div>

                    <div className={styles.buttonsBlock}>
                        <button>Listen now</button>
                        <button>Play me</button>
                    </div>

                    <div className={styles.textBlock}>
                        <p>
                            A new music service with official albums, singles, videos, remixes,
                            live performances and more for Android, iOS and desktop. It's all here.
                        </p>
                    </div>

                    <div className={styles.hits}>
                        <h2>Popular music</h2>
                        {musicData.map(({id, author, trackName}) => (
                            <div key={id} className={styles.trackBlock}>
                                <SoundSvg />
                                <span>{author} - {trackName}</span>
                            </div>
                        ))}

                    </div>


                </div>

                <div className={styles.wordContainer}>
                    <span className={styles.text}>Music</span>
                    <span className={styles.divider} />
                    <span className={styles.text}>Popular music</span>
                </div>

                <div className={styles.musicElement}>
                    <div>Top of Music</div>
                    <div>Listen</div>
                </div>
            </div>
        </div>
    );
};

export default Main;
