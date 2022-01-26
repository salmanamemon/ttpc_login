import {combineReducers} from 'redux';

// Session
import { sessionReducer } from 'redux-react-session';

const rootReducer = combineReducers({
    session: sessionReducer
});

export default rootReducer;