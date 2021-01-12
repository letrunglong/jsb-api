import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import DashBoard from "../../Components/Dashboard";
import Packages from "../../Components/Packages";
import Wallets from "../../Components/Wallets";
import Pools from "../../Components/Pools";
import Networks from "../../Components/Networks";
import Settings from "../../Components/Settings";
import { Image, Layout } from "antd";
import SideNav, { NavItem, NavIcon } from '@trendmicro/react-sidenav';
import dashboardIcon from '../../images/icons/dashboard.svg';
import networkIcon from '../../images/icons/network.svg';
import packageIcon from '../../images/icons/package.svg';
import poolIcon from '../../images/icons/pool.svg';
import settingIcon from '../../images/icons/setting.svg';
import walletIcon from '../../images/icons/wallet.svg';
import background from '../../images/background.svg';


var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center fixed',
  backgroundRepeat: 'no-repeat'
};

const PrivateLayout = () => {
  let history = useHistory();
  return (
    <>
      <div className="top-bar">
        <div className="container" style={sectionStyle}>
          <SideNav
            onSelect={(selected) => {
              const to = '/' + selected;
              if (window.location.pathname !== to) {
                history.push(to)
              }
            }}
          >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="dashboard">
              <NavItem eventKey="dashboard">
                <NavIcon>
                  <Image src={dashboardIcon} />
                  <p>dashboard</p>
                </NavIcon>
              </NavItem>
              <NavItem eventKey="packages">
                <NavIcon>
                  <Image src={packageIcon} />
                  <p>packages</p>
                </NavIcon>
              </NavItem>
              <NavItem eventKey="wallets">
                <NavIcon>
                  <Image src={walletIcon} />
                  <p>wallets</p>
                </NavIcon>
              </NavItem>
              <NavItem eventKey="pools">
                <NavIcon>
                  <Image src={poolIcon} />
                  <p>pools</p>
                </NavIcon>
              </NavItem>
              <NavItem eventKey="networks">
                <NavIcon>
                  <Image src={networkIcon} />
                  <p>networks</p>
                </NavIcon>
              </NavItem>
              <NavItem eventKey="settings">
                <NavIcon>
                  <Image src={settingIcon} />
                  <p>settings</p>
                </NavIcon>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
          <main className='main'>

            <Layout className="private-layout-container">
              <Layout>
                <div className="content-layout">
                  <Switch>
                    <Route exact path="/dashboard" component={DashBoard} />
                    <Route exact path="/packages" component={Packages} />
                    <Route exact path="/wallets" component={Wallets} />
                    <Route path="/pools" component={Pools} />
                    <Route path="/networks" component={Networks} />
                    <Route path="/settings" component={Settings} />
                  </Switch>
                </div>
              </Layout>
            </Layout>
          </main>
        </div>
      </div>
    </>
  );
};

export default PrivateLayout;