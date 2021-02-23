import React, { Component } from 'react';
import P from 'assets/images/packages-img/p.svg';
import { Image, Modal, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { ROOT_API_URL } from 'common/constants';
import { connect } from 'react-redux';
import { TYPES } from 'components/redux/constants';
import store from "../redux/store"



class OneItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            confirmLoading: false,
            value: 0
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }
    checkCostUpgrade = () => {
        const minElement = Math.min(...this.props.arrCost)
        if (this.props.costUpgrade === minElement && this.props.costUpgrade > 0) {
            return <div className='item-bottom'>
                <span onClick={this.showModal}>Buy now</span></div>
        } else {
            return <div className='item-bottom not-available'>
                <span className="not-available">Not available at this moment!</span>
            </div>
        }
    }
    formatCostUpgrade = () => {
        let costUpgrade = new Intl.NumberFormat('en-vi').format(this.props.costUpgrade)
        return costUpgrade
    }
    formatValueUpgrade = () => {
        let valueUpgrade = new Intl.NumberFormat('en-vi').format(this.state.value / this.props.price)
        return valueUpgrade
    }
    formatValue = () => {
        return new Intl.NumberFormat('en-vi').format(this.state.value)
    }
    render() {
        return (
            <div className={this.props.class}>
                <div className='item-top'>
                    <div className='item-top-left'>
                        <div className='item-image'>
                            <Image src={P} />
                        </div>
                        <div className='item-text'>
                            <p>{this.props.title}</p>
                            <span>$ {this.props.price}</span>
                        </div>
                    </div>
                    <div className='item-top-right'>
                        <p>{this.formatCostUpgrade()}</p>
                    </div>
                </div>
                {this.checkCostUpgrade()}
                <Modal
                    title="Buy Pool 1"
                    visible={this.state.visible}
                    confirmLoading={this.state.confirmLoading}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div className='modal packages'>
                        <div className='top-modal'>
                            <p>Amount to buy</p>
                            <Input value={this.formatValueUpgrade()} />
                        </div>
                        <div className='bottom-modal'>
                            <p>Total pay in USDT JSB</p>
                            <Input value={this.formatValue()} />
                        </div>
                        <div className='button-modal'>
                            <Button className='button1k' onClick={() => { this.setState({ value: 1000 }) }}>$1000</Button>
                            <Button className='button2k' onClick={() => { this.setState({ value: 5000 }) }}>$5000</Button>
                        </div>
                        <div className='confirm' onClick={() => { this.setState({ visible: false }) }}>Confirm transaction!</div>
                    </div>
                </Modal>
            </div>
        );
    }
}

class Packages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPackages: []
        }
    }

    UNSAFE_componentWillMount() {
        axios({
            url: `${ROOT_API_URL}/list-package?type=POOL`,
            headers: {
                "Content-Type": "applycation/json",
                "Authorization": localStorage.getItem("isLogin")
            }
        }).then(respon => {
            if (respon.data.status_code === 200) {
                this.setState({
                    dataPackages: respon.data.data
                })
                store.dispatch({
                    type:TYPES.SET_DATA_PACKAGES,
                    dataPackages:respon.data.data
                })
            }
        })
    }
    renderItems() {
        let arr = this.state.dataPackages
        let arrCost = []
        let data = arr.map((value, index) => {
            let costUpgrade = (value.quantity - value.wasSale)
            arrCost.push(value.quantity - value.wasSale)
            arrCost = arrCost.filter((val) => val !== 0);
            let isTop = index > 2 ? "top" : "";
            return <OneItem class={'item ' + isTop} price={value.price} costUpgrade={costUpgrade} {...this.props} arrCost={arrCost} title={value.title} key/>
        })
        return data
    }
    render() {
        return (
            <div className='packages container'>
                <div className='title'>Packages</div>
                <div className='packages-content'>
                    {
                        this.renderItems()
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = state =>({dataPackages: state.packageReducers.dataPackages})

export default connect(mapStateToProps)(Packages)
