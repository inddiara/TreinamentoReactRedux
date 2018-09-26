import { FETCH_CEP_DATA } from '../actions/fetchCepData';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_CEP_DATA:
            return action.payload.data;
        default:
            return state;
    }
}