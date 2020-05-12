import React, {FC, useEffect} from 'react'
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getMyProfile} from '../../redux/profile-reducer';
import { NavLink } from 'react-router-dom';
import Preloader from '../Common/Preloader/Preloader';
import {ProfileType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


const MyProfile: FC<PropsType> = ({myProfile, AuthUserId, getMyProfile}) => {

   useEffect(() => {
     getMyProfile(AuthUserId)
   }, [AuthUserId])



 if(!myProfile){
   return <Preloader />
 }
  return <div className="user-data full-width">
  <div className="user-profile">
    <div className="username-dt dpbg-1">
      <NavLink to={`/profile`}>
      <div className="usr-pic">
        <img src={myProfile.photos.large !== null
                  ? myProfile.photos.large
                  : 'https://forum.mikrotik.com/styles/canvas/theme/images/no_avatar.jpg'} alt=""/>
      </div>
      </NavLink>
    </div>
    <div className="user-main-details">
   {myProfile ?<h4>{myProfile.fullName}</h4> : <NavLink to={`/login`}>Login</NavLink>}
    </div>
    <div className="profile-link">
    <NavLink to={`/profile`}>View Profile
      </NavLink>
    </div>
  </div>							
</div>
}

type MapStatePropsType ={
  myProfile: ProfileType | null
  AuthUserId:  number
}
type MapDispatchPropsType ={
  getMyProfile: (userId:number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType
let mapStateToProps = (state:any):MapStatePropsType => {
  return {
    myProfile: state.profilePage.myProfile,
    AuthUserId: state.auth.id,
  }
}
export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, AppStateType>(mapStateToProps,{getMyProfile})
)(MyProfile);