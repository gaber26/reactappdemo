import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './assets/css/reset.scss'  // 基本全局样式
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import 'antd-mobile/dist/antd-mobile.css';        // 加载 CSS
// import 'antd-mobile/lib/date-picker/style';         // 加载 LESS

import Tabbar from './tabbar'

ReactDOM.render(
  <Provider store={store}>
    <Tabbar/>
  </Provider>, // 组件
  document.getElementById('root') //挂载在哪里
);
