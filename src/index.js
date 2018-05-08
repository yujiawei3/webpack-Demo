import React from "react"
import ReactDOM from "react-dom";
import './index.css';
import './index.scss';
ReactDOM.render(<h1>hello world</h1>,document.getElementById('app'))
if(module.hot){
	module.hot.accept()
}