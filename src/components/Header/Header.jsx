import React, {useState}  from 'react'
import headerLogo from '../../assets/images/logo.svg'
import {NavLink} from 'react-router-dom';

const Header = ({login, isAuth, logout}) => {

let [dropDown, setDropDown] = useState(false);
let showDropDown = () => {
	if(dropDown){
		setDropDown(false)
	}else{
		setDropDown(true)
	}

};
let openDropDown = () => {
  setDropDown(true)
};
let closeDropDown = () => {
	setDropDown(false)
}

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


							<div className="account order-1 dropdown" >
								<div className="account-link dropdown-toggle-no-caret" role="button" data-toggle="dropdown" onMouseOver={openDropDown}>
									<div className="user-dp"><img src="images/dp.jpg" alt=""/></div>
									{/* Если авторизован показать логин иначе кнопку входа*/}
									{isAuth && <div><span>Hi! {login}</span><i className="fas fa-angle-down"></i></div>}
								
								</div>
								<div className={`dropdown-menu account-dropdown dropdown-menu-right ${dropDown ? 'show' : ''}`} onMouseLeave={closeDropDown}>
								   <NavLink className='link-item' to='/profile'>Profile</NavLink>
									<NavLink className='link-item' to='/users'>Users</NavLink>
									<NavLink className="link-item" to="/login" onClick={logout}>Logout</NavLink>
								</div>

						
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