import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import LeftMenu from './components/LeftMenu/LeftMenu';
import MyProfile from './components/MyProfile/MyProfile';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import {connect} from "react-redux";
import Preloader from "./components/Common/Preloader/Preloader";
import {initialApp} from "./redux/app-reducer";
import Login from './components/Login/Login'
class App extends React.Component {
	componentDidMount() {
		this.props.initialApp()
	}


	render() {

		if(!this.props.initialized){
			return <Preloader />
		}
		return (
			<div>

				<HeaderContainer/>
				<main>
					<div className="main-section">
						<div className="container">
							<div className="row">

								{this.props.isAuth && <div className="col-lg-3 col-md-5">
									<div className="main-left-sidebar">
										 <MyProfile/>
										<LeftMenu/>
									</div>
								</div>}
								<Route path='/login' render={() => <Login />}/>
								<div className="col-lg-9 col-md-7">
									<Switch>
										{!this.props.isAuth &&
										<Redirect  to="/login"/>
										}
										<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
										<Route path='/users' render={() => <UsersContainer/>}/>
										{this.props.isAuth && <Route render={() => <ProfileContainer/>}/>}
									</Switch>
								</div>

							</div>
						</div>
					</div>
				</main>
			</div>
		)
	}
}

let mapStateToProps = (state) => ({
	initialized: state.app.initialized,
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{initialApp})(App);
