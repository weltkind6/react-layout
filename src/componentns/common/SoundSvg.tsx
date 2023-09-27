import React from 'react';
import { ReactComponent as SoundSvgIcon } from '../../img/sound.svg';

interface SoundSvgProps {
    marginRight?: string
}
const SoundSvg: React.FC<SoundSvgProps> = ({marginRight}) => {

    return (
        <div>
            <SoundSvgIcon style={
                {
                    width: '20px',
                    height: '20px',
                    fill: '#dce9ef',
                    cursor: 'pointer',
                    marginRight}
            } />
        </div>
    );
};

export default SoundSvg;
