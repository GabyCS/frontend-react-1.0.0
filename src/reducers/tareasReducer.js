
const tareasReducer = (state = {
	getTareasFetch:false,
	getTareasError:false,
	listado_tareas:false
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
		default:

			break;
	}
	return state;
};

export default tareasReducer;