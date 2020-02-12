import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form';
import usersReducer from "./users-reducer";
import appReducer from "./app-reducer";

// комбайним redusers
let reducers = combineReducers({
  profilePage: profileReducer, 
  auth: authReducer,
  users: usersReducer,
  app: appReducer,
  // подключаем redux-form
  form: formReducer,
})
// подключаем расширение хрома
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// создаем store и подключаем redux-thunk
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;