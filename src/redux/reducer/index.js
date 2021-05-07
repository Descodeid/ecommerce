import {combineReducers} from 'redux';
import {photoReducer} from './photo';

const reducer = combineReducers({
  photoReducer,
});

export default reducer;
