import React from 'react'
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import Profile from "./Profile";
import {getProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import {ProfileType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


class ProfileContainer extends React.Component<PropsType> {


  // Делаем проверку на id в url и делаем запрос
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.AuthUserId;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile()

  }
  componentDidUpdate(prevProps:PropsType) {
    if(this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} isOwner={this.props.match.params.userId == this.props.AuthUserId || !this.props.match.params.userId}/>
  }
}



type MapStateToPropsType = {
  profile: ProfileType | null,
  status: string,
  AuthUserId: null | number,
}
type MapDispatchToPropsType = {
  getProfile: (userId: string) => void
  getStatus: (userId: string) => void
  updateStatus: (status: string) => void
}
type OwnPropsType = {
  match: any
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    AuthUserId: state.auth.id
  }
}
export default compose(
    connect(mapStateToProps,{getProfile,getStatus,updateStatus}),
    withRouter
)(ProfileContainer);