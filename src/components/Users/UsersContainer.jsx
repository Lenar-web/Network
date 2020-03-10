import React from 'react';
import Users from './Users';
import {compose} from 'redux';
import {connect} from 'react-redux';
import { getUsersRequest, pageChange,follow,unfollow, getUsersMore} from '../../redux/users-reducer';
class UsersContainer extends React.Component {
  componentDidMount(){
    this.props.getUsersRequest(this.props.currentPage, this.props.pageSize);
  }
  onPageChange = (pageNumber) => {
    this.props.getUsersMore(this.props.currentPage + 1, this.props.pageSize)
  }

  render() {
  return <>
  <Users {...this.props} onPageChange={this.onPageChange}/>
  </>
 }
}


let mapStateToProps = (state) => {
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
  connect(mapStateToProps, {getUsersRequest,pageChange, follow, unfollow,getUsersMore})
)(UsersContainer);
