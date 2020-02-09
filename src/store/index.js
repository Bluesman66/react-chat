import { createStore } from 'redux';
import chatReducer from 'reducers';

export default createStore(
	chatReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);