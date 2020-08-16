import React from 'react';
import { NavLink } from 'react-router-dom';
import './timer.less'
import Sider from 'antd/lib/layout/Sider';

class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            seconds: 0,
            showSecond: 'Start'
        };
    }
    tick = () => {
        const { seconds } = this.state;
        this.setState({
            seconds: seconds - 1,
            showSecond: seconds + ' Seconds'
        })
        if (seconds === 0) {
            this.setState({
                showSecond: 'End'
            })
            clearInterval(this.timer)
        }
    }

    handleInputTime = (event) => {
        this.setState({
            seconds: parseInt(event.target.value)
        })
    }

    startCountDown = () => {
        if (this.state.showSecond === 'End') {
            this.state.showSecond = 'Start';
            this.state.seconds = 0;
        }
        if (this.state.seconds != 0) {
            this.timer = setInterval(() => {
                this.tick();
            }, 1000);
        }
    }

    render() {
        return (
            <div className="timer">
                <div><h1>在线倒计时器</h1></div>
                <div className="time-body">
                    <div className="time-left">
                        <span style = {{fontSize: 20}}>设置时间:   </span>
                        <input type='text'
                            onChange={this.handleInputTime}></input>
                        
                        <div className="time-start">
                            <button
                                onClick={this.startCountDown} disabled = {this.state.showSecond.search("Seconds") != -1}>Start</button>
                        </div>
                    </div>
                    <div className="time-display">
                        <p className="show-second">{this.state.showSecond}</p>
                    </div>
                </div>
                <div className="back-home">
                    <NavLink to='/'>返回主页</NavLink>
                </div>
            </div>

        )
    }
}
export default Timer;