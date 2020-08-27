import React, { Component } from 'react';
import TimerButton from '../../TimerButton/TimerButton';
import './Timer.css'
import { any } from 'prop-types';
class Timer extends Component {
    myInterval!: NodeJS.Timeout;
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            minutes: 25,
            seconds: 0,
            isOn: false
        };
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    startTimer() {
        console.log('Starting timer.');
        if (this.state === true) {
            return;
        }
        this.myInterval = setInterval(() => {
            const { seconds, minutes }: any = this.state;

            if (seconds > 0) {
                this.setState(({ seconds }: any) => ({
                    seconds: seconds - 1,
                }));
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval);
                } else {
                    this.setState(({ minutes }: any) => ({
                        minutes: minutes - 1,
                        seconds: 59,
                    }));
                }
            }
        }, 1000);
        this.setState({ isOn: true });
    }

    stopTimer() {
        console.log('Stopping timer.');
        clearInterval(this.myInterval);
        this.setState({ isOn: false });
    }

    resetTimer() {
        console.log('Resetting timer.');
        this.stopTimer();
        this.setState({
            minutes: 25,
            seconds: 0,
        });
    }

    render = () => {
        const { minutes, seconds }: any = this.state;

        return <div className="timer-container" >
            <div className="time-display">
                <h1>
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </h1>
            </div>
            <div className="timer-button-container"  >
                <TimerButton buttonAction={this.startTimer} buttonValue={'Start'} />
                <TimerButton buttonAction={this.stopTimer} buttonValue={'Stop'} />
                <TimerButton buttonAction={this.resetTimer} buttonValue={'Reset'} />
            </div>

        </div>;
    };
}

export default Timer;