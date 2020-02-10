import React from 'react'
import Header from './Header';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getAuthMe } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

  // вызываем санку для получения профиля
  componentDidMount(){
    this.props.getAuthMe()
  }
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return{
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}
export default compose(
  connect(mapStateToProps, {getAuthMe})
)(HeaderContainer);