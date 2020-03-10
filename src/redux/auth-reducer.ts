import {authAPI} from '../api/api';
const SET_USER_DATA = 'SET-USER-DATA';

export type InitialStateType = {
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
  captchaUrl: string | null
}
let initilaState: InitialStateType ={
id: null,
email: null,
login: null,
isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initilaState, action: any): InitialStateType =>{
  switch(action.type){
    case SET_USER_DATA:
      return{
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}
type setAuthMeActionDataType = {
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
}
type setAuthMeActionType = {
  type: typeof SET_USER_DATA,
  data: setAuthMeActionDataType
}
export const setAuthMe = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthMeActionType => ({type: SET_USER_DATA, data: {id, email, login, isAuth} })

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
  } else  {}
  if(response.data.resultCode === 1){

  }else{

  }

}


export default authReducer