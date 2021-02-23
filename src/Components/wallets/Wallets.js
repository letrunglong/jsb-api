import React, { Component } from 'react';
import { Image, Modal, Input, Button } from 'antd';
import usdt from 'assets/images/wallets-img/usdt.svg';
import scan from 'assets/images/wallets-img/scan.svg';
import { connect } from 'react-redux';
import axios from 'axios';
import { ROOT_API_URL } from 'common/constants';
import Commission from "./commision/index"
class WalletItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visDeposit: false,
            visWithDraw: false,
            visSwap: false,
            amount: 0,
            earnedData: [],
            amountModalWithDraw: 0,
        }
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
            visSwap: false,
            amount: 0
        });
    };
    set25 = () => { this.setState({ amount: this.state.earnedData.find(val => val !== undefined) * 0.25 }) }
    set50 = () => { this.setState({ amount: this.state.earnedData.find(val => val !== undefined) * 0.5 }) }
    set75 = () => { this.setState({ amount: this.state.earnedData.find(val => val !== undefined) * 0.75 }) }
    set100 = () => { this.setState({ amount: this.state.earnedData.find(val => val !== undefined) * 1 }) }
    UNSAFE_componentWillMount() {
        this.setState({
            earnedData: this.props.earned,
        })
    }
    renderAmountWithDraw = () => {
        if (this.state.amount)
            return this.state.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    }
    renderEarned = () => {
        if (this.state.earnedData)
            return this.state.earnedData.find(val => val !== undefined).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        return
    }
    render() {
        return (
            <div className='item'>
                <div className='item-top'>
                    <div className='top-left'>
                        <Image src={this.props.src} />
                        <p>{this.props.title}</p>
                    </div>
                    <div className='top-right'>{this.renderEarned()}</div>
                </div>
                <div className='item-bot'>
                    <div onClick={this.showDeposit}>Deposit</div>
                    <Modal
                        title="Deposit USDT TRON"
                        visible={this.state.visDeposit}
                        onCancel={this.handleCancel}
                    >
                        <Image className="img-scan" src={scan} />
                        <p className='text-scan' onClick={this.handleCancel}>Scan to send transaction</p>
                    </Modal>
                    <div onClick={this.showWithDraw}>Withdraw</div>
                    <Modal
                        title="Withdraw USDT TRON"
                        visible={this.state.visWithDraw}
                        onCancel={this.handleCancel}
                    >
                        <p>Wallet address</p>
                        <Input />
                        <p>Amount</p>
                        <Input inputMode='numeric' value={this.renderAmountWithDraw()} />
                        <div className='button-amount'>
                            <Button onClick={this.set25}>25%</Button>
                            <Button onClick={this.set50}>50%</Button>
                            <Button onClick={this.set75}>75%</Button>
                            <Button onClick={this.set100}>100%</Button>
                        </div>
                        <p onClick={this.handleCancel} className='wallet-confirm'>Confirm transaction</p>
                    </Modal>
                    <div onClick={this.showSwap}>Swap</div>
                    <Modal
                        title="Withdraw USDT TRON"
                        visible={this.state.visSwap}
                        onCancel={this.handleCancel}
                    >
                        <p>Select wallet</p>
                        <Input />
                        <p>Amount</p>
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
class Content extends Component {
    opeAmount = () => {
        if (this.props.amount >= 0)
            return <span>+{this.props.amount}</span>
        return this.props.amount
    }
    SliceCode = () => {
        let arr = this.props.code
        if (arr.length > 8)
            return <span className="">{arr.slice(0, 4) + '...' + arr.slice(28)}</span>
        return arr
    }

    CheckStatus = () => {
        let arr = this.props.status
        if (arr === "CANCEL")
            return <span style={{ color: "red" }}>{arr}</span>
        return <span style={{ color: "#39C41F", fontWeight: 300 }}>{arr}</span>
    }
    render() {
        return (
            <div className={this.props.classname}>
                <div style={{ width: "20%" }}>{this.opeAmount()}</div>
                <div style={{ width: "20%" }}>{this.props.fee}</div>
                <div style={{ width: "20%" }}>{this.SliceCode()}</div>
                <div style={{ width: "20%" }}>{this.CheckStatus()}</div>
                <div style={{ width: "20%", textAlign: "right" }}>{this.props.date}</div>
            </div>
        );
    }
}
class Wallets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataWallets: []
        }
    }
    UNSAFE_componentWillMount() {
        axios({
            url: `${ROOT_API_URL}/wallet-trans/list`,
            method: "GET",
            headers: {
                "Content-Type": "applycation/json",
                "Authorization": localStorage.getItem("isLogin")
            }
        }).then(respon => {
            if (respon.data.status_code === 200) {
                this.setState({
                    dataWallets: respon.data.data.data
                })
            }
        })
    }
    renderItems() {
        const walletsData = this.state.dataWallets
        let data = walletsData.map((value, index) => {
            let amount = value.balance_after - value.balance_before
            var m = new Date(value.updated_at);
            var dateString =
                ("0" + m.getUTCHours()).slice(-2) + ":" +
                ("0" + m.getUTCMinutes()).slice(-2) + " " +
                ("0" + m.getUTCDate()).slice(-2) + "/" +
                ("0" + (m.getUTCMonth() + 1)).slice(-2) + "/" +
                m.getUTCFullYear()

            let isTop = index > 0 ? 'one' : ''
            return <Content classname={'content ' + isTop} amount={amount} fee={value.type} code={value.code} status={value.status} date={dateString} key />
        })
        return data
    }
    RenderWalletAmount = () => {
        let arr = this.props.dataUser.data.wallet
        let data = arr.map((value, key) => {
            if (value.unit === "USDTTRON")
                return value.amount
            return undefined
        })
        return data
    }
    render() {
        return (
            <div className='wallets container'>
                <div className='title'>Wallets</div>
                <div className='wallets-content'>
                    <div className='wallets-top'>
                        <WalletItem src={usdt} title='USDT TRON' earned={this.RenderWalletAmount()} />
                        {/* <WalletItem src={usj} title='USJ' earned={this.props.dataUser.data.commissions_earned} /> */}
                        <Commission />
                    </div>
                    <div className='wallets-bottom'>
                        <div className='title'>Transaction</div>
                        {this.renderItems()}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state=>({dataUser: state.loginReducers.dataUser})

export default connect(mapStateToProps)(Wallets)