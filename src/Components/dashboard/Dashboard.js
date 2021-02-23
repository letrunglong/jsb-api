import React from 'react';
import { Image } from 'antd';
import copyIcon from 'assets/images/icons/copyicon.svg';
import homeicon from 'assets/images/icons/home.svg';
import members from 'assets/images/dashboard-img/frend.svg';
import global from 'assets/images/dashboard-img/global.svg';
import totalCart from 'assets/images/dashboard-img/total.svg';
import totalCommission from 'assets/images/dashboard-img/pega.svg';
import totalDirect from 'assets/images/dashboard-img/direct.svg';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Items(props) {

    return (
        <div className='dashboard-search'>
            <div className='search-1'>
                <p className='title'>Referals link</p>
                <div className='link-copy'>
                    <a href={"https://pegaswap.com/signup?sponsorkey=" + props.sponsorKey} className='link-text'>https://pegaswap.com/signup?sponsorkey={props.sponsorKey}</a>
                    <Image src={copyIcon} />
                </div>
            </div>
            <div className='search-2'>
                <p className='title'>Referals code</p>
                <div className='link-copy text'>
                    <p className='link-text'>
                        <CopyToClipboard
                            text={props.sponsorKey}
                        >
                            <span>{props.sponsorKey}</span>
                        </CopyToClipboard>

                    </p>
                    <Image src={copyIcon} />
                </div>
            </div>
        </div>
    );
}
function OneDashBoardContent(props) {
    return (
        <div className="one-items">
            <div className='image-dashboard'>
                <Image src={props.src} />
            </div>
            <div className='text-dashboard'>
                <p className='price-dashboard'>{props.price}</p>
                <p className='title-dashboard'>{props.title}</p>
            </div>
        </div>
    );
}


function DashBoard(props) {
    return (
        <div className='dashboard container'>
            <div className='title'>Dashboard</div>
            <Items sponsorKey={props.dataUser.data.sponsorKey} />
            <div className='dashboard-content'>
                <OneDashBoardContent src={homeicon}
                    price={props.dataUser.data.levelInfoCommissions.title}
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


const mapState = state => ({ dataUser: state.loginReducers.dataUser })
export default connect(mapState)(DashBoard)