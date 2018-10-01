import { obtenerListadoTareas, crearTarea } from "../api/tareasApi";
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

export const crearTareaFetch = () => {
    return {
        type: "CREAR_TAREA_FECHING"
    }
}


export const crearTareaSuccess = data => {
    return {
        type: "CREAR_TAREA_SUCCESS"
    }
}


export const crearTareaFailure = (err) => {
    return {
        type: "CREAR_TAREA_FAILURE"
    }
}

export function crearTareaFetchGen(data, user) {
    return (dispatch)=>{
        dispatch(crearTareaFetch())
        crearTarea(data,user)
            .then((response) => {
                dispatch(crearTareaSuccess(response))
            })
            .catch((err) => {
                    dispatch(crearTareaFailure(err))
                }
            );  
    }
}