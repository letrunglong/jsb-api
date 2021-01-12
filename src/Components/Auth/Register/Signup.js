import { Button, Input, Form } from 'antd';
import axios from 'axios';
import { ROOT_API_URL, ROUTE } from 'common/constants';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { TYPES } from '../Login/redux/contants';
import './style.scss'

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }
    onFinish = () => {
        const { first_name, last_name, username, phonenumber, email, password, sponsorkey } = this.state
        let obj = {}
        obj.first_name = first_name
        obj.last_name = last_name
        obj.username = username
        obj.phone_number = phonenumber
        obj.email = email
        obj.password = password
        obj.sponsorKey = sponsorkey
        axios({
            url: `${ROOT_API_URL}/signup`,
            method: "POST",
            data: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(respon => {
            if (respon.data.status_code === 200) {
                this.props.history.push(ROUTE.SIGNIN)
            }
            else{
                console.log("validation fail");
            }
        })
    }
    render() {
        return <div className="container signup">
            <div className="form-signup">
                <span className="title">SIGN UP</span>
                <Form name="normal_signup" onFinish={() => this.onFinish()} className="signup-form">
                    <div className="form-name">
                        <Form.Item
                            label="First Name"
                            name="first_name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your first name",
                                },
                            ]}
                        >
                            <Input name="first_name" onChange={(event) => this.isChange(event)} />
                        </Form.Item>
                        <Form.Item
                            label="Last Name"
                            name="last_name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your last name",
                                },
                            ]}
                        >
                            <Input name="last_name" onChange={(event) => this.isChange(event)} />
                        </Form.Item>
                    </div>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your email!",
                            },
                        ]}
                    >
                        <Input name="email" onChange={(event) => this.isChange(event)} />
                    </Form.Item>
                    <Form.Item
                        label="User Name"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your suername!",
                            },
                        ]}
                    >
                        <Input name="username" onChange={(event) => this.isChange(event)} />
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        name="phonenumber"
                        rules={[
                            {
                                required: true,
                                message: "Please input your phone number!",
                            },
                        ]}
                    >
                        <Input name="phonenumber" type="number" onChange={(event) => this.isChange(event)} />
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
                        <Input type="password" name="password" onChange={(event) => this.isChange(event)} />
                    </Form.Item>
                    <Form.Item
                        label="Sponsor Key"
                        name="sponsorkey"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Sponsor Key!",
                            },
                        ]}
                    >
                        <Input name="sponsorkey" onChange={(event) => this.isChange(event)} />
                    </Form.Item>
                    <Form.Item>
                        <Button className="btn-signup"
                            htmlType="submit"
                            type="primary">SIGN UP</Button>
                    </Form.Item>
                </Form>
                <div className="bottom">
                    <Link to={ROUTE.SIGNIN}>Login</Link>
                    <Link to={ROUTE.FORGOT}>Forgot</Link>
                </div>
            </div>
        </div>
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        // prop: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch({
                type: "asdasd"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)
