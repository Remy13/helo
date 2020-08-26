import axios from 'axios';

const initialState = {
    user: {},
    isLoggedIn: false
}

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_USER = 'GET_USER';
const REGISTER_USER = 'REGISTER_USER';

export function registerUser(user){
    console.log(user)
    return {
        type: REGISTER_USER,
        payload: user
    }
}

export function loginUser(user){
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: initialState
    }
}

export function getUser(){
    const user = axios.get('/auth/user')
    return {
        type: GET_USER,
        payload: user
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            return {...state, user: action.payload, isLoggedIn: true}
        case REGISTER_USER: 
            return {...state, user: action.payload, isLoggedIn: true}
        case LOGOUT_USER:
            return {...state, ...action.payload}
        case GET_USER + "_PENDING":
            return state
        default:
            return initialState
    }
}

