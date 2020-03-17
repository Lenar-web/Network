import {authAPI} from '../api/api';
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'SET-USER-DATA';
const SET_CAPTCHA = 'SET-CAPTCHA'


let initilaState ={
id: null as null | number,
email: null as null | string,
login: null as null | string,
isAuth: false,
  captchaUrl: null as null | string
}
export type InitialStateType = typeof initilaState;
const authReducer = (state = initilaState, action: any): InitialStateType =>{
  switch(action.type){
    case SET_USER_DATA:
      return{
        ...state,
        ...action.data
      }
    case SET_CAPTCHA:
      return {
        ...state,
        captchaUrl: action.captchaUrl
      }
    default:
      return state;
  }
}
type SetAuthMeActionDataType = {
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
}
type SetAuthMeActionType = {
  type: typeof SET_USER_DATA,
  data: SetAuthMeActionDataType
}
type GetCaptchaUrlSuccesType ={
  type: typeof SET_CAPTCHA,
  captchaUrl: string
}
export const setAuthMe = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthMeActionType => ({type: SET_USER_DATA, data: {id, email, login, isAuth} })
export const getCaptchaUrlSucces = (captchaUrl: string): GetCaptchaUrlSuccesType => ({type: SET_CAPTCHA, captchaUrl})


export const getAuthMe = () => async(dispatch:any) => {
  // делаем запрос на сервер и диспатчим id, email, login,
let data = await authAPI.me()
if (data.data.resultCode === 0) {
  let {id, email, login} = data.data.data;
  dispatch(setAuthMe(id,email, login, true))
}
}
export const logout = () => async(dispatch: any) => {
  let response = await authAPI.logout();
  if(response.data.resultCode === 0){
    dispatch(setAuthMe(null,null, null, false))
  }
}
export const login = (data:object) => async(dispatch: any) =>{
  let response = await authAPI.login(data);
  if(response.data.resultCode === 0){
    dispatch(getAuthMe())
  } else {
    if (response.data.resultCode === 10) {
      let captcha = await authAPI.getCaptcha();
      dispatch(getCaptchaUrlSucces(captcha.data.url))
    } else {

      let message = response.data.messages.length > 0
          ? response.data.messages[0]
          : "Error, please try again"
      dispatch(stopSubmit("login", {_error: message}))
    }
  }
}


export default authReducer