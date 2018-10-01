
const tareasReducer = (state = {
	getTareasFetch:false,
	getTareasError:false,
	crearTareaFetch:false,
	crearTareaError:false,
	crearTareaSuccess:false
}, action) =>{
	switch(action.type){
		case "GET_TAREAS_FECHING":
			return {
				...state,
				getTareasFetch:true
			}
		case "GET_TAREAS_SUCCESS":
            return {
                ...state,
                listado_tareas:action.data,
                getTareasFetch:false,
                getTareasError:false
            };
        case "GET_TAREAS_FAILURE":
            return {
                ...state,
                getTareasFetch:false,
                getTareasError:true,
              
            };
        case "CREAR_TAREA_FECHING":
			return {
				...state,
				crearTareaFetch:true
			}
		case "CREAR_TAREA_SUCCESS":
            return {
                ...state,
                crearTareaSuccess:true,
                crearTareaFetch:false,
                crearTareaError:false
            };
        case "CREAR_TAREA_FAILURE":
            return {
                ...state,
                crearTareaSuccess:false,
                crearTareaFetch:false,
                crearTareaError:true,
              
            };
		default:

			break;
	}
	return state;
};

export default tareasReducer;