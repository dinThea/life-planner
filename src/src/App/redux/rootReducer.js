import { combineReducers }          from 'redux';
import { reducer as homeReducer }   from '../modules/home';

const rootReducer = combineREducers({ homeReducer });

export default rootReducer;