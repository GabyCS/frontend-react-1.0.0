import { obtenerListadoTareas } from "../api/tareasApi";
import { sessionReducer, sessionService, sessionStorage  } from 'redux-react-session';

export const getTareasFetch = () => {
    return {
        type: "GET_TAREAS_FECHING"
    }
}


export const getTareasSuccess = data => {
    return {
        type: "GET_TAREAS_SUCCESS",
         data: data
    }
}


export const getTareasFailure = (err) => {
    return {
        type: "GET_TAREAS_FAILURE"
    }
}

export function getTareasFetchGen(user){
    return (dispatch)=>{
        dispatch(getTareasFetch())
        obtenerListadoTareas(user)
            .then((response) => {
                dispatch(getTareasSuccess(response))
            })
            .catch((err) => {
                    dispatch(getTareasFailure(err))
                }
            );  
    }
}
