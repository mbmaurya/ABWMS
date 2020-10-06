import React from 'react';
import Countdown from 'react-countdown';

function TimeLeft() {

        const Completionist = () => <Countdown date ={Date.now() + 300000} renderer={renderer} />;
        const renderer = ({minutes, seconds, completed }) => {

                if(completed) {
                        return <Completionist />
                }
                else {
                        return <span>Valid for <span>{minutes}m:{seconds}s</span></span>
                }

        }

        return (
                <Countdown date ={Date.now() + 300000} renderer={renderer} />
        )
}

export default TimeLeft
