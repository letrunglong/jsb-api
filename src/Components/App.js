import React, { Component } from 'react';
import { Image } from 'antd';
import '../App.css';
import { BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Packages from './packages/Packages';
import Wallets from './wallets/Wallets';
import Pools from './pools/Pools';
import Networks from './Networks';
import Settings from './settings/Settings';
import AuthLogin from './Auth/Login/Login';
import Authforgot from './Auth/forgot/index';
import PublicLayout from '../common/Layout/PublicLayouts';
import PrivateLayout from '../common/Layout/PrivateLayouts';
import DashBoard from './dashboard/Dashboard';
import { connect } from 'react-redux';
import SignUpPage from 'Components/Auth/Register/Signup';
import AlertMessages from "../common/alert/index"
import { ROUTE } from 'common/constants';
import avatar from "../images/icons/avatar.svg"


const checkLogin = () => {
  if (localStorage.getItem("isLogin")) {
    return true
  }
  return false
}
const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
      //   checkLogin() ? (
      //   <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      // ) : 
        <PublicLayout {...rest}>
          <Component {...props}></Component>
        </PublicLayout>
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
  logOut = () => {
    localStorage.removeItem("isLogin")
    return <Redirect to="/login" />
  }
  Loginn = () => {
    if (localStorage.getItem("isLogin")) {
    return <div className="nav-item">
      <span className="name" onClick={() => this.logOut()}>
        {this.props.dataUser.data.sponsor.first_name} {this.props.dataUser.data.sponsor.last_name}
      </span>
      <Image src={avatar} />
    </div>
    }
  }
  render() {
    return (
      <div className="App">
        {
          // this.Loginn()
        }
        <AlertMessages />
        <Router>
          <Route render={({ location, history }) => (
            <React.Fragment>
              <PublicRoute exact path={ROUTE.SIGNIN} component={AuthLogin} />
              <PublicRoute exact path={ROUTE.SIGNUP} component={SignUpPage} />
              <PublicRoute exact path={ROUTE.FORGOT} component={Authforgot} />
              <PrivateRoute exact path="/dashboard" component={DashBoard} />
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
    dataUser: state.loginReducers.dataUser
  }
}
export default connect(mapStateToProps)(App)
