import React, { Component } from 'react';
import { Image,Modal,Input, Button } from 'antd';
import usdt from '../images/wallets-img/usdt.svg';
import usj from '../images/wallets-img/usj.svg';
import scan from '../images/wallets-img/scan.svg';
class WalletItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            visDeposit:false,
            visWithDraw:false,
            visSwap:false,
            amount:0
        }
    }
    showDeposit= ()=>{
        this.setState({
            visDeposit:true,
        })
    }
    showWithDraw =()=>{
        this.setState({
            visWithDraw:true
        });
    }
    showSwap =()=>{
        this.setState({
            visSwap:true
        });
    }

      handleCancel = () => {
        this.setState({
            visDeposit: false,
            visWithDraw:false,
            visSwap:false
        });
      };
    // setamount 4button 

      set25= () =>{this.setState({amount:25})}
      set50= () =>{this.setState({amount:50})}
      set75= () =>{this.setState({amount:75})}
      set100= () =>{this.setState({amount:100})}

    render() {
        return (
            <div className='item'>
                <div className='item-top'>
                    <div className='top-left'>
                        <Image src={this.props.src} />
                        <p>{this.props.title}</p>
                    </div>
                    <div className='top-right'>999.000</div>
                </div>
                <div className='item-bot'>
                    <div onClick={this.showDeposit}>Deposit</div>
                    <Modal
                        title="Deposit USDT TRON"
                        visible={this.state.visDeposit}
                        onCancel={this.handleCancel}
                    >
                        <Image className="img-scan" src={scan}/>
                        <p className='text-scan' onClick={this.handleCancel}>Scan to send transaction</p>
                    </Modal>
                    <div onClick={this.showWithDraw}>Withdraw</div>
                    <Modal
                        title="Withdraw USDT TRON"
                        visible={this.state.visWithDraw}
                        onCancel={this.handleCancel}
                    >
                        <p>Wallet address</p>
                        <Input/>
                        <p>Amount</p>
                        <Input inputMode='numeric' defaultValue={12345} value={this.state.amount}/>
                        <div className='button-amount'>
                            <Button onClick={this.set25}>25%</Button>
                            <Button onClick={this.set50}>50%</Button>
                            <Button onClick={this.set75}>75%</Button>
                            <Button onClick={this.set100}>100%</Button>
                        </div>
                        <p onClick= {this.handleCancel} className='wallet-confirm'>Confirm transaction</p>
                    </Modal>
                    <div onClick={this.showSwap}>Swap</div>
                    <Modal
                        title="Withdraw USDT TRON"
                        visible={this.state.visSwap}
                        onCancel={this.handleCancel}
                    >
                        <p>Select wallet</p>
                        <Input/>
                        <p>Amount</p>
                        <Input inputMode='numeric' defaultValue={12345} value={this.state.amount}/>
                        <div className='button-amount'>
                            <Button onClick={this.set25}>25%</Button>
                            <Button onClick={this.set50}>50%</Button>
                            <Button onClick={this.set75}>75%</Button>
                            <Button onClick={this.set100}>100%</Button>
                        </div>
                        <p onClick= {this.handleCancel} className='wallet-confirm'>Confirm transaction</p>
                    </Modal>
                </div>
            </div>
        );
    }
}
class Content extends Component {
    render() {
        return (
            <div className={this.props.classname}>
                <div>+100</div>
                <div>fee 1</div>
                <div>TRANSFER</div>
                <div>abxs.xxx</div>
                <div>COMPLETE</div>
                <div>00:00 22/11/2020</div>
            </div>
        );
    }
}

class Wallets extends Component {
    renderItems() {
        let arr = [1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        let data = arr.map((value, index) => {
            let isTop = index > 0 ? 'one' : ''
            return <Content classname={'content ' + isTop} />
        })
        return data
    }
    render() {
        return (
            <div className='wallets container'>
                <div className='title'>Wallets</div>
                <div className='wallets-content'>
                    <div className='wallets-top'>
                        <WalletItem src={usdt} title='USDT TRON' />
                        <WalletItem src={usj} title='USJ' />
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

export default Wallets;