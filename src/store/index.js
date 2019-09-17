import {applyMiddleware,createStore} from 'redux'
import reducer from './reducer'
// 使用中间件增强dispatch
import thunkMiddleware from 'redux-thunk';  //异步action
import {createLogger} from 'redux-logger';   //可以输出state的变化log，nextState

const Middleware = applyMiddleware(thunkMiddleware, createLogger());
const store = createStore(reducer,Middleware)

export default store