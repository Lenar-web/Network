import React, {useEffect} from 'react'
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getMyProfile} from '../../redux/profile-reducer';
import { NavLink } from 'react-router-dom';
import Preloader from '../Common/Preloader/Preloader';

const MyProfile = (props) => {

  useEffect(() => {
    props.getMyProfile(props.AuthUserId)
  }, [props.AuthUserId])

 if(!props.myProfile){
   return <Preloader />
 }
  return <div className="user-data full-width">
  <div className="user-profile">
    <div className="username-dt dpbg-1">
      <NavLink to={`/profile/${props.AuthUserId}`}>
      <div className="usr-pic">
        <img src={props.myProfile.photos.large !== null 
                  ? props.myProfile.photos.large 
                  : 'https://forum.mikrotik.com/styles/canvas/theme/images/no_avatar.jpg'} alt=""/>
      </div>
      </NavLink>
    </div>
    <div className="user-main-details">
   {props.myProfile ?<h4>{props.myProfile.fullName}</h4> : <NavLink to={`/login`}>Login</NavLink>}
    </div>
    <div className="profile-link">
    <NavLink to={`/profile/${props.AuthUserId}`}>View Profile
      </NavLink>
    </div>
  </div>							
</div>
}


let mapStateToProps = (state) => {
  return {
    myProfile: state.profilePage.myProfile,
    AuthUserId: state.auth.id,
  }
}
export default compose(
    connect(mapStateToProps,{getMyProfile})
)(MyProfile);