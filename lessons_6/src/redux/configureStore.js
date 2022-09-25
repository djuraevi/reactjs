import { combineReducers, createStore } from 'redux';
import { messagesReducer } from '../redux/reducers/messageReducer/messageReducer';
import { chatsReducer } from '../redux/reducers/chatReducer/chatsReducer';

export const reducer = combineReducers({
    messages: messagesReducer,
    chats: chatsReducer
})

export const store = createStore(reducer)