import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, NavLink, Switch} from "react-router-dom";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <nav className="header">
            <ul>
              <li><NavLink exact to="/">HOME</NavLink></li>
              <li><NavLink exact to="/timer" >在线倒计时器</NavLink></li>
              <li><NavLink exact to="/calculate">在线计算器</NavLink></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/calculate" component={Home}></Route>
            <Route exact path="/timer" component={Home}></Route>
            <Route exact path="/" component={Home}></Route>
          </Switch>
          
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
