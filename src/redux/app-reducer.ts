import {getAuthMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS"

export type InitialStateType = {
    initialized: boolean,
}
let initilaState: InitialStateType ={
    initialized: false,
}
const appReducer = (state = initilaState, action:any):InitialStateType =>{
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

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initilizedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});



export const initialApp = () => (dispatch:any) => {
    let promised = dispatch(getAuthMe());

    Promise.all([promised]).then( (u) =>{
        dispatch(initilizedSuccess())
    })
}


export default appReducer;