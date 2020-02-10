import { usersAPI } from "../api/api";

const SET_USERS = 'SET-USERS';
const SET_TOTAL_USER_COUNT ="SET-USER-TOTAL-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const IS_FETHCING = 'IS-FETCHING';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS';
let initilaState ={
 users: [],
 pageSize: 24,
 currentPage: 1,
 isFetching: false,
 followingInProgress: [],
 totalUserCount: 0,
}

const usersReducer = (state = initilaState, action) =>{
  switch(action.type){
    case SET_USERS:
      return{
        ...state,
        users: action.users
      }
      case IS_FETHCING:
      return{
        ...state,
        isFetching: action.fetching
      }
      case SET_TOTAL_USER_COUNT:
          return{
            ...state,
            totalUserCount: action.count
          }
      case SET_CURRENT_PAGE:
        return{
          ...state,
          currentPage: action.pageNumber
        }
      case FOLLOW:
        return{
          ...state,
          users: state.users.map(u => {
            if(u['id'] === action.userId){
              return{...u, ...{followed: true}}
            }
            else {
              return u;
            }
          })
        }
        case UNFOLLOW:
          return{
            ...state,
            users: state.users.map(u => {
              if(u['id'] === action.userId){
              
                return{...u, ...{followed: false}}
                
              }
              else {
                return u;
              }
            })
          }
          case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
              ...state,
              followingInProgress: action.isFetching
                ? [
                  ...state.followingInProgress,
                  action.userId
                ]
                : state
                  .followingInProgress
                  .filter(id => id !== action.userId)
            }
    default:
      return state;
  }
}


export const setUsers = (users) => ({type: SET_USERS, users});
export const setUserCount = (count) => ({type: SET_TOTAL_USER_COUNT, count});
export const toggleIsFetching = (fetching) => ({type: IS_FETHCING, fetching});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId})

export const getUsersRequest =(currentPage, pageSize) => async(dispatch) => {
  dispatch(toggleIsFetching(true))
  let users = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setUsers(users.items))
  dispatch(toggleIsFetching(false))
  dispatch(setUserCount(users.totalCount))
}

export const pageChange = (currentPage, pageSize) => async(dispatch) => {
  dispatch(setCurrentPage(currentPage))
  dispatch(toggleIsFetching(true))
  let users = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setUsers(users.items))
  dispatch(toggleIsFetching(false))
}

export const follow = (userId) => async(dispatch) => {
  dispatch(toggleFollowingInProgress(true, userId));
  let resultCode = await usersAPI.follow(userId);
  if(resultCode === 0) {
    dispatch(followSuccess(userId))
  }
  dispatch(toggleFollowingInProgress(false, userId));
}
export const unfollow = (userId) => async(dispatch) => {
  let resultCode = await usersAPI.unfollow(userId);
  if(resultCode === 0) {
    dispatch(unfollowSuccess(userId))
  }
}

export default usersReducer