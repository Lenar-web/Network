import React, {FC, useState} from 'react';
import PostsContainer from '../Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import About from "./About/About";
import {NavLink, Route, Switch} from "react-router-dom";
import Preloader from "../Common/Preloader/Preloader";
import {ProfileType} from "../../types/types";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";

type PropsType= {
  profile: null | ProfileType
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  match: any
}
const Profile: FC<PropsType> = ({profile, status, updateStatus, isOwner, match}) => {
  debugger

if (!profile) {
  return <Preloader/>
}
  return (
    <main className="dashboard-mp">	
    <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner}/>
    <div className="dash-tab-links">
      <div className="container">
        <div className="row"><div className="col-lg-12 col-md-12">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <NavLink to={'/profile/' + profile.userId +'/activity'} className="nav-link">Activity</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/profile/' + profile.userId +'/about'} className="nav-link">About</NavLink>
              </li>
            </ul>
          </div>
          <Switch>
          <Route path={match.url + '/activity'} render={() => <PostsContainer />}/>
          <Route path={match.url + '/about'} render={() => <About profile={profile} isOwner={isOwner}/>}/>
          <Route  render={() => <PostsContainer />}/>
          </Switch>



        </div>
      </div>
    </div>
  </main>
  )
}

export default Profile;