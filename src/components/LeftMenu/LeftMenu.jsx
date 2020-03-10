import React from 'react'
import {NavLink} from 'react-router-dom';

const LeftMenu = (props) => {
  return (
    <div className="user-data full-width">
    <div className="categories-items">
      <NavLink className="category-item" to="/profile"><i className="fas fa-user-alt"></i>Profile</NavLink>
      {/*<NavLink className="category-item" to="/dialogs"><i className="fas fa-envelope"></i>Messages</NavLink>*/}
      <NavLink className="category-item" to="/users"><i className="fas fa-users"></i>Users</NavLink>
      <NavLink className="category-item" to="/setting"><i className="fas fa-cog"></i>Setting</NavLink>			
    </div>
  </div>
  )
}
export default LeftMenu;