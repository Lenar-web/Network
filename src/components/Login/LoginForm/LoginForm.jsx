import React from "react";
import LoginFormRedux from "./LoginFormRedux";
import {login} from "../../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    let onSubmit = (data) => {
        props.login(data);
    }
    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <LoginFormRedux captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
}
let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}
export default connect(mapStateToProps,{login})(LoginForm);