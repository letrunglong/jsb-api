import { Form, Input, Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import * as actions from "Components/Auth/redux/actions";
import './styles.scss'
import { get } from 'js-cookie';
import { ROUTE } from 'common/constants';
const AuthLogin = ({history,location }) => {
    const dispatch = useDispatch()
    const onFinish = (values) => {
        dispatch(
            actions.postLogin(values,(data) =>  {
                // if (get(location, "state.from")) {
                //     const pathName = get(location, "state.from.pathname");
                //     const search = get(location, "state.from.search");
                //     history.push(`${pathName}${search}`);
                //     return;
                // } else {
                //     history.push(ROUTE.DASHBOARD);
                // }
                console.log("aa");
                history.push(ROUTE.DASHBOARD)
            })
        )
    }

    return <div className="container login">
        <div className="form-login">
            <span className="title">SIGN IN</span>
            <Form name="normal_login" onFinish={onFinish} className="login-form">
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
                     <Input/>
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
                    <Input type="password" />
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
export { AuthLogin }