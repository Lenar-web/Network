import React from 'react'
import User from './User/User'
import Preloader from '../Common/Preloader/Preloader';
import Pagination from '../Common/Pagination/Pagination';
import ButtonMore from "../Common/ButtonMore/ButtonMore";

const Users = (props) => {

	let UserItem = props.users.map(u => <User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow} followingInProgress={props.followingInProgress}/>);
  return (
    <div className="dash-discussions mb20">
						<div className="main-section">							
								<div className="row">
									{UserItem}
									{props.isFetching
									? <Preloader /> : null}

                  </div>
							<button className="msg-btn1" onClick={props.onPageChange}>Load more</button>
                </div>

								{/*<Pagination totalCount={props.totalUserCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChange={props.onPageChange} portionSize={10} />*/}
						</div>
  )
}

export default Users
