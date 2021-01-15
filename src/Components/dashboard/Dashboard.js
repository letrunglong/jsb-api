import React, { Component } from 'react';
import { Image } from 'antd';
import copyIcon from '../../images/icons/copyicon.svg';
import homeicon from '../../images/icons/home.svg';
import members from '../../images/dashboard-img/frend.svg';
import global from '../../images/dashboard-img/global.svg';
import totalCart from '../../images/dashboard-img/total.svg';
import totalCommission from '../../images/dashboard-img/pega.svg';
import totalDirect from '../../images/dashboard-img/direct.svg';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Items extends Component {
    render() {
        return (
            <div className='dashboard-search'>
                <div className='search-1'>
                    <p className='title'>Referals link</p>
                    <div className='link-copy'>
                        <a href={"https://pegaswap.com/signup?sponsorkey=" + this.props.sponsorKey} className='link-text'>https://pegaswap.com/signup?sponsorkey={this.props.sponsorKey}</a>
                        <Image src={copyIcon} />
                    </div>
                </div>
                <div className='search-2'>
                    <p className='title'>Referals code</p>
                    <div className='link-copy text'>
                        <p className='link-text'>
                            <CopyToClipboard
                                text={this.props.sponsorKey}
                            >
                                <span>{this.props.sponsorKey}</span>
                            </CopyToClipboard>

                        </p>
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
            <div className="one-items">
                <div className='image-dashboard'>
                    <Image src={this.props.src} />
                </div>
                <div className='text-dashboard'>
                    <p className='price-dashboard'>{this.props.price}</p>
                    <p className='title-dashboard'>{this.props.title}</p>
                </div>
            </div>
        );
    }
}


class DashBoard extends Component {
    render() {
        console.log(this.props.dataUser);
        return (
            <div className='dashboard container'>
                <div className='title'>Dashboard</div>
                <Items sponsorKey={this.props.dataUser.data.sponsorKey} />
                <div className='dashboard-content'>
                    <OneDashBoardContent src={homeicon}
                        price={this.props.dataUser.data.levelInfoCommissions.title}
                    />
                    <OneDashBoardContent src={members} price='1000' title='Members' />
                    <OneDashBoardContent src={global} price='$1000' title='Total networks buy' />
                    <OneDashBoardContent src={totalCart} price='$1000' title='Total direct buy' />
                    <OneDashBoardContent src={totalCommission} price='$1000' title='Total commission' />
                    <OneDashBoardContent src={totalDirect} price='$1000' title='Direct commitsion' />
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        dataUser: state.dataUser,
    }
}
export default connect(mapStateToProps)(DashBoard)