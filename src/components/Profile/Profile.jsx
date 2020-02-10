import React, {useState} from 'react';
import PostsContainer from '../Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import About from "./About/About";
import {NavLink, Route} from "react-router-dom";

const Profile = (props) => {
let alerts = () =>{
  alert('click')
}
  return (
    <main className="dashboard-mp">	
    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}/>
    <div className="dash-tab-links">
      <div className="container">
        <div className="row"><div className="col-lg-12 col-md-12">
            <ul className="nav nav-tabs">
              <li className="nav-item" onItemSelected={alerts}>
                <NavLink to={props.match.url + '/activity'} className="nav-link">Activity</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={props.match.url + '/about'} className="nav-link">About</NavLink>
              </li>
            </ul>
          </div>
          <Route path={props.match.url + '/activity'} exact render={() => <PostsContainer />}/>
          <Route path={props.match.url + '/about'} exact render={() => <About profile={props.profile} isOwner={props.isOwner}/>}/>



        </div>
      </div>
    </div>
  </main>
  )
}

export default Profile;