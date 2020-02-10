import React from 'react'


const Post = ({author, text, like}) => {
  return      <div className="activity-posts">																					
  <div className="activity-group1">																					
    <div className="main-user-dts1">																					
      <img src="https://forum.mikrotik.com/styles/canvas/theme/images/no_avatar.jpg" alt=""/>
      <div className="user-text3">
         <h4>{author}</h4>
      </div>											
    </div>
    <div className="dot-option dropdown">
      <span className="dropdown-toggle-no-caret" role="button" data-toggle="dropdown"><i className="fas fa-ellipsis-v"></i></span>
      <div className="dropdown-menu post-rt-dropdown dropdown-menu-right">
        <a className="post-link-item" href="my_dashboard_activity.html#">Hide</a>																							
        <a className="post-link-item" href="my_dashboard_activity.html#">Edit</a>
        <a className="post-link-item" href="my_dashboard_activity.html#">Delete</a>																									
      </div>
    </div>
  </div>									
  <div className="activity-descp">
    <p>{text}</p>
  </div>
  <div className="like-comment-view">
    <div className="left-comments">
      <a href="my_dashboard_activity.html#" className="like-item" title="Like">
        <i className="fas fa-heart"></i>
          <span><ins>Like</ins> {like}</span>
      </a>
    </div>
  </div>
</div>
}


export default Post