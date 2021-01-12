import { TYPES } from 'Components/Auth/Login/redux/contants';
import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';
class AlertMessages extends Component {
    handleDismiss = () => {
        this.props.offAlert()
    }
    alertContent = () => {
        if (this.props.isShowAlert === true) {
            return <Alert type="primary" onDismiss={
                () => this.handleDismiss()
            } timeout={3000}>{this.props.alertTitle}</Alert>
        }
    }
    render() {
        return (
            <AlertContainer>
                {
                    this.alertContent()
                }

            </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isShowAlert: state.isShowAlert
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        offAlert: () => {
            dispatch({
                type: TYPES.DISMISS_ALERT
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertMessages)