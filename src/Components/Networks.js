import React, { Component } from 'react';
import {   Image     } from 'antd'
import copyIcon from '../images/icons/copyicon.svg';
import homeicon from '../images/icons/home.svg';
import members from '../images/dashboard-img/frend.svg';
import global from '../images/dashboard-img/global.svg';
import totalCart from '../images/dashboard-img/total.svg';
import totalCommission from '../images/dashboard-img/pega.svg';
import totalDirect from '../images/dashboard-img/direct.svg';

class Items extends Component {
    render() {
        return (
            <div className='dashboard-search'>
                <div className='search-1'>
                    <p className='title'>Referals link</p>
                    <div className='link-copy'>
                        <p className='link-text'>https://pegaswap.com/signup?sponsorkey=winwin</p>
                        <Image src={copyIcon} />
                    </div>
                </div>
                <div className='search-2'>
                    <p className='title'>Referals code</p>
                    <div className='link-copy text'>
                        <p className='link-text'>winwin</p>
                        <Image src={copyIcon} />
                    </div>
                </div>
            </div>
        );
    }
}
class OneDashBoardContent extends Component {
    render() {
        return (
            <div className={this.props.class}>
                <div className='image-dashboard'>
                    <Image src={this.props.src}/>
                </div>
                <div className='text-dashboard'>
                    <p className='price-dashboard'>{this.props.price}</p>
                    <p className='title-dashboard'>{this.props.title}</p>
                </div>
            </div>
        );
    }
}

class Networks extends Component {
    render() {
        return (
            <div className='networks dashboard container'>
                <div className='title'>Networks</div>
                <div className='networks-content dashboard-content'>
                    <OneDashBoardContent src={homeicon} price='Level title' class="one-items istop"/>
                    <OneDashBoardContent src={members} price='1000' title='Members' class="one-items istop"/>
                    <OneDashBoardContent src={global} price='$1000' title='Total networks buy' class="one-items istop"/>
                    <OneDashBoardContent src={totalCart} price='$1000' title='Total direct buy' class="one-items"/>
                    <OneDashBoardContent src={totalCommission} price='$1000' title='Total commission' class="one-items"/>
                    <OneDashBoardContent src={totalDirect} price='$1000' title='Direct commitsion' class="one-items"/>
                </div>
                <Items/>
            </div>
        );
    }
}

export default Networks;