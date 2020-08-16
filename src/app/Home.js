import React from 'react';
import './home.less';
import hero from '../images/hero-image.png';
import calPic from '../images/calculator.png';
import timerPic from '../images/timer.png';
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (<div className="home">
    <div><img className="heroPic" src={hero}></img></div>
    <div className="body">
      <div className = 'textCenter'>
        <NavLink to='/calculate'><img className="calPic" src={calPic}></img></NavLink>
        <NavLink to='/calculate'>在线计算器</NavLink>
      </div>
      <div className = 'textCenter'>
        <NavLink to='/timer'><img className="timerPic" src={timerPic}></img></NavLink>
        <NavLink to='/timer'>在线倒计时器</NavLink>
      </div>
    </div>
  </div>);
};

export default Home;