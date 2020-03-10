import React from "react";
import { Field, reduxForm} from 'redux-form';

const LoginFormRedux = (props) => {
    return <form onSubmit={props.handleSubmit}>
    <div className="form-group">
        <Field className="title-discussion-input" component={'input'} type={"email"} placeholder="Your login" name="email"/>
    </div>
    <div className="form-group">
        <Field className="title-discussion-input" component={'input'} type={"password"} placeholder="Password" name="password"/>
    </div>
    <div className="form-group form-checkbox">
        <Field className="custom-checkbox" component={'input'} type={"checkbox"} name="rememberMe" id="remember-checkbox"/>
        <label className="label-checkbox" htmlFor='remember-checkbox'>Remeber Me</label>
    </div>
        {props.captchaUrl &&
        <div className="form-group">
            <img src={props.captchaUrl}/>
            <Field className="title-discussion-input" component={'input'} type={"text"} name="captcha" placholder={"Код с картинки"}/>
        </div>
        }
    <button className="login-btn" type="submit">Login Now</button>
</form>}

export default reduxForm({form: 'login'})(LoginFormRedux)