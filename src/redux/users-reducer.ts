import { usersAPI } from "../api/api";
import {UserType} from "../types/types";

const SET_USERS = 'SET-USERS';
const MORE_USERS = 'MORE-USERS';
const NEW_CURRENT_PAGE = "NEW-CURRENT-PAGE";
const SET_TOTAL_USER_COUNT ="SET-USER-TOTAL-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const IS_FETHCING = 'IS-FETCHING';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS';

let initilaState ={
  users: [] as Array<UserType>,
  pageSize: 3,
  currentPage: 1,
  totalUserCount: 0,
  isFetching: false,
  followingInProgress: [] as Array<number>, // array of users ids

}
type InitialStateType = typeof initilaState;
const usersReducer = (state = initilaState, action:any): InitialStateType =>{
  switch(action.type){
    case SET_USERS:
      return{
        ...state,
        users: action.users
      }
    case MORE_USERS:
      return{
        ...state,
        users: [...state.users, ...action.users]
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


export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users});
export const setMoreUsers = (users: Array<UserType>) => ({type: MORE_USERS, users});
export const setUserCount = (count: number) => ({type: SET_TOTAL_USER_COUNT, count});
export const toggleIsFetching = (fetching: boolean) => ({type: IS_FETHCING, fetching});
export const setCurrentPage = (pageNumber: number) => ({type: SET_CURRENT_PAGE, pageNumber});
export const followSuccess = (userId: number) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId});
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId})

export const getUsersRequest =(currentPage:number, pageSize:number) => async(dispatch:any) => {
  dispatch(toggleIsFetching(true))
  let users = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setUsers(users.items))
  dispatch(toggleIsFetching(false))
  dispatch(setUserCount(users.totalCount))
}
export const getUsersMore =(currentPage:number, pageSize:number) => async(dispatch:any) => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(currentPage))
  let users = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setMoreUsers(users.items))
  dispatch(toggleIsFetching(false))
}

export const pageChange = (currentPage:number, pageSize:number) => async(dispatch:any) => {
  dispatch(setCurrentPage(currentPage))
  dispatch(toggleIsFetching(true))
  let users = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setUsers(users.items))
  dispatch(toggleIsFetching(false))
}

export const follow = (userId: number) => async(dispatch:any) => {
  dispatch(toggleFollowingInProgress(true, userId));
  let resultCode = await usersAPI.follow(userId);
  if(resultCode === 0) {
    dispatch(followSuccess(userId))
  }
  dispatch(toggleFollowingInProgress(false, userId));
}
export const unfollow = (userId:number) => async(dispatch:any) => {
  let resultCode = await usersAPI.unfollow(userId);
  if(resultCode === 0) {
    dispatch(unfollowSuccess(userId))
  }
}

export default usersReducer