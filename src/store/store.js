import {createStore} from 'redux';
import authReducer from './Auth';

const store = createStore(authReducer);

export default store;