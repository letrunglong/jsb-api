import React, { Component } from 'react';
import { Image } from 'antd';
import './App.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {  BrowserRouter as Router,Route } from "react-router-dom";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import dashboardIcon from './images/icons/dashboard.svg';
import networkIcon from './images/icons/network.svg';
import packageIcon from './images/icons/package.svg';
import poolIcon from './images/icons/pool.svg';
import settingIcon from './images/icons/setting.svg';
import walletIcon from './images/icons/wallet.svg';
import home from './images/icons/home.svg';
import avatarUser from './images/icons/avatar.svg';
import background from './images/background.svg';
import Dashboard from './Components/Dashboard';
import Packages from './Components/Packages';
import Wallets from './Components/Wallets';
import Pools from './Components/Pools';
import Networks from './Components/Networks';
import Settings from './Components/Settings';


var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center fixed',
  backgroundRepeat: 'no-repeat'
};

function App() {
  return (
    <div className="App" >
      <div className="top-bar" style={{}}>
        <div className="top-bar-1">Level title</div>
        <div className="top-bar-2">
          <div className="name-bar">Hi Mr Long</div>
          <Image className="image-bar" src={avatarUser}/>
        </div>
      </div>
      <div className="container" style={sectionStyle}>
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
                <SideNav.Nav defaultSelected="dashboard">
                  <NavItem eventKey="dashboard">
                    <NavIcon>
                      <Image src={dashboardIcon}/>
                      <p>dashboard</p>
                    </NavIcon>
                  </NavItem>
                  <NavItem eventKey="packages">
                    <NavIcon>
                    <Image src={packageIcon}/>
                    <p>packages</p>
                    </NavIcon>
                  </NavItem>
                  <NavItem eventKey="wallets">
                    <NavIcon>
                       <Image src={walletIcon}/>
                       <p>wallets</p>
                    </NavIcon>
                  </NavItem>
                  <NavItem eventKey="pools">
                    <NavIcon>
                       <Image src={poolIcon}/>
                       <p>pools</p>
                    </NavIcon>
                  </NavItem>
                  <NavItem eventKey="networks">
                    <NavIcon>
                       <Image src={networkIcon}/>
                       <p>networks</p>
                    </NavIcon>
                  </NavItem>
                  <NavItem eventKey="settings">
                    <NavIcon>
                       <Image src={settingIcon}/>
                       <p>settings</p>
                    </NavIcon>
                  </NavItem>
                </SideNav.Nav>
              </SideNav>
              <main className='main'>
                <Route path="/dashboard" component={props => <Dashboard />} />
                <Route path="/packages" component={props => <Packages />} />
                <Route path="/wallets" component={props => <Wallets />} />
                <Route path="/pools" component={props => <Pools />} />
                <Route path="/networks" component={props => <Networks />} />
                <Route path="/settings" component={props => <Settings />} />
              </main>
            </React.Fragment>
          )}
          />
        </Router>

      </div>

    </div>
  );
}

export default App;
