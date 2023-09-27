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
                <div className={styles.desktopContainer}>
                    <Slider />
                    <div className={styles.soundPanel}>

                        <div className={styles.soundsContainer}>
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

                            <div className={styles.textBlock}>
                                    A new music service with official albums, singles, videos, remixes. It's all here.
                            </div>
                        </div>

                        <div>
                            <div className={styles.buttonsBlock}>
                                <Button children="Listen now" width="150px"/>
                                <Button children="Play me" width="150px"/>
                            </div>
                        </div>
                        <div>
                            <h2 className={styles.musicTitle}>Popular music</h2>
                            <div className={styles.hits}>
                                {musicData.map(({id, author, trackName}) => (
                                    <div key={id} className={styles.trackBlock}>
                                        <SoundSvg />
                                        <span>{author} - {trackName}</span>
                                    </div>
                                ))}

                            </div>
                        </div>


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

                <div className={styles.cardWrapper}>
                    <div className={`${styles.cardContainer} ${styles.first}`}>
                        <BottomCard text="Some music" description="Listen now"/>
                        <BottomCard text="Some text" description="text tex"/>
                        <BottomCard text="Music card" description="Right now"/>
                        <BottomCard text="Some music" description="Right now"/>
                    </div>
                    <div className={`${styles.cardContainer} ${styles.second}`}>
                        <BottomCard text="Some some" description="Play me"/>
                        <BottomCard text="Some music" description="Right now"/>
                        <BottomCard text="Some music" description="Right now"/>
                        <BottomCard text="Music box music" description="Right now"/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Main;
