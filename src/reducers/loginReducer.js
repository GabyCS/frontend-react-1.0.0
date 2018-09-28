const loginReducer = (state = {
	loginFetch:false,
	loginError:false,
	user:''
}, action) =>{
	console.log(action);
	switch(action.type){
		case "LOGIN_FECHING":
			return {
				...state,
				loginFetch:true
			}
		case "LOGIN_SUCCESS":
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
		default:

			break;
	}
	return state;
};

export default loginReducer;