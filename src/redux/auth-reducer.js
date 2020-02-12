import {authAPI} from '../api/api';
const SET_USER_DATA = 'SET-USER-DATA';


let initilaState ={
id: null,
email: null,
login: null,
isAuth: false,
}

const authReducer = (state = initilaState, action) =>{
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

export const setAuthMe = (id,email,login,isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth} })

export const getAuthMe = () => async(dispatch) => {
  // делаем запрос на сервер и диспатчим id, email, login,
let data = await authAPI.me()
if (data.data.resultCode === 0) {
  let {id, email, login} = data.data.data;
  let prom = dispatch(setAuthMe(id,email, login, true))
}
}

export default authReducer