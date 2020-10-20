import React, {Component} from 'react';
import { Image } from 'antd';
import './App.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import dashboardIcon from './images/icons/dashboard.svg';
import home from './images/icons/home.svg';
class Dashboard extends Component {
  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}
class Devices extends Component {
  render() {
    return (
      <div>
        Devices
      </div>
    );
  }
}



function App() {
  return (
    <div className="App">
      <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="devices">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Devices
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
                <Route path="/home" component={props => <Dashboard />} />
                <Route path="/devices" component={props => <Devices />} />
            </main>
        </React.Fragment>
    )}
    />
</Router>
  </div>
  );
}

export default App;
