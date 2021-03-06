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



type MapStatePropsType = {
  profile: ProfileType | null,
  status: string,
  AuthUserId: null | number,
}
type MapDispatchPropsType = {
  getProfile: (userId: number) => void
  getStatus: (userId: string) => void
  updateStatus: (status: string) => void
}
type OwnPropsType = {
  match: any
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    AuthUserId: state.auth.id
  }
}
export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,{getProfile,getStatus,updateStatus}),
    withRouter
)(ProfileContainer);