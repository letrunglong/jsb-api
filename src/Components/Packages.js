import React, { Component } from 'react';
import P from '../images/packages-img/p.svg';
import { Image, Modal, Input, InputNumber, Button } from 'antd';
import 'antd/dist/antd.css';

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
    handleCancel= ()=>{
        this.setState({
            visible: false,
        });
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
                            <p>Pool 1</p>
                            <p>$ 0.1</p>
                        </div>
                    </div>
                    <div className='item-top-right'>
                        <p>50.000</p>
                    </div>
                </div>
                <div className='item-bottom' onClick={this.showModal}>
                    Buy now
                </div>
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
                            <Input placeholder="100" defaultValue={100} />
                        </div>
                        <div className='bottom-modal'>
                            <p>Total pay in USDT JSB</p>
                            <Input placeholder="Không nhập số (chọn btn phí dưới)" value={this.state.value}/>
                        </div>
                        <div className='button-modal'>
                            <Button className='button1k' onClick={()=>{this.setState({value:1000})}}>$1000</Button>
                            <Button className='button2k' onClick={()=>{this.setState({value:5000})}}>$5000</Button>
                        </div>
                        <div className='confirm' onClick={()=>{this.setState({visible:false})}}>Confirm transaction!</div>
                    </div>
                </Modal>
            </div>
        );
    }
}

class Packages extends Component {

    renderItems() {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 67, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        let data = arr.map((value, index) => {
            let isTop = index > 2 ? "top" : "";
            return <OneItem class={'item ' + isTop} />
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

export default Packages;