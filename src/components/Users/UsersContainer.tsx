import React from 'react';
import Users from './Users';
import {compose} from 'redux';
import {connect} from 'react-redux';
import { getUsersRequest,follow,unfollow, getUsersMore} from '../../redux/users-reducer';
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type PropsType ={
  users: Array<UserType>
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUserCount: number
  followingInProgress: Array<number>

  getUsersRequest: (currentPage: number, pageSize: number) => void
  getUsersMore: (currentPage: number, pageSize: number) => void
  follow: (id:number) => void
  unfollow: (id:number) => void
}
class UsersContainer extends React.Component<PropsType> {
  componentDidMount(){
    this.props.getUsersRequest(this.props.currentPage, this.props.pageSize);
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


let mapStateToProps = (state:AppStateType) => {
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
  connect(mapStateToProps, {getUsersRequest,follow, unfollow,getUsersMore})
)(UsersContainer);
