import React, {useState}  from 'react'
import headerLogo from '../../assets/images/logo.svg'
import {NavLink} from 'react-router-dom';

const Header = ({login, isAuth}) => {

let [dropDown, setDropDown] = useState(false);
let closeDropDown = () => {
	setDropDown(false)
};
let openDropDown = () => {
  setDropDown(true)
};

  return(
		<header>
			<div className="container">				
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12">
						<nav className="navbar navbar-expand-lg navbar-light bg-dark1 justify-content-sm-start">
							<a className="order-1 order-lg-0 ml-lg-0 ml-3 mr-auto" href="/"><img src={headerLogo} alt=""/></a>
							<button className="navbar-toggler align-self-start" type="button">
								<i className="fas fa-bars"></i>
							</button>


							<div className="account order-1 dropdown">
								<div onClick={openDropDown} className="account-link dropdown-toggle-no-caret" role="button" data-toggle="dropdown"> 
									<div className="user-dp"><img src="images/dp.jpg" alt=""/></div>
									{/* Если авторизован показать логин иначе кнопку входа*/}
									{isAuth && <div><span>Hi! {login}</span><i className="fas fa-angle-down"></i></div>}
								</div>
								<div onMouseLeave={closeDropDown} className={`dropdown-menu account-dropdown dropdown-menu-right ${dropDown ? 'show' : ''}`}>
								   <NavLink className='link-item' to='/profile'>Profile</NavLink>
									<a className="link-item" href="#">Messages</a>
									<a className="link-item" href="#">Users</a>
									<a className="link-item" href="#">Setting</a>
									<a className="link-item" href="#">Logout</a>									
								</div>
							
								{!isAuth &&
          	<NavLink className='login-link' to='/login'>Login</NavLink>}
							</div>							
						</nav>
						<div className="overlay"></div>
					</div>					
				</div>					
			</div>
		</header>
  )
}

export default Header;