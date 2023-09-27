import React from 'react';
import styles from './main.module.css'
import SoundSvg from "../common/SoundSvg";
import BeatSvg from "../common/BeatSvg";
import {musicData} from "../../music";
import Slider from "../common/Slider/Slider";
import Button from "../common/Button/Button";
import BottomCard from "../common/BottomCard/BottomCard";

const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.backNav}>
                    <a href="#">some text</a>
                </div>
                <Slider />
                <div className={styles.soundPanel}>

                    <div>
                        <h2 className={styles.title}>Music is my life</h2>
                        <div className={styles.soundImgBlock}>
                            <SoundSvg marginRight="5px"/>
                            <BeatSvg />
                            <BeatSvg />
                            <BeatSvg />
                        </div>
                        <div className={styles.soundIconsBlock}>
                            <SoundSvg marginRight="5px"/>
                            <SoundSvg />
                        </div>
                    </div>

                    <div className={styles.buttonsBlock}>
                        <Button children="Listen now" width="150px"/>
                        <Button children="Play me" width="150px"/>
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
                    <div className={styles.textContainer}>
                        <span className={styles.text}>Popular music</span>
                        <SoundSvg />
                    </div>
                </div>
                <BottomCard text="Listen to some music" description="Right now"/>
            </div>
        </div>
    );
};

export default Main;
