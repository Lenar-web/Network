import React, {FC} from 'react'
import Preloader from '../../Common/Preloader/Preloader'
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import {ProfileType} from "../../../types/types";

type PropsType ={
  profile: ProfileType
  status: string,
  updateStatus: (status: string) => void
  isOwner: boolean
}
const ProfileInfo: FC<PropsType> = ({profile,status, updateStatus, isOwner}) => {

  if(!profile){
    return <Preloader />
  }
  return    <div>
  <div className="dash-todo-thumbnail-area1">
    <div className="todo-thumb1 dash-bg-image1 dash-bg-overlay">
      <img className="dash-bg-image" src="" alt=""/>
    </div>
    <div className="dash-todo-header1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">							
            <div className="my-profile-dash">
              <div className="my-dp-dash">
                <img src={profile.photos.large !== null 
                  ? profile.photos.large 
                  : 'https://forum.mikrotik.com/styles/canvas/theme/images/no_avatar.jpg'} alt="" />
              </div>									
            </div>														
          </div>																		
        </div>
      </div>
    </div>
  </div>
  <div className="dash-dts">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="event-title">
            <div className="my-dash-dt">
              <h3>{profile && profile.fullName}</h3>
              {isOwner ? <ProfileStatus status={status} updateStatus={updateStatus}/> : <span>{status ? status : 'no status'}</span>}
            </div>								
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
}

export default ProfileInfo