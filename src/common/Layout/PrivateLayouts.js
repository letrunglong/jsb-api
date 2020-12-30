import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import * as Cookies from "js-cookie";
import DashBoard from "../../Components/Dashboard";
import Packages from "../../Components/Packages";
import Wallets from "../../Components/Wallets";
import Pools from "../../Components/Pools";
import Networks from "../../Components/Networks";
import Settings from "../../Components/Settings";
import { Image, Layout } from "antd";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import dashboardIcon from '../../images/icons/dashboard.svg';
import networkIcon from '../../images/icons/network.svg';
import packageIcon from '../../images/icons/package.svg';
import poolIcon from '../../images/icons/pool.svg';
import settingIcon from '../../images/icons/setting.svg';
import walletIcon from '../../images/icons/wallet.svg';
import avatarUser from '../../images/icons/avatar.svg';
import background from '../../images/background.svg';


var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center fixed',
  backgroundRepeat: 'no-repeat'
};

const PrivateLayout = ({ location , history }) => {
    const [openKeys, setOpenKeys] = useState([]);
    const [showDrawer, setShowDrawer] = useState(false);
  
    const [modeMobile, setModeMobile] = useState(false);
    const [visible, setVisible] = useState(false);
    const [currentTabSidebar, setCurrentTabSidebar] = useState(
      window.location.pathname
    );
  
    useEffect(() => {
      onGetDefaultOpenKey();
    }, []);
  
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      handleResize();
    }, []);
  
    const handleResize = () => {
      const windowSize = window.innerWidth;
      if (windowSize < 1000) {
        setModeMobile(true);
      } else {
        setModeMobile(false);
      }
    };
  
    const handleLogout = () => {
      Cookies.remove("token");
      localStorage.removeItem("userInfo");
      window.location.href = window.location.origin + "/login";
    };
  
    const onGetDefaultOpenKey = () => {
      const { pathname } = window.location;
      let keys = [];
      switch (pathname) {
        // case ROUTE.ORDER:
        //   keys = ["_myTransaction"];
        //   break;
        // case ROUTE.WALLET_TRANSACTION:
        //   keys = ["_myTransaction"];
        //   break;
        // case ROUTE.COMMISSIONS:
        //   keys = ["_myTransaction"];
        //   break;
        default:
          break;
      }
      setOpenKeys(keys);
    };
  
    const toggleSideBar = () => {
      setVisible(!visible);
      setShowDrawer(!showDrawer);
      if (!visible) {
        setOpenKeys([]);
        return;
      }
      onGetDefaultOpenKey();
    };
    return (
      <>
       <div className="top-bar" style={{}}>
              <div className="top-bar-1">Level title</div>
              <div className="top-bar-2">
                <div className="name-bar">Hi Mr Long</div>
                <Image className="image-bar" src={avatarUser} />
        </div>
        <div className="container" style={sectionStyle}>         
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