import React, { Component } from 'react';
import { Image } from 'antd';
import './App.css';
import Cookies from "js-cookie";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import Dashboard from './Components/Dashboard';
import Packages from './Components/Packages';
import Wallets from './Components/Wallets';
import Pools from './Components/Pools';
import Networks from './Components/Networks';
import Settings from './Components/Settings';
import AuthLogin from './Components/Auth/Login/Login';
import PublicLayout from './common/Layout/PublicLayouts';
import PrivateLayout from './common/Layout/PrivateLayouts';
import DashBoard from './Components/Dashboard';
import { connect } from 'react-redux';


const checkLogin = () => {
  return true
  const authToken = Cookies.get("token");
  return Boolean(authToken);
};
const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
      // isLogin() ? (
      //   <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      // ) : 
      (
        <PublicLayout {...rest}>
          <Component {...props}></Component>
        </PublicLayout>
      )
      }
    />
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkLogin() ? (
          <PrivateLayout {...rest}>
            <Component {...props} />
          </PrivateLayout>
        ) : (
            <Redirect
              to={{
                pathname: `/login`,
                state: { from: props.location },
              }}
            />
          )
      }
    />
  );
};
class App extends Component {
  render() {
    console.log(this.props.isLogin );
    console.log(+ this.props.dataUser);
    return (
      <div className="App" >
        <Router>
          <Route render={({ location, history }) => (
            <React.Fragment>
              <PublicRoute exact path="/login" component={AuthLogin} />
              <PrivateRoute exact path="/dashboard" component={DashBoard}
              />
              <PrivateRoute exact path="/packages" component={Packages} />
              <PrivateRoute exact path="/wallets" component={Wallets} />
              <PrivateRoute exact path="/pools" component={Pools} />
              <PrivateRoute exact path="/networks" component={Networks} />
              <PrivateRoute exact path="/settings" component={Settings} />

            </React.Fragment>
          )}
          />
        </Router>
      </div>
    );
  }

}
const mapStateToProps = (state, ownProps) => {
  return {
    isLogin: state.isLogin,
    dataUser: state.dataUser
  }
}
export default connect(mapStateToProps)(App)
