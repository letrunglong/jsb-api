import { Button, Image, Input } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import usj from 'assets/images/wallets-img/usj.svg';
class Commission extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commission_earned: 0,
            amountToBuy: 0
        }
    }
    componentWillMount() {
        this.setState({
            commission_earned: this.props.dataUser.data.commissions_earned
        })
    }
    showDeposit = () => {
        this.setState({
            visDeposit: true,
        })
    }
    showWithDraw = () => {
        this.setState({
            visWithDraw: true
        });
    }
    showSwap = () => {
        this.setState({
            visSwap: true
        });
    }

    handleCancel = () => {
        this.setState({
            visDeposit: false,
            visWithDraw: false,
            visSwap: false
        });
    };
    renderEarned = () => {
        if (this.state.commission_earned)
            return this.state.commission_earned.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    }
    set25 = () => { this.setState({ amountToBuy: this.state.commission_earned * 0.25 }) }
    set50 = () => { this.setState({ amountToBuy: this.state.commission_earned * 0.5 }) }
    set75 = () => { this.setState({ amountToBuy: this.state.commission_earned * 0.75 }) }
    set100 = () => { this.setState({ amountToBuy: this.state.commission_earned * 1 }) }

    renderAmountWithDraw = () => {
        if (this.state.amountToBuy)
            return this.state.amountToBuy.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    }
    render() {
        return (
            <div className='item'>
                <div className='item-top'>
                    <div className='top-left'>
                        <Image src={usj} />
                        <p>COMMISSION</p>
                    </div>
                    <div className='top-right'>
                        {this.renderEarned()}
                    </div>
                </div>
                <div className='item-bot'>
                    <div style={{ textAlign: "center", width: "100%" }} onClick={this.showWithDraw}>Earn to wallet now!</div>
                    <Modal
                        title="Earn commission to wallet"
                        visible={this.state.visWithDraw}
                        onCancel={this.handleCancel}
                    >
                        <p>Amount available:{ }</p>
                        <Input inputMode='numeric' value={this.renderAmountWithDraw()} />
                        <div className='button-amount'>
                            <Button onClick={this.set25}>25%</Button>
                            <Button onClick={this.set50}>50%</Button>
                            <Button onClick={this.set75}>75%</Button>
                            <Button onClick={this.set100}>100%</Button>
                        </div>
                        <p onClick={this.handleCancel} className='wallet-confirm'>Confirm transaction</p>
                    </Modal>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({dataUser:state.loginReducers.dataUser})
export default connect(mapStateToProps)(Commission)
