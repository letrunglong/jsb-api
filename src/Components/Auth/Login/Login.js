import { Form, Input, Button } from 'antd'
import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect, useDispatch } from "react-redux";
import './styles.scss'
import { get } from 'js-cookie';
import { ROOT_API_URL, ROUTE } from 'common/constants';
import { Component } from 'react';
import axios from 'axios';
import { TYPES } from './redux/contants';

class AuthLogin extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLogin:false
        }
    }
    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
        })
    }
    onFinish = () => {
        const {email,password} =this.state
        let token = "123456"
        let obj = {}
        obj.email = email
        obj.password = password
        obj.token = token
        console.log(email,password);
        axios({
            url: `${ROOT_API_URL}/login`,
            method: "POST",
            data: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            }
        }
            ).then( respon =>{
                console.log(respon);
                this.props.GetLogin(respon.data)
                this.setState({
                    isLogin:true
                })
                this.props.history.push(ROUTE.DASHBOARD)
            })
    }
    render() {
        return <div className="container login">
            <div className="form-login">
                <span className="title">SIGN IN</span>
                <Form name="normal_login" onFinish={() => this.onFinish()} className="login-form">
                    <Form.Item
                        label="Username"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input name="email" onChange={(event)=>this.isChange(event)}/>
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input type="password" name="password" onChange={(event)=>this.isChange(event)} />
                    </Form.Item>
                    <Form.Item
                    >
                        <Button
                            htmlType="submit"
                            type="primary">LOG IN</Button>
                    </Form.Item>
                </Form>
                <div className="bottom">
                    <Link to="/dashboard">Forgot</Link>
                    <Link to="/dashboard">SignUp</Link>
                </div>
            </div>
        </div>
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        // isLogin: state.isLogin
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        GetLogin: (dataUser) => {
            dispatch({
                type: TYPES.AUTH_LOGIN,dataUser
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin)