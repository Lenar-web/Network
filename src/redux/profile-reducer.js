import {profileAPI} from "../api/api"; 

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'; 
const SET_USER_STATUS = 'SET-USET-STATUS'; 
const SET_MY_PROFILE = 'SET_MY_PROFILE'; 

let initilaState ={
  profile: null,
  myProfile: null,
  status: "",
  postData: [
    {author: 'Lenar Evstafev', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, dolor ut mollis rutrum, mauris arcu mollis lacus, eget imperdiet neque neque eget nisl.', like: 0, id: 1},
    {author: 'Lenar Evstafev', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, dolor ut mollis rutrum, mauris arcu mollis lacus, eget imperdiet neque neque eget nisl.', like: 12, id: 2},
    {author: 'Lenar Evstafev', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, dolor ut mollis rutrum, mauris arcu mollis lacus, eget imperdiet neque neque eget nisl.', like: 45, id: 3},
  ]  
}

const profileReducer = (state = initilaState, action) =>{
  switch(action.type){
    case ADD_POST:
      let newPost ={
        author: 'Lenar Evstafev',
        text: action.newPostText,
        like: 0,
        id: 4,
      }
      return{
        ...state,
        postData: [...state.postData, newPost]
      }
      case SET_USER_PROFILE: 
      return { 
        ...state, 
        profile: action.profile 
  
      } 
    case SET_MY_PROFILE:  
    return { 
      ...state, 
      myProfile: action.profile 
    } 
    case SET_USER_STATUS: 
      return{ 
        ...state, 
        status: action.status 
      } 
    default:
      return state;
  }
}


export const AddPost = (newPostText) => ({type: ADD_POST, newPostText});
export const SetMyProfile = (profile) => ({type: SET_MY_PROFILE, profile}); 
export const SetUserProfile = (profile) => ({type: SET_USER_PROFILE, profile}); 
export const SetUserStatus = (status) => ({type: SET_USER_STATUS, status}) 
 
export const getProfile = (userId) => async (dispatch) =>{ 
  const profile = await profileAPI.getUserProfile(userId); 
  dispatch(SetUserProfile(profile.data)); 
} 
export const getMyProfile = (userId) => async (dispatch) =>{ 
  const profile = await profileAPI.getUserProfile(userId); 
  dispatch(SetMyProfile(profile.data)); 
} 
 
export const getStatus = (userId) => async (dispatch) => { 
  const status = await profileAPI.getUserStatus(userId); 
  dispatch(SetUserStatus(status)); 
} 

export default profileReducer