import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import Router from '@/router';
import * as serviceWorker from './serviceWorker';
import  Axios  from '@/utils/axios'
import 'antd/dist/antd.css'//全局引入antd样式

Component.prototype.$axios=Axios

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); // 如果项目要上线，这里需要改成register()
