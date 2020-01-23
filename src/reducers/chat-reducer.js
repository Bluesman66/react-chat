import { combineReducers } from 'redux';
import peopleReducer from './people-reducer';
import messagesReducer from './messages-reducer';

const chatReducer = combineReducers({
	peopleReducer,
	messagesReducer
});

export default chatReducer;