import {getAuthMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS"
let initilaState ={
    initialized: false,
}
const appReducer = (state = initilaState, action) =>{
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}
export const initilizedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initialApp = () => (dispatch) => {
    let promised = dispatch(getAuthMe());

    Promise.all([promised]).then( (u) =>{
        dispatch(initilizedSuccess())
    })
}
export default appReducer;