import React from 'react'
import {NavLink} from "react-router-dom"; 
const User = ({user, follow, unfollow, followingInProgress}) => {
  return                 <div className="col-lg-4 col-md-6">								
  <div className="user-data full-width">
    <div className="user-profile">
      <div className="userbg-dt dpbg-1">
      <NavLink to={`/profile/${user.id}/activity`}>
        <div className="usr-pic"> 
          <img src={user.photos.large ? user.photos.large : 'https://forum.mikrotik.com/styles/canvas/theme/images/no_avatar.jpg'} alt=""/> 
        </div> 
          </NavLink> 
      </div>
      <div className="user-main-details">
      <NavLink to={`/profile/${user.id}/activity`}><h4>{user.name}</h4></NavLink>
<p>{user.status ? user.status : 'no status'}</p>
      </div>
      <ul className="follow-msg-dt">
        <li>
          <div className="msg-dt-sm">
            <button className="msg-btn1">Message</button>
          </div>
        </li>
        <li>
          <div className="follow-dt-sm">
            {user.followed && <button className="follow-btn1" disabled={followingInProgress.some(id => id === user.id)} onClick={()=>{unfollow(user.id)}}>Unfollow</button>}
            {!user.followed && <button className="follow-btn1" disabled={followingInProgress.some(id => id === user.id)} onClick={()=>{follow(user.id)}}>Follow</button>}
            
            
          </div>
        </li>
      </ul>
      <div className="profile-link">
          <NavLink to={`/profile/${user.id}/activity`}>View Profile</NavLink>
      </div>
    </div>							
  </div>	
</div>
}

export default User
