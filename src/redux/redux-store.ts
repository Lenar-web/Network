import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form';
import usersReducer from "./users-reducer";
import appReducer from "./app-reducer";

// комбайним redusers
let rootReducer = combineReducers({
  profilePage: profileReducer,
  auth: authReducer,
  users: usersReducer,
  app: appReducer,
  // подключаем redux-form
  form: formReducer,
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

// подключаем расширение хрома
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// создаем store и подключаем redux-thunk
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.__store__ = store;

export default store;