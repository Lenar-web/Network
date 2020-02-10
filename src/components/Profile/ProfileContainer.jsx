import React from 'react'
import {compose} from 'redux';
import {connect} from 'react-redux';
import{withRouter} from 'react-router-dom';
import Profile from "./Profile";
import {getProfile, getStatus} from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {
  // Делаем проверку на id в url и делаем запрос
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 1688;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps) {
    if(this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }
  render() {
    return <Profile {...this.props} mutch={this.props.match} profile={this.props.profile}/>
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    AuthUserId: state.auth.id,
  }
}
export default compose(
    connect(mapStateToProps,{getProfile,getStatus}),
    withRouter
)(ProfileContainer);