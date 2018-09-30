
const loginReducer = (state = {
	loginFetch:false,
	loginError:false,
	user:false
}, action) =>{
	console.log('action', action);
	switch(action.type){
		case "LOGIN_FECHING":
			return {
				...state,
				loginFetch:true
			}
		case "LOGIN_SUCCESS":
			//browserHistory.push('/')
            return {
                ...state,
                user:action.data,
                loginFetch:false,
                loginError:false
            };
        case "LOGIN_FAILURE":
            return {
                ...state,
                loginFetch:false,
                loginError:true,
              
            };
         case "LOGOUT_SUCCESS":
			//browserHistory.push('/')
            return {
                ...state,
                user:false,
                loginFetch:false,
                loginError:false
            };
		default:

			break;
	}
	return state;
};

export default loginReducer;