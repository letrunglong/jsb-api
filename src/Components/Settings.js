import React, { Component } from 'react';
import { Button, Input, Tabs } from 'antd'
import Search from 'antd/lib/input/Search';
class LastElement extends Component {
  render() {
    return (
      <div className='parent-flex'>
        <div className='child-1'>
          <p>{this.props.firstText}</p>
          <Input defaultValue={this.props.firstInput} />
        </div>
        <div className='child-2'>
          <p>{this.props.secondText}</p>
          <Button className='btn-save'>Save Now!</Button>
        </div>
      </div>
    );
  }
}

class ItemsPersonalTab extends Component {
  render() {
    return (
      <div className='parent-flex'>
        <div className='child-1'>
          <p>{this.props.firstText}</p>
          <Input defaultValue={this.props.firstInput} />
        </div>
        <div className='child-2'>
          <p>{this.props.secondText}</p>
          <Input defaultValue={this.props.secondInput} />
        </div>
      </div>
    );
  }
}

class TabPersonal extends Component {
  render() {
    return (
      <div className='personal-content tab-content'>
        <ItemsPersonalTab firstText='First Name' secondText='Last Name' firstInput='David' secondInput='David' />
        <ItemsPersonalTab firstText='Birth day' secondText='Gender' firstInput='20/12/2020' secondInput='Male' />
        <ItemsPersonalTab firstText='Address' secondText='Country' firstInput='123 Abcd' secondInput='USA' />
        <LastElement firstText='Phone Number' firstInput='123 4567' />
      </div>
    );
  }
}
class TabAuthen extends Component {
  render() {
    return (
      <div className='authen-content tab-content'>
        <div className='title'>
          <div>Change Password</div>
          <div>Change to another email</div>
        </div>
        <div className='content'>
          {/* 1 */}
          <div className='one-content'>
            <div className='child-1'>
              <p>Current password</p>
              <Input defaultValue='asdasdasd' type='password' />
            </div>
            <div className='child-2'>
              <p>New email</p>
              <Search
                defaultValue="new-email@gmail.com"
                allowClear
                enterButton="Change"
              />
            </div>
          </div>
           {/* 2 */}
          <div className='one-content'>
            <div className='child-1'>
              <p>New password</p>
              <Input defaultValue='asdasdasd' type='password' />
            </div>
            <div className='child-2'>
            </div>
          </div>
          {/* 3 */}
          <div className='one-content'>
            <div className='child-1'>
              <p>Confirm password</p>
              <Input defaultValue='asdasdasd' type='password' />
            </div>
            <div className='child-2'>
              <Button className='btn-save'>Save now!</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const { TabPane } = Tabs;
const Tab = () => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="Personal" key="1">
      <TabPersonal />
    </TabPane>
    <TabPane tab="Authentication" key="2">
      <TabAuthen />
    </TabPane>
    <TabPane tab="Two-factor" key="3">
      Content of Tab Pane 3
      </TabPane>
    <TabPane tab="Security" key="4">
      Content of Tab Pane 4
      </TabPane>
  </Tabs>
);

class Settings extends Component {
  render() {
    return (
      <div className='settings container'>
        <div className='settings-content'>
          <Tab />
        </div>
      </div>
    );
  }
}

export default Settings;