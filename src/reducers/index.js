import { combineReducers } from 'redux';
import CepDataReducer from './cepDataReducer';

const rootReducer = combineReducers({
    cepData: CepDataReducer,
});

export default rootReducer;