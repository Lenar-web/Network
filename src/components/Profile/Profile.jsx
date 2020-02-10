import React from 'react'
import Posts from '../Posts/Posts'
import PostsContainer from '../Posts/PostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {Route, NavLink} from 'react-router-dom';
import About from "./About/About";
const Profile = (props) => {
  return (
    <main className="dashboard-mp">	
    <ProfileInfo profile={props.profile} status={props.status}/>
    <div className="dash-tab-links">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="my_dashboard_activity.html">Activity</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="my_dashboard_about.html">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="my_dashboard_setting_info.html">Setting</a>
              </li>
            </ul>
          </div>
          <About profile={props.profile}/>
          <PostsContainer />

        </div>
      </div>
    </div>
  </main>
  )
}

export default Profile;