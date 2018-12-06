import {combineReducers} from 'redux'
import { routerReducer } from "react-router-redux";
import {UsersList} from './users'
import {UserData} from './user'

export default combineReducers({
    usersList: UsersList,
    userData: UserData,
    routing: routerReducer
})
