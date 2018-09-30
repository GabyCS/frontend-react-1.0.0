import { iniciarSesion, cerrarSesion } from "../api/loginApi";
import { sessionReducer, sessionService, sessionStorage  } from 'redux-react-session';

export const loginFetch = () => {
    return {
        type: "LOGIN_FECHING"
    }
}


export const loginSuccess = data => {
    sessionService.saveUser(data);
    sessionService.saveSession({session:'jhjhjkh'+data});
    return {
        type: "LOGIN_SUCCESS",
         data: data
    }
}


export const loginFailure = (err) => {
    return {
        type: "LOGIN_FAILURE"
    }
}

export function loginFetchGen(user){
    return (dispatch)=>{
        dispatch(loginFetch())
        iniciarSesion(user)
            .then((response) => {
                dispatch(loginSuccess(response))
            })
            .catch((err) => {
                    dispatch(loginFailure(err))
                }
            );  
    }
}

export const logoutFetch = () => {
    return {
        type: "LOGOUT_FECHING"
    }
}


export const logoutSuccess = () => {
    sessionService.deleteUser();
    sessionService.deleteSession();
    return {
        type: "LOGOUT_SUCCESS",
    }
}


export const logoutFailure = (err) => {
    return {
        type: "LOGOUT_FAILURE"
    }
}

export function logoutFetchGen(user){
    return (dispatch)=>{
        dispatch(logoutFetch())
        cerrarSesion(user)
            .then((response) => {
                dispatch(logoutSuccess())
            })
            .catch((err) => {
                    dispatch(logoutFailure(err))
                }
            );  
    }
}
