import { connect } from 'react-redux';
import {
    getUserInfo,
    startAuth
} from './header.actions';
import Header from '../../components/header/header.component.jsx';

const mapStateToProps = (state) => {
    return {
        started: state.headerReducer.startAuth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: (userInfo) => {
            dispatch(getUserInfo(userInfo));
        },
        startAuth: (userInfo) => {
            dispatch(startAuth(userInfo));
        }
    };
};

const ConnectedHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default ConnectedHeader;
