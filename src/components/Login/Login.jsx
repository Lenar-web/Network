import React from 'react'
import LoginForm from "./LoginForm/LoginForm";

const Login = (props) =>{
  return <main className="register-mp">
      <div className="main-section">
          <div className="container">
              <div className="row justify-content-md-center">
                  <div className="col-md-10">
                      <div className="login-register-bg">
                          <div className="row no-gutters">
                              <div className="col-lg-6">
                                  <div className="lg-left">
                                      <div className="lg-logo">
                                          <a href="index.html"><img src="images/login-register/logo.svg" alt="" /></a>
                                      </div>
                                      <div className="lr-text">
                                          <h2>Login Now</h2>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum
                                              blandit felis a hendrerit.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <div className="lr-right">
                                      <div className="login-register-form">
                                          <LoginForm/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </main>
}


export default Login