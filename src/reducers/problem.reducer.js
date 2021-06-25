import { problemConstants } from "../actions/constants";


const initState ={
    problema : '',
    cadastrando : '',
    cadastrado : '',
    error: null 
}

export default (state = initState, action ) => {

    console.log(action)

    switch(action.type){
        case `${problemConstants.USER_PROBLEM}_REQUEST`:
            state = {
                ...state,
                cadastrando: true
            }
            break;
        case `${problemConstants.USER_PROBLEM}_SUCCESS`:
            state = {
                ...state,
                ...action.payload.user,
                cadastrado: true,
                cadastrando: false
            }
            break;
        case `${problemConstants.USER_PROBLEM}_FAILURE`:
            state = {
                ...state,
                cadastrado: false,
                cadastrando: false,
                error: action.payload.error
            }
            break;
    }
    return state;
}