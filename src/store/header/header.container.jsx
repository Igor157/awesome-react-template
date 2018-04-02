import { connect } from 'react-redux';
import { getUserInfo } from './header.actions';
import Header from '../../components/header/header.component.jsx';

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: (userInfo) => {
            dispatch(getUserInfo(userInfo));
        }
    };
};

const ConnectedHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default ConnectedHeader;
