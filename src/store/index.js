import {createStore,combineReducers,applyMiddleware} from 'redux'
// 中间键，用来支持异步action
import thunk from 'redux-thunk'
import layoutReducer from './reducer/layout'
const reducer =combineReducers({
    layoutReducer
})
const store = createStore(reducer,applyMiddleware(thunk))

export default store