import {applyMiddleware, combineReducers, createStore} from "redux";
import homeReducer from "../reducers/homeReducer"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
    home: homeReducer,
    form: formReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;