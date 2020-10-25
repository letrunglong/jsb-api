import React, { Component } from 'react';
import {    Image,Modal    } from 'antd'
import Unicorn from '../images/pools-img/unicorn.svg'



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
        this.state={
            visible:false
        }
    }
    handleCancel = ()=>{
        this.setState({
            visible:false
        })
    }
    openHisTransfer = ()=>{
        this.setState({
            visible:true
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
    render() {
        return (
            <div className={this.props.class}>
                <div className='top'>
                    <div className='top-left'>
                        <Image src={Unicorn}/>
                        <p>Pool 1</p>
                    </div>
                    <div className='top-right'>50.000</div>
                </div>
                <div className='bot'>
                    <p>Deposit</p>
                    <p onClick={this.openHisTransfer}>Transfer</p>
                    <Modal
                    style={{float:'right',marginRight:'50px'}}
                    width={1500}
                    title="Pool 1 - 999.999"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                >
                    <div className='title-pools-modal' style={{background:'#613887'}}>
                        Transaction
                    </div>
                    <div className='modal-content' style={{background:'#613887'}}>
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
    renderItems(){
        let arr =[1,1,1,1,1,1,1,1,1,1,1,1,1]
        let data = arr.map((value, index)=>{
            let pos = index > 2 ? 'pos' : ''
            return <OneItem class= {'one-item ' + pos}/>
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

export default Pools;