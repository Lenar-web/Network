import React from 'react';
import Users from './Users';
import {compose} from 'redux';
import {connect} from 'react-redux';
import { getUsersRequest,follow,unfollow, getUsersMore} from '../../redux/users-reducer';
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsersRequest(this.props.currentPage, this.props.pageSize);
    let globalProps = this.props;
  debugger
  }

  onPageChange = () => {
    this.props.getUsersMore(this.props.currentPage + 1, this.props.pageSize)
  }

  render() {
  return <>
  <Users {...this.props} onPageChange={this.onPageChange}/>
  </>
 }
}

type MapStatePropsType = {
  users: Array<UserType>,
  pageSize: number,
  currentPage: number,
  totalUserCount: number,
  isFetching: boolean,
  followingInProgress: Array<number>
}
type MapDispatchPropsType = {
  getUsersRequest: (currentPage: number, pageSize: number) => void
  getUsersMore: (currentPage: number, pageSize: number) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: any):MapStatePropsType => {
  return {
    users: state.users.users,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    pageSize: state.users.pageSize,
    totalUserCount: state.users.totalUserCount,
    followingInProgress: state.users.followingInProgress,
  }
}




export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, AppStateType>
  (mapStateToProps, {getUsersRequest,follow, unfollow,getUsersMore})
)(UsersContainer);
