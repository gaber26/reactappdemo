import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

// compose增强函数====这里用于谷歌调试插件redux-dev
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancers = composeEnhancers(applyMiddleware(thunk))

const store = createStore(
  reducer,
  enhancers
)

export default store