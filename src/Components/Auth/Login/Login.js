import { Form, Input, Button } from 'antd'
import React from 'react'
import { Link} from 'react-router-dom'
import { connect} from "react-redux";
import './styles.scss'
import { ROOT_API_URL, ROUTE } from 'common/constants';
import { Component } from 'react';
import axios from 'axios';
import { TYPES } from '../../redux/constants/contants';
import store from "../../redux/store"


class AuthLogin extends Component {
    constructor(props) {
        super(props);
        this.state={

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
        axios({
            url: `${ROOT_API_URL}/login`,
            method: "POST",
            data: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            }
        }
            ).then( respon =>{
                if(respon.data.status_code === 200){
                    // this.props.GetLogin(respon.data,respon.data.message)
                    store.dispatch({type:TYPES.AUTH_LOGIN,
                        dataUser:respon.data,
                        alertTitle:respon.data.message})
            
                    this.props.history.push(ROUTE.DASHBOARD)
                }
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
                                message: "Please input your email!",
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
                    <Link to={ROUTE.FORGOT}>Forgot</Link>
                    <Link to={ROUTE.SIGNUP}>SignUp</Link>
                </div>
            </div>
        </div>
    }
}

export default connect()(AuthLogin)