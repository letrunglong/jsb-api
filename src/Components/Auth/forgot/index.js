import { Form, Input, Button } from 'antd'
import React from 'react'
import { Link} from 'react-router-dom'
import { connect} from "react-redux";
import './style.scss'
import { ROOT_API_URL, ROUTE } from 'common/constants';
import { Component } from 'react';
import axios from 'axios';

class Authforgot extends Component {
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
        const {email} =this.state
        let obj = {}
        obj.email = email
        axios({
            url: `${ROOT_API_URL}/forgot-password`,
            method: "POST",
            data: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            }
        }
            ).then( respon =>{
                // if(respon.data.status_code === 200){
                //     this.props.history.push(ROUTE.SIGNIN)
                // }
                console.log(respon.data);
                // this.props.Getforgot("",respon.data.message,"sucess")
            })
    }
    render() {
        return <div className="container forgot">
            <div className="form-forgot">
                <span className="title">REQUEST A NEW PASSWORD</span>
                <Form name="normal_forgot" onFinish={() => this.onFinish()} className="forgot-form">
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
                        <Input name="email" onChange={(event)=>this.isChange(event)}/>
                    </Form.Item>
                    <Form.Item
                    >
                        <Button
                            htmlType="submit"
                            type="primary">LOG IN</Button>
                    </Form.Item>
                </Form>
                <div className="bottom">
                    <Link to={ROUTE.SIGNIN}>Signin</Link>
                    <Link to={ROUTE.SIGNUP}>Signup</Link>
                </div>
            </div>
        </div>
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        // isforgot: state.isforgot
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // Getforgot: (dataUser,alertTitle,alertType) => {
        //     dispatch({
        //         type: TYPES.AUTH_forgot,
        //         dataUser,
        //         alertTitle,
        //         alertType
        //     })
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Authforgot)