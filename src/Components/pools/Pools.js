import React, { Component } from 'react';
import { Image, Modal } from 'antd'
import Unicorn from '../../images/pools-img/unicorn.svg'
import { connect } from 'react-redux';



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


class OneItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
    openHisTransfer = () => {
        this.setState({
            visible: true
        })
    }
    renderItems() {
        let arr = [1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        let data = arr.map((value, index) => {
            let isTop = index > 0 ? 'one' : ''
            return <Content classname={'content ' + isTop} />
        })
        return data
    }
    formatAmount = () => {
        return new Intl.NumberFormat('en-vi').format(this.props.amount)
    }
    render() {
    
        return (
            <div className={this.props.class}>
                <div className='top'>
                    <div className='top-left'>
                        <Image src={Unicorn} />
                        <p>{this.props.title}</p>
                    </div>
                    <div className='top-right'>{this.formatAmount()}</div>
                </div>
                <div className='bot'>
                    <p>Deposit</p>
                    <p onClick={this.openHisTransfer}>Transfer</p>
                    <Modal
                        style={{ float: 'right', marginRight: '50px' }}
                        width={1500}
                        title="Pool 1 - 999.999"
                        visible={this.state.visible}
                        onCancel={this.handleCancel}
                    >
                        <div className='title-pools-modal' style={{ background: '#613887' }}>
                            Transaction
                    </div>
                        <div className='modal-content' style={{ background: '#613887' }}>
                            {
                                this.renderItems()
                            }
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}


class Pools extends Component {
    renderItems() {
        let arr = this.props.dataUser.data.wallet
        let data = arr.map((value, index) => {
            let pos = index > 1 ? 'pos' : ''


            if (value.network === "POOL")
                return <OneItem class={'one-item ' + pos} title={value.label} amount={value.amount}/>
            return null
        });
        return data
    }
    render() {
        return (
            <div className='pools container'>
                <div className='title'>Pools</div>
                <div className='pools-content'>
                    {
                        this.renderItems()
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        dataUser: state.loginReducers.dataUser
    }
}
export default connect(mapStateToProps)(Pools)