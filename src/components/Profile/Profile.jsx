import React, {useState} from 'react';
import PostsContainer from '../Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import About from "./About/About";
import {NavLink, Route, Switch} from "react-router-dom";
import Preloader from "../Common/Preloader/Preloader";

const Profile = (props) => {
let alerts = () =>{
  alert('click')
}
if (!props.profile) {
  return <Preloader/>
}
  return (
    <main className="dashboard-mp">	
    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}/>
    <div className="dash-tab-links">
      <div className="container">
        <div className="row"><div className="col-lg-12 col-md-12">
            <ul className="nav nav-tabs">
              <li className="nav-item" onItemSelected={alerts}>
                <NavLink to={'/profile/' + props.profile.userId +'/activity'} className="nav-link">Activity</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/profile/' + props.profile.userId +'/about'} className="nav-link">About</NavLink>
              </li>
            </ul>
          </div>
          <Switch>
          <Route path={props.match.url + '/activity'} render={() => <PostsContainer />}/>
          <Route path={props.match.url + '/about'} render={() => <About profile={props.profile} isOwner={props.isOwner}/>}/>
          <Route  render={() => <PostsContainer />}/>
          </Switch>



        </div>
      </div>
    </div>
  </main>
  )
}

export default Profile;