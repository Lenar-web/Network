import React, {FC} from 'react'
import User from './User/User'
import Preloader from '../Common/Preloader/Preloader';
import {UserType} from "../../types/types";

type PropsType = {
	users: Array<UserType>,
	onPageChange: () => void,
	isFetching: boolean,
	followingInProgress: Array<number>,
	unfollow: (userId: number) => void,
	follow: (userId: number) => void
}
const Users: FC<PropsType> = ({users, onPageChange, isFetching, followingInProgress, unfollow, follow}) => {

	let UserItem = users.map(u => <User key={u.id} user={u} follow={follow} unfollow={unfollow} followingInProgress={followingInProgress}/>);
  return (
    <div className="dash-discussions mb20">
						<div className="main-section">							
								<div className="row">
									{UserItem}
									{isFetching
									? <Preloader /> : null}

                  </div>
							<button className="msg-btn1 btn-more" onClick={onPageChange}>Load more</button>
                </div>

								{/*<Pagination totalCount={props.totalUserCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChange={props.onPageChange} portionSize={10} />*/}
						</div>
  )
}

export default Users
