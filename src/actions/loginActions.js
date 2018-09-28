import { iniciarSesion, cerrarSesion } from "../api/loginApi";

export const loginFetch = () => {
    return {
        type: "LOGIN_FECHING"
    }
}


export const loginSuccess = data => {
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


