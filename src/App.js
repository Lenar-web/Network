import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import LeftMenu from './components/LeftMenu/LeftMenu';
import MyProfile from './components/MyProfile/MyProfile';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) =>{
  return(
    <div>
			
      <HeaderContainer />
      <main>	
			<div className="main-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-5">
							<div className="main-left-sidebar">
                <MyProfile />
								<LeftMenu />
							</div>
						</div>
						<div className="col-lg-9 col-md-7">
						<Route path='/' exact render={ ()=><ProfileContainer />} />
            <Route path='/profile/:userId?' render={ ()=> <ProfileContainer /> } />
            <Route path='/users' render={ ()=> <UsersContainer /> } />
						</div>

					</div>
				</div>
			</div>
		</main>
    </div>
  )
}

export default App;
